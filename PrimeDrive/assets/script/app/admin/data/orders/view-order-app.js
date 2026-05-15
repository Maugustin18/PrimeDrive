import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const db = getFirestore();

export async function getOrder(orderId) {
    const orderSnap = await getDoc(doc(db, "reservations", orderId));
    const orderData = orderSnap.data();

    let clientName = null;
    let carModelName = null;
    let carBrandName = null;
    let clientId = null;
    let carId = null;

    if (orderData.clientId) {
        const clientSnap = await getDoc(doc(db, "clients", orderData.clientId));
        if (clientSnap.exists()) {
            const client = clientSnap.data();
            clientName = `${client.fName} ${client.lName}`;
            clientId = clientSnap.id;
        }
    }

    if (orderData.carId) {
        const carSnap = await getDoc(doc(db, "cars", orderData.carId));
        carId = carSnap.id;
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
                    carModelName = modelData.name;
                    carBrandName = brandData.name;
                } else {
                    console.log("No brand found");
                    return null;
                }
            } else {
                console.log("No model found");
                return null;
            }         
        }
    }

    return {
        ...orderData,
        id: orderId,
        clientName,
        clientId,
        carId,
        carModelName,
        carBrandName
    };
}


export async function changeOrderStatus(orderId, status) {
    const orderRef = doc(db, "reservations", orderId);
    await updateDoc(orderRef, { status });
    return true;
};