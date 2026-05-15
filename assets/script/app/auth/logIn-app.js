import { createUserWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence, sendPasswordResetEmail, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../app.js";
import { addAlert } from "../../actions/global/alert.js";
import { setURLPath } from "../../functions/global/URLPosition.js";
import { resetPasswordEmail } from "./global/forgetPassword-app.js";
import { rememberCheckboxPersistence } from "./global/persistence-app.js";

console.log(auth)
// LOG IN
export async function logInWithPasswordAndEmail(email, password, rememberCheckbox) {
    rememberCheckboxPersistence(auth, rememberCheckbox);
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        addAlert('US-S-0000');
        const {user} = userCredential;
        localStorage.setItem('loggedInUserId', user.uid)
        window.location.href = `${setURLPath()}index.html`;
    })
    .catch((err)=>{
        const errorCode = err.code;
        console.log(err)
        if(errorCode==='auth/invalid-credential'){
            addAlert('FM-S-0003');
        } else if(errorCode==='auth/missing-password'){
            addAlert('FM-S-0005');

        } else if(errorCode==='auth/wrong-password'){
            addAlert('FM-S-0008');
        } else {
            addAlert('US-S-0001');
        }
    });
}


// LOG IN WITH -GOOGLE-
export async function logInWithGoogle() {
    const db = getFirestore();

    await auth.signOut();
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

    signInWithPopup(auth, provider)
    .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(result)
        const user = result.user;

        if(!token){
            throw new Error("No access token found");
        }

        const res = await fetch('https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,phoneNumbers,photos', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) throw new Error("Failed to fetch user data");

        const profileData = await res.json();
        console.log(`Google Profile Data: ${profileData.names[0].familyName} ${profileData.names[0].givenName} ${profileData.emailAddresses[0].value} ${profileData.photos[0].url}`);

        const uid = user.uid;
        const userDocRef = doc(db, "users", uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()){
            const generalUserData = {
                email: profileData.emailAddresses[0].value,
                fName: profileData.names[0].familyName || '',
                lName: profileData.names[0].givenName || '',
                phone: false,
                timeCreated: new Date(),
            }
            const userData = {
                ...generalUserData,
                agreement: true,
                role: 0,
                photo: profileData.photos[0].url || '',
            };
            addAlert('FM-S-0001');

            const clientRef = collection(db, "clients");
            const q = query(clientRef, where("email", "==", profileData.emailAddresses[0].value));
            const querySnapshot = await getDocs(q);

            if(querySnapshot.empty){
                const clientData = {
                    ...generalUserData,
                    accoundID: user.uid,
                };
                const docClientRef = await addDoc(collection(db, "clients"), clientData);
            }
            const docRef = doc(db, "users", uid);

            setDoc(docRef, userData)
            .then(()=>{
                localStorage.setItem('loggedInUserId', user.uid);
                window.location.href = `${setURLPath()}index.html`;
            })
            .catch((err)=>{
                console.log(err);
            });
        } else {
            localStorage.setItem('loggedInUserId', user.uid);
            window.location.href = `${setURLPath()}index.html`;
        }
    })
    .catch((err) => {
        console.log(err);
    });
}


