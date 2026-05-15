import { onAuthStateChanged, signOut, updateProfile, updateEmail, updatePassword, EmailAuthProvider, reauthenticateWithCredential} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../../app.js";

const db = getFirestore();

export async function getUserData(){
    return new Promise((resolve, reject)=>{
        onAuthStateChanged(auth, async (user)=>{
            if (user) {
                const {uid} = user;
                try {
                    const docRef = doc(db, "users", uid);
                    const docSnap = await getDoc(docRef);

                    if (!docSnap.exists()) {
                        reject('No document found matching id');
                    } else {
                        resolve(docSnap.data());
                    }
                } catch (err) {
                    reject(err);
                }
            } else {
                reject('No user found');
                return;
            }
        });
    });
}