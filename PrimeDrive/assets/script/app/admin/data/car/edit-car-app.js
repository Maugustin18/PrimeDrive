import { getFirestore, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { supabaseApp } from "../../../app.js";
import { uploadPhotos } from "./add-car-app.js";

const db = getFirestore();

// GET CAR PHOTOS INFO
export async function getCarPhotosInfo(carId) {
    const { data: files, error } = await supabaseApp
        .storage
        .from('cars') // your bucket name
        .list(carId);

    if (error) {
        console.log(error.message);
    } else {
        const fileDetails = files.map(file => {
            const publicUrl = supabaseApp
                .storage
                .from('cars')
                .getPublicUrl(`${carId}/${file.name}`).data.publicUrl;

            return {
                name: file.name,
                size: file.metadata.size,
                updatedAt: file.updated_at,
                publicUrl: publicUrl
            };
        });

        return fileDetails;
    }
}



// UPDATE CAR
export async function updateCar(carId, carData) {
    try {
        const carRef = doc(db, "cars", carId);
        await updateDoc(carRef, carData);
        console.log("Car updated with ID:", carId);
    } catch (err) {
        console.log(err);
    }
}

// UPDATE CAR PHOTOS

export async function updateCarPhotos(carId, photos) {
    const { data: files, error: listError } = await supabaseApp
        .storage
        .from('cars')
        .list(carId);
    listError ? console.log(listError.message) : null;

    if (files && files.length > 0) {
        const filePaths = files.map(file => `${carId}/${file.name}`);
        const { error: deleteError } = await supabaseApp
            .storage
            .from('cars')
            .remove(filePaths);
        deleteError ? console.log(deleteError.message) : null;
    }
    

    uploadPhotos(photos, carId);
}   