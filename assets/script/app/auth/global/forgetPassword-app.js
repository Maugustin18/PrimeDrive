import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { addAlert } from "../../../actions/global/alert.js";
import { auth } from "../../app.js";

export function resetPasswordEmail(){
    const forgetPasswordBtn = document.querySelector('#forgetPasswordBtn');
    
    forgetPasswordBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        const email = document.querySelector('#emailInput').value;
        console.log(email)
        sendPasswordResetEmail(auth, email)
        .then(() => {
            addAlert('US-S-0002');
            // addAlert('AC-C-0002');
            console.log(email)
        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            if(errorCode === 'auth/missing-email'){
                addAlert('FM-D-0000');
            }
            console.log(err)
        });
    });
}