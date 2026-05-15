import { logInWithGoogle } from "../app/auth/logIn-app.js";
import { signUpWithEmailAndPassword } from "../app/auth/signUp-app.js";


// SIGN UP WITH EMAIL AND PASSWORD
const signUpBtn = document.querySelector('#signUpBtn');

signUpBtn.addEventListener('click', async (event)=>{
    event.preventDefault();

    const fName = document.querySelector('#fNameInput').value;
    const lName = document.querySelector('#lNameInput').value;
    const phone = document.querySelector('#phoneInput').value;
    const email = document.querySelector('#emailInput').value;
    const password = document.querySelector('#passwordInput').value;
    const confirmPassword = document.querySelector('#confirmPasswordInput').value;
    const agreement = document.querySelector('#agreementCheckbox').checked;
    
    const userDetails = {
        fName: fName,
        lName: lName,
        phone: phone,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        agreement: agreement,
    }

    await signUpWithEmailAndPassword(userDetails);

});



// SIGN UP WITH -GOOGLE-
const signInWithGoogleBtn = document.querySelector('#signInWithGoogleBtn');

signInWithGoogleBtn.addEventListener('click', async ()=>{
    await logInWithGoogle();
});