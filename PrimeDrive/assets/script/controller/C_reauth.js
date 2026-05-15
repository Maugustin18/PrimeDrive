import { resetPasswordEmail } from "../app/auth/global/forgetPassword-app.js";
import { reAuthWithGoogle, reAuthWithPasswordAndEmail } from "../app/auth/reAuth-app.js";
import { setURLPath } from "../functions/global/URLPosition.js";
import { RedirectReAuthData } from "../../data/json/HeaderNav.data.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.querySelector(".log_in_grid_col_2_body_footer_h").style.display = 'none';

// REAUTH REDIRECT
export function reAuthRedirect(){
    const redirect = urlParams.get('redirect');

    if (redirect == 'adminAccount') { 
        return `${setURLPath()}pages/admin/dashboard/account/profile.html`;
    } else if (redirect == 'adminSecurity') {
        return `${setURLPath()}pages/admin/dashboard/account/security.html`;
    } else {
         const path = 
        RedirectReAuthData.find(e=>(
            `'${e.key}'` === redirect
        ))
        ||
        RedirectReAuthData.find(e=>(
            e.key === redirect
        ));
        const redirectQuery = JSON.parse(urlParams.get('q'));
        const pathQuery = Object.entries(redirectQuery);
        let linkQuery = ``;
        pathQuery.forEach((e, index)=>{
            index == 0 ?
                linkQuery+='?'
                :
                linkQuery+='&'
            linkQuery+=`${e[0]}=${e[1]}`;
        })
        const link = `${setURLPath()}${path.link}${linkQuery}`;
        return link;
    }
   
}

// REAUTHENTICATION
const signInBtn = document.querySelector('#signInBtn');

signInBtn.addEventListener('click', async (event)=>{
    event.preventDefault();
    const email = document.querySelector('#emailInput').value;
    const password = document.querySelector('#passwordInput').value;
    const rememberCheckbox = document.querySelector('#rememberCheckbox').value;

    reAuthWithPasswordAndEmail(email, password, rememberCheckbox);
});


// FORGET PASSWORD
resetPasswordEmail();

// LOG IN WITH -GOOGLE-
const signInWithGoogleBtn = document.querySelector('#signInWithGoogleBtn');

signInWithGoogleBtn.addEventListener('click', async ()=>{
    await reAuthWithGoogle();
});