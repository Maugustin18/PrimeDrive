import { addUser } from "../../../app/admin/data/users/add-user-app.js";
import { addAlert } from "../../../actions/global/alert.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";
import { preventAccess } from "../../../app/auth/account-app.js";

preventAccess();

// addUser(userData)
const fNameInput = document.querySelector('#fNameInput');
const lNameInput = document.querySelector('#lNameInput');
const phoneInput = document.querySelector('#phoneInput');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const confirmPasswordInput = document.querySelector('#confirmPasswordInput');
const addUserButton = document.querySelector('#addUserBtn');

addUserButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const userData = {
        fName: fNameInput.value,
        lName: lNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        confirmPassword: confirmPasswordInput.value,
        timeCreated: new Date(),
    };

    if(userData.fName === '' || userData.lName === '' || userData.phone === '' || userData.email === '' || userData.password === '' || userData.confirmPassword === '') {
        addAlert('FM-D-0000');
    } else {
        if( userData.password == userData.confirmPassword) {
            const result = await addUser(userData);
            
            console.log(result);
        } else {
            addAlert('FM-D-0001');
        }
    }
    
    
});