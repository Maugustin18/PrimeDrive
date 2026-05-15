import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithRedirect, getRedirectResult, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, query, where, setDoc, doc, getDoc, updateDoc, collection, getDocs, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../../../app.js";
import { addAlert } from "../../../../actions/global/alert.js";

const db = getFirestore();

export async function addUser(userData) {
    try {

        const {fName, lName, phone, email, password} = userData;
        const userQueryEmail = query(collection(db, "users"), where("email", "==", userData.email));
        const userQueryPhone = query(collection(db, "users"), where("phone", "==", userData.phone));
        const querySnapshotEmail = await getDocs(userQueryEmail);
        const querySnapshotPhone = await getDocs(userQueryPhone);

        if (!querySnapshotEmail.empty) {
            addAlert('FM-E-0001')
            throw new Error("User with this email already exists.");
            return false;
        } else if (!querySnapshotPhone.empty) {
            addAlert('FM-E-0001')
            throw new Error("User with this phone number already exists.");
            return false;
        } else {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;

            const generalUserData = {
                email,
                fName,
                lName,
                phone,
                timeCreated: new Date(),
                role: 0,
                photo: '',
                agreement: true,
            };

            const docRef = doc(db, "users", user.uid);
            await setDoc(docRef, generalUserData);
            await sendEmailVerification(user);

            addAlert('FM-S-0001');
            console.log('User created with ID:', user.uid);
            return user.uid;
        }

    } catch (err) {
        console.log(err);
        const errorCode = err.code;
        if(errorCode==='auth/email-already-in-use'){
            addAlert('FM-E-0001');
            addAlert('AC-C-0000');
        } else {
            addAlert('FM-S-0002');
        }
        console.log(err);
        if (err.code === 'auth/password-does-not-meet-requirements') {
            addAlert('FM-S-0007');
        }
        if (err.code === 'auth/invalid-email') {
            addAlert('FM-E-0000');
        }
    }
}