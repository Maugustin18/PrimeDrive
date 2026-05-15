import { resetPasswordEmailForAccount } from "../../../app/auth/global/resetPasswordWithEmail-app.js";
import { getUserData, preventAccess } from "../../../app/auth/account-app.js";
import { resetPasswordEmail } from "../../../app/auth/global/forgetPassword-app.js";
import { logOut } from "../../../app/auth/logOut-app.js";
import { changePassword } from "../../../app/admin/account/account-app.js";

preventAccess();

const logOutBtn = document.querySelector('#logOutBtn');

logOutBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    logOut(logOutBtn);
});

const userData = await getUserData();

const forgotPasswordBtn = document.querySelector('#forgotPasswordBtn');
forgotPasswordBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    resetPasswordEmailForAccount(userData.email)
});


const updatePasswordBth = document.querySelector('#updatePasswordBth');
updatePasswordBth.addEventListener('click', ()=>{
    const currentPassword = document.querySelector("#passwordInput").value;
    const newPassword = document.querySelector("#newPasswordInput").value;
    const confirmNewPassword = document.querySelector("#confirmNewPasswordInput").value;
    changePassword(currentPassword, newPassword, confirmNewPassword);
});

