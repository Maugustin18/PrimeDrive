import { resetPasswordEmail } from "../app/auth/global/forgetPassword-app.js";
import { logInWithGoogle, logInWithPasswordAndEmail } from "../app/auth/logIn-app.js";


// LOG IN WITH EMAIL AND PASSWORD
const signInBtn = document.querySelector('#signInBtn');

signInBtn.addEventListener('click', async (event)=>{
    event.preventDefault();
    const email = document.querySelector('#emailInput').value;
    const password = document.querySelector('#passwordInput').value;
    const rememberCheckbox = document.querySelector('#rememberCheckbox').checked;

    await logInWithPasswordAndEmail(email, password, rememberCheckbox);
});


// FORGET PASSWORD
resetPasswordEmail();


// LOG IN WITH -GOOGLE-
const signInWithGoogleBtn = document.querySelector('#signInWithGoogleBtn');

signInWithGoogleBtn.addEventListener('click', async ()=>{
    await logInWithGoogle();
});