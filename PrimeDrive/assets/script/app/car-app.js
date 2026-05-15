import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getCar, getCarPhotos } from "./admin/data/car/view-car-app.js";

const db = getFirestore();

export async function getCarsFromSameBrand(modelId, carId) {
    try {
        const modelDocRef = doc(db, "models", modelId);
        const modelSnap = await getDoc(modelDocRef);
        if (!modelSnap.exists()) throw new Error("Model not found");

        const { brand } = modelSnap.data();

        const modelsRef = collection(db, "models");
        const modelsQuery = query(modelsRef, where("brand", "==", brand));
        const modelsSnap = await getDocs(modelsQuery);
        const modelIdsOfSameBrand = modelsSnap.docs.map(doc => doc.id);

        // console.log("Model IDs of the same brand:", modelIdsOfSameBrand);

        if (modelIdsOfSameBrand.length === 0) return [];

        const carsRef = collection(db, "cars");
        const carsSnap = await getDocs(carsRef);
        const allCars = carsSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        let matchingCars = allCars.filter(
            car => modelIdsOfSameBrand.includes(car.model) && car.id !== carId
        );
        // allCars.forEach(element => {
        //     console.log("Car:", element.model);
        // });
        // console.log("Matching cars:", matchingCars);

        if (matchingCars.length < 3) {
            const needed = 3 - matchingCars.length;
            const fillerCars = allCars
                .filter(car => !matchingCars.find(c => c.id === car.id) && car.id !== carId)
                .slice(0, needed);

            matchingCars = [...matchingCars, ...fillerCars];
        }

        const completedCars = await Promise.all(
            matchingCars.map(async (car) => {
                const [carData, photos, reviewCount] = await Promise.all([
                    getCar(car.id),
                    getCarPhotos(car.id),
                    countCarReviews(car.id)
                ]);

                return {
                    ...carData,
                    photos,
                    reviewCount
                };
            })
        );

        return completedCars;
    } catch (err) {
        console.log(err);
        return [];
    }
}

async function countCarReviews(carId) {
    const reviewsRef = collection(db, "reviews");
    const q = query(reviewsRef, where("carId", "==", carId));
    const snapshot = await getDocs(q);
    return snapshot.size;
}



// ADD RESERVATION
export async function findClientByEmail(email) {
    try {
        const clientsRef = collection(db, "clients");
        const q = query(clientsRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log("No client found with this email.");
            return null;
        }

        const clientDoc = querySnapshot.docs[0];
        return {
            id: clientDoc.id,
            ...clientDoc.data()
        };
    } catch (err) {
        console.log(err);
        return null;
    }
}