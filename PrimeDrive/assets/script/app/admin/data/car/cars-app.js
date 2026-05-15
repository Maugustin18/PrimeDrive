import { getFirestore, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { supabaseApp } from "../../../app.js";
import { uploadPhotos } from "./add-car-app.js";
import { getCarPhotos } from "./view-car-app.js";


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

    const photoResults = await Promise.all(
        carsRaw.map(car => getCarPhotos(car.id))
    );

    const enrichedCars = [];

    for (let i = 0; i < carsRaw.length; i++) {
        const car = carsRaw[i];
        const modelSnap = modelSnaps[i];
        const brandSnap = brandSnaps[i];
        const photos = photoResults[i];

        if (modelSnap?.exists() && brandSnap?.exists()) {
            enrichedCars.push({
                ...car,
                model: modelSnap.data(),
                brand: brandSnap.data(),
                photos
            });
        }
    }

    return enrichedCars;
}