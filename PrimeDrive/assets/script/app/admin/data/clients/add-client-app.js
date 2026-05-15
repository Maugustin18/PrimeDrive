import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { addAlert } from "../../../../actions/global/alert.js";

const db = getFirestore();

export async function addClient(clientData) {
    try {
        const clientsRef = collection(db, "clients");

        const qEmail = query(
            clientsRef,
            where("email", "==", clientData.email)
        );

        const qPhone = query(
            clientsRef,
            where("phone", "==", clientData.phone)
        );

        const [emailSnap, phoneSnap] = await Promise.all([
            getDocs(qEmail),
            getDocs(qPhone)
        ]);

        if (emailSnap.empty && phoneSnap.empty) {
            const docRef = await addDoc(clientsRef, clientData);
            console.log("New client added with ID:", docRef.id);
            return docRef.id;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
}