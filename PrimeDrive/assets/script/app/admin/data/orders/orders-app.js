import { getFirestore, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


const db = getFirestore();

export async function getAllOrders() {
    const snapshot = await getDocs(collection(db, "reservations"));
    const reservations = [];
    
    const reservationDocs = snapshot.docs;

    const carPromises = reservationDocs.map(docSnap => getDoc(doc(db, "cars", docSnap.data().carId)));
    const clientPromises = reservationDocs.map(docSnap => getDoc(doc(db, "clients", docSnap.data().clientId)));

    const carSnaps = await Promise.all(carPromises);
    const clientSnaps = await Promise.all(clientPromises);

    const modelPromises = carSnaps.map(carSnap => {
        if (carSnap.exists()) {
            const carData = carSnap.data();
            return getDoc(doc(db, "models", carData.model));
        }
        return null;
    });

    const modelSnaps = await Promise.all(modelPromises);

    const brandPromises = modelSnaps.map(modelSnap => {
        if (modelSnap?.exists()) {
            const modelData = modelSnap.data();
            return getDoc(doc(db, "brands", modelData.brand));
        }
        return null;
    });

    const brandSnaps = await Promise.all(brandPromises);

    for (let i = 0; i < reservationDocs.length; i++) {
        const reservationData = reservationDocs[i].data();
        const reservationId = reservationDocs[i].id;

        const carSnap = carSnaps[i];
        const modelSnap = modelSnaps[i];
        const brandSnap = brandSnaps[i];
        const clientSnap = clientSnaps[i];

        if (
            carSnap?.exists() &&
            modelSnap?.exists() &&
            brandSnap?.exists() &&
            clientSnap?.exists()
        ) {
            const carData = carSnap.data();
            const modelData = modelSnap.data();
            const brandData = brandSnap.data();
            const clientData = clientSnap.data();

            reservations.push({
                id: reservationId,
                ...reservationData,
                car: {
                    id: carSnap.id,
                    ...carData,
                    model: modelData,
                    brand: brandData
                },
                client: {
                    id: clientSnap.id,
                    ...clientData
                }
            });
        }
    }

    return reservations;
}
