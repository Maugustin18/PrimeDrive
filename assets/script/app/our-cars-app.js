import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getCarPhotos } from "./admin/data/car/view-car-app.js";

const db = getFirestore();

export async function getAllCars() {
    const snapshot = await getDocs(collection(db, "cars"));
    const carsRaw = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
    }));

    const modelSnaps = await Promise.all(
        carsRaw.map(car => getDoc(doc(db, "models", car.model)))
    );

    const brandSnaps = await Promise.all(
        modelSnaps.map(modelSnap => {
            if (!modelSnap.exists()) return null;
            const brandId = modelSnap.data().brand;
            return getDoc(doc(db, "brands", brandId));
        })
    );

    const photoPromises = carsRaw.map(car => getCarPhotos(car.id));
    const photoResults = await Promise.all(photoPromises);

    const reviewPromises = carsRaw.map(car => countCarReviews(car.id));
    const reviewResults = await Promise.all(reviewPromises);

    const enrichedCars = [];

    for (let i = 0; i < carsRaw.length; i++) {
        const car = carsRaw[i];
        const modelSnap = modelSnaps[i];
        const brandSnap = brandSnaps[i];

        if (modelSnap?.exists() && brandSnap?.exists()) {
            enrichedCars.push({
                ...car,
                model: modelSnap.data(),
                brand: brandSnap.data(),
                photos: photoResults[i],
                reviewCount: reviewResults[i]
            });
        }
    }

    return enrichedCars;
}

async function countCarReviews(carId) {
    const reviewsRef = collection(db, "reviews");
    const q = query(reviewsRef, where("carId", "==", carId));
    const snapshot = await getDocs(q);
    return snapshot.size;
}

export async function getAllBrands() {
  try {
    const brandsRef = collection(db, "brands");
    const snapshot = await getDocs(brandsRef);

    const brands = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return brands;
  } catch (err) {
    console.log("Error fetching brands:", err);
    return [];
  }
}