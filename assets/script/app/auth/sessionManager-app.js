import { EmailAuthProvider, onAuthStateChanged, signOut, signInWithPopup, signInWithEmailAndPassword, reauthenticateWithCredential, getIdTokenResult } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { auth } from "../app.js";
import { setURLPath } from "../../functions/global/URLPosition.js";

// RE-AUTH TIMEOUT
export async function checkReAuthSession(){
    return new Promise((resolve) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userIdToken = await getIdTokenResult(auth.currentUser);
                    const authTime = new Date(userIdToken.authTime);
                    const expirationTime = new Date(authTime);
                    const now = new Date();

                    expirationTime.setMinutes(expirationTime.getMinutes() + 4);
                    // console.log(authTime);
                    // console.log(expirationTime);
                    if(!(now < expirationTime)){
                        localStorage.removeItem('reAuth');
                    }
                    resolve(now < expirationTime);
                        
                } catch (err) {
                    console.log(err);
                    localStorage.removeItem('reAuth');
                    resolve(false);
                }
            } else {
                console.log("No user is logged in.");
                localStorage.removeItem('reAuth');
                resolve(false);
            }
        });
    });
}



// SESSION MANAGER
async function checkSessionContinuity(){
    return new Promise((resolve) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userIdToken = await getIdTokenResult(auth.currentUser);
                    const expirationTime = new Date(userIdToken.expirationTime);
                    const now = new Date();
                    const authTime = new Date(userIdToken.authTime);

                    console.log(authTime);
                    console.log(expirationTime);
                    resolve(now < expirationTime);
                } catch (error) {
                    console.log(err);
                    resolve(false);
                }
            } else {
                console.log("No user is logged in.");
                resolve(false);
            }
        });
    });
}



export async function closeAuthSession(){
    // checkSessionContinuity()
    const sessionStatus = await checkSessionContinuity();
    console.log(sessionStatus)
    if(!sessionStatus){
        await signOut(auth);
        localStorage.removeItem('loggedInUserId');
        localStorage.removeItem('reAuth');
        // window.location.href = `${setURLPath()}pages/user/login.html`;
    }

}