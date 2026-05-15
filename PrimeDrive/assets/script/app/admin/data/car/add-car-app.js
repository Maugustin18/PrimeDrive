import { getFirestore, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { supabaseApp } from "../../../app.js";

const db = getFirestore();

export async function addCar(carData) {
    try {
        const docRef = await addDoc(collection(db, "cars"), carData);
        console.log("Car added with ID:", docRef.id);
        return docRef.id; // Return the ID of the added car
    } catch (err) {
        console.log("Error adding car:", err);
    }
}

export async function addModel(modelData) {
    try {
        const modelRef = await addDoc(collection(db, "models"), modelData);
        console.log("Model added with ID:", modelRef.id);
        return modelRef.id; // Return the ID of the added model
    } catch (err) {
        console.log("Error adding model:", err);
    }
}

// export async function updateCar(carId, carData) {
//     try {
//         const carRef = doc(db, "cars", carId);
//         await updateDoc(carRef, carData);
//         console.log("Car updated with ID:", carId);
//     } catch (err) {
//         console.log("Error updating car:", err);
//     }
// }

export async function getModels() {
    const snapshot = await getDocs(collection(db, "models"));
    const models = [];
    snapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        models.push(data);
    });
    return models;
}

export async function getBrands() {
    const snapshot = await getDocs(collection(db, "brands"));
    const brands = [];
    snapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        brands.push(data);
    });
    return brands;
}


// ADD PHOTOS
export async function uploadPhotos(photos, carId) {
  photos.forEach(async (file) => {
    const folderName = carId;
    const filePath = `${folderName}/${file.name}`;

    console.log(`Uploading ${file.name} to ${filePath}`);

    const { data, error } = await supabaseApp
      .storage
      .from('cars')
      .upload(filePath, file);

    if (error) {
      console.log(error.message);
    } else {
      const { data: publicUrlData, error: urlError } = await supabaseApp
        .storage
        .from('cars')
        .getPublicUrl(filePath);

      if (urlError) {
        console.log(urlError.message);
      } else {
        console.log(publicUrlData.publicUrl);
      }
    }
  });
}