import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const db = getFirestore();


export async function getUsersWithRoleOne() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("role", "==", 1));
        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Failed to fetch users with role = 1:", error);
        return [];
    }
}