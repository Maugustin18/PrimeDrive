import { EmailAuthProvider, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, reauthenticateWithCredential, getIdTokenResult, reauthenticateWithPopup  } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../app.js";
import { addAlert } from "../../actions/global/alert.js";
import { setURLPath } from "../../functions/global/URLPosition.js";
import { resetPasswordEmail } from "./global/forgetPassword-app.js";
import { rememberCheckboxPersistence } from "./global/persistence-app.js";
import { reAuthRedirect } from "../../controller/C_reauth.js";
// import { checkReAuthSession } from "./sessionManager-app.js";



// REAUTHENTICATION
export async function reAuthWithPasswordAndEmail(email, password, rememberCheckbox) {
    onAuthStateChanged(auth, async (user) => {
        console.log(auth)
        if (user) {
            await rememberCheckboxPersistence(auth, rememberCheckbox);

            const credential = EmailAuthProvider.credential(email, password);
            
            reauthenticateWithCredential(auth.currentUser, credential)
            .then((userCredential)=>{
                addAlert('US-S-0000');
                const {user} = userCredential;
                localStorage.setItem('loggedInUserId', user.uid);
                localStorage.setItem('reAuth', true);
                window.location.href = reAuthRedirect();
                // console.log(reAuthRedirect());
            })
            .catch((err)=>{
                const errorCode = err.code;
                console.log(err)
                if(errorCode==='auth/invalid-credential'){
                    addAlert('FM-S-0003');
                } else if(errorCode==='auth/missing-password'){
                    addAlert('FM-S-0005');
                } else {
                    addAlert('US-S-0001');
                }
            });
        } else {
            console.log("No user here")
        }
    });
}


// REAUTH WITH -GOOGLE-
export async function reAuthWithGoogle() {
    const db = getFirestore();
    const provider = new GoogleAuthProvider();

    onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
            reauthenticateWithPopup (user, provider)
            .then(async (result) => {
                localStorage.setItem('loggedInUserId', result.user.uid);
                localStorage.setItem('reAuth', true);
                window.location.href = reAuthRedirect();
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }) 
}

