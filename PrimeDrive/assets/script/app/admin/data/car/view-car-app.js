import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { supabaseApp } from "../../../app.js";
const db = getFirestore();


// GET CAR INFO
export async function getCar(carId) {
    try {
        const carRef = doc(db, "cars", carId);
        const carSnap = await getDoc(carRef);
        if (carSnap.exists()) {
            const carData = carSnap.data();
            const modelRef = doc(db, "models", carData.model);
            const modelSnap = await getDoc(modelRef);
            if (modelSnap.exists()) {
                const modelData = modelSnap.data();
                const brandRef = doc(db, "brands", modelData.brand);
                const brandSnap = await getDoc(brandRef);
                if (brandSnap.exists()) {
                    const brandData = brandSnap.data();
                    return { id: carSnap.id, ...carData, modelId: modelSnap.id, model: modelData, brand: brandData };
                } else {
                    console.log("No brand found");
                    return null;
                }
            } else {
                console.log("No model found");
                return null;
            }
        } else {
            console.log("No car found");
            return null;
        }
    } catch (err) {
        console.log("Error getting car:", err);
    }    
}

// GET CAR PHOTOS
export async function getCarPhotos(carId) {
  const { data: files, error } = await supabaseApp
    .storage
    .from('cars')
    .list(carId); 

  if (error) {
    console.log(error.message);
    return [];
  }

  return files.map(file => {
    const { data } = supabaseApp
      .storage
      .from('cars')
      .getPublicUrl(`${carId}/${file.name}`);
    return data;
  });
}


// GET CAR RESERVATIONS
export async function getCarReservations(carId) {
    try {
        const reservationsRef = collection(db, "reservations");
        const q = query(reservationsRef, where("carId", "==", carId));
        const querySnapshot = await getDocs(q);
        const reservations = [];
        for(const booking of querySnapshot.docs) {

            const clientRef = doc(db, "clients", booking.data().clientId);
            const clientSnap = await getDoc(clientRef);
            const clientData = clientSnap.data();

            reservations.push({ id: booking.id, ...booking.data(), client: clientData });
        }
        return reservations;
    } catch (err) {
        console.log("Error getting car reservations:", err);
    }
}

// GET CAR REVIEWS
export async function getCarReviews(carId) {
    try {
        const reviewsRef = collection(db, "reviews");
        const q = query(reviewsRef, where("carId", "==", carId));
        const querySnapshot = await getDocs(q);
        const reviews = [];
        for(const review of querySnapshot.docs) {
            const clientRef = doc(db, "clients", review.data().clientId);
            const clientSnap = await getDoc(clientRef);
            const clientData = clientSnap.data();

            reviews.push({ id: review.id, ...review.data(), client: clientData });
        }
        return reviews;
    } catch (err) {
        console.log("Error getting car reviews:", err);
    }
}