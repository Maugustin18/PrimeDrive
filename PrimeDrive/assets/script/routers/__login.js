import { setURLPath } from "../functions/global/URLPosition.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const reAuth = urlParams.get('re-auth');

const loginAppScript = document.querySelector('#loginAppScript');

loginAppScript.setAttribute('src', `${setURLPath()}assets/script/controller/${reAuth ? 'C_reauth' : 'C_login'}.js`);

console.log(loginAppScript.getAttribute('src'));