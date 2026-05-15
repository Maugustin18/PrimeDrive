import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const db = getFirestore();

export async function getUser(userId) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const qClient = query(collection(db, "clients"), where("email", "==", docSnap.data().email));
        const qClientSnap = await getDocs(qClient);

        const qNewsletterSubs = query(collection(db, "newsletterSubs"), where("email", "==", docSnap.data().email));
        const qNewsletterSubsSnap = await getDocs(qNewsletterSubs);

        return { user: docSnap.data(), clients: qClientSnap.docs.map(doc => doc.id), newsletterSubs: qNewsletterSubsSnap.docs.map(doc => doc.id) };
    } else {
        console.log("No such document!");
        return null;
    }
}