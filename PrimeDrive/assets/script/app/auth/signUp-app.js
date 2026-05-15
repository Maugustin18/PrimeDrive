import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithRedirect, getRedirectResult, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../app.js";
import { addAlert } from "../../actions/global/alert.js";
import { setURLPath } from "../../functions/global/URLPosition.js";

console.log(auth)

// SIGN UP WITH PASSWORD AND EMAIL
export async function signUpWithEmailAndPassword(userDetails) {
    const {fName, lName, phone, email, password, confirmPassword, agreement} = userDetails;
    const db = getFirestore();

    if(!(fName==="" || lName==="" || phone==="")) {
        if(password===confirmPassword){
            if(agreement===true){
                createUserWithEmailAndPassword(auth, email, password)
                .then( async (userCredential)=>{
                    const {user} = userCredential;
                    const generalUserData = {
                        email: email,
                        fName: fName,
                        lName: lName,
                        phone: phone,
                        timeCreated: new Date(),
                    }
                    const userData = {
                        ...generalUserData,
                        agreement: agreement,
                        role: 0,
                        photo: '',
                    };
                    addAlert('FM-S-0001');

                    const clientRef = collection(db, "clients");
                    const q = query(clientRef, where("email", "==", email));
                    const querySnapshot = await getDocs(q);

                    if(querySnapshot.empty){
                        const clientData = {
                            ...generalUserData,
                            accoundID: user.uid,
                        };
                        const docClientRef = await addDoc(collection(db, "clients"), clientData);
                    }

                    const docRef = doc(db, "users", user.uid);
                    setDoc(docRef, userData)
                    .then(()=>{
                        signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential)=>{
                            addAlert('US-S-0000');
                            const {user} = userCredential;
                            localStorage.setItem('loggedInUserId', user.uid);
                            sendEmailVerification(auth.currentUser);
                            window.location.href = `${setURLPath()}./pages/user/account.html`;
                        })
                        .catch((err)=>{
                            const errorCode = err.code;
                            console.log(err)
                            if(errorCode==='auth/invalid-credential'){
                                addAlert('FM-S-0003');
                            } else {
                                addAlert('US-S-0001');
                            }
                        });
                        // window.location.href = `${setURLPath()}./pages/user/login.html`;
                        console.log(userData);
                    })
                    .catch((err)=>{
                        console.log(err);
                    });
                })
                .catch((err)=>{
                    const errorCode = err.code;
                    if(errorCode==='auth/email-already-in-use'){
                        addAlert('FM-E-0001');
                        addAlert('AC-C-0000');
                    } else {
                        addAlert('FM-S-0002');
                    }
                    console.log(err)
                })
            } else {
                addAlert('FM-S-0004');
            }
        } else {
            addAlert('FM-D-0001');
        }
    } else {
        addAlert('FM-D-0000');
    }
}