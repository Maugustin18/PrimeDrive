import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { addAlert } from "../../../../actions/global/alert.js";

const db = getFirestore();

export async function editClient(clientId, clientData) {
    try {
        const clientRef = doc(db, "clients", clientId);
        await updateDoc(clientRef, clientData);
        return clientId;
    } catch (err) {
        console.log(err);
    }
}