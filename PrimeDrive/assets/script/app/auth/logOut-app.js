import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../app.js";
import { addAlert } from "../../actions/global/alert.js";
import { setURLPath } from "../../functions/global/URLPosition.js";


// LOG OUT
export async function logOut(logOutBtn) {
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href = `${setURLPath()}index.html`;
    })
    .catch((err)=>{
        console.log(err)
    })  
}