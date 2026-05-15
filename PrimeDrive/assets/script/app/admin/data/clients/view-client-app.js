import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const db = getFirestore();

export function viewClient(clientId) {
    return new Promise(async (resolve, reject) => {
        try {
            const clientRef = doc(db, "clients", clientId);
            const clientSnap = await getDoc(clientRef);

            if (clientSnap.exists()) {
                resolve(clientSnap.data());
            } else {
                reject('Client not found');
            }
        } catch (err) {
            console.log(err);
        }
    });
}

export function getClientReservations(clientId) {
    return new Promise(async (resolve, reject) => {
        try {
            const reservationsRef = collection(db, "reservations");
            const q = query(reservationsRef, where("clientId", "==", clientId));
            const querySnapshot = await getDocs(q);
            const reservations = [];

            for (const docSnap of querySnapshot.docs) {
                const reservationData = docSnap.data();
                const carRef = doc(db, "cars", reservationData.carId);
                const carSnap = await getDoc(carRef);

                let modelName;
                let brandName;

                if (carSnap.exists()) {
                    const carData = carSnap.data();

                    if (carData.model) {
                        const modelRef = doc(db, "models", carData.model);
                        const modelSnap = await getDoc(modelRef);

                        if (modelSnap.exists()) {
                            const modelData = modelSnap.data();
                            modelName = modelData.name;

                            if (modelData.brand) {
                                const brandRef = doc(db, "brands", modelData.brand);
                                const brandSnap = await getDoc(brandRef);

                                if (brandSnap.exists()) {
                                    brandName = brandSnap.data().name;
                                }
                            }
                        }
                    }
                }

                reservations.push({
                    id: docSnap.id,
                    ...reservationData,
                    carDetails: {
                        modelName,
                        brandName
                    }
                });
            }

            resolve(reservations);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}