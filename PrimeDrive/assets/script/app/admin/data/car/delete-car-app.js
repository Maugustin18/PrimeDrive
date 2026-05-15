import { getFirestore, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { supabaseApp } from "../../../app.js";

const db = getFirestore();

export async function deleteCar(carId) {
    try {
        await deleteDoc(doc(db, "cars", carId));
        console.log("Car deleted successfully");
    } catch (error) {
        console.error("Error deleting car:", error);
    }
};

export async function deleteCarPhotos(carId) {
    try {
        const { data, error } = await supabaseApp.storage.from("cars").remove([`photos/${carId}`]);
        if (error) throw error;
        console.log("Car photos deleted successfully", data);
    } catch (error) {
        console.error("Error deleting car photos:", error);
    }
};