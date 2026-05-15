import { getFirestore, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


const db = getFirestore();

export async function getAllClients(){
    const snapshot = await getDocs(collection(db, "clients"));
    const clients = [];
    for (const docSnap of snapshot.docs) {
        const clientData = docSnap.data();
        const clientId = docSnap.id;

        clients.push({
            id: clientId,
            ...clientData
        });
    }

    return clients;
}