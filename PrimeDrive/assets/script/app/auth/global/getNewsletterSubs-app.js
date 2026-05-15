import { onAuthStateChanged, signOut, updateProfile, updateEmail, updatePassword, EmailAuthProvider, reauthenticateWithCredential} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../../app.js";
import { getUserData } from "./userData-app.js";

const db = getFirestore();

// GET NEWSLETTER SUBSCRIPTION
export async function getNewsletterSubscription() {
    const userData = await getUserData();
    if(userData.newsletterSub != undefined){
        return userData.newsletterSub;
    } else {
        try {
            const user = await new Promise((resolve) => {
                onAuthStateChanged(auth, (user) => {
                    resolve(user);
                });
            });

            const {uid} = user;
            const newsletterCollection = await getDocs(collection(db, 'newsletterSubs'));
            const thisUserSub =  newsletterCollection.docs.find((e)=>(
                e.data().email == userData.email
            ));
            
            if(thisUserSub != undefined){
                const userDoc = doc(db, "users", uid);
                await updateDoc(userDoc, {
                    newsletterSub: true,
                });
                return true;
            } else {
                const userDoc = doc(db, "users", uid);
                await updateDoc(userDoc, {
                    newsletterSub: false,
                });
                return false;
            }
        } catch (err) {
            console.log(err)
        }
        
    }
}