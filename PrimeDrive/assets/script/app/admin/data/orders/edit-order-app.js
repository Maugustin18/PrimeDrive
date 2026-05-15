import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const db = getFirestore();

export async function updateOrder(orderId, orderData) {
    try {
        const orderRef = doc(db, "reservations", orderId);
        await updateDoc(orderRef, orderData);
        console.log(`Order ${orderId} updated successfully.`);
        return orderId;
    } catch (err) {
        console.log(err);
    }
}