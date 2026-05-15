import { getUser } from "../../../app/admin/data/users/view-user-app.js";
import { preventAccess } from "../../../app/auth/account-app.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";


preventAccess();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const userId = urlParams.get('id');


const userData = await getUser(userId);
console.log(userData);

const userIDSpan = document.querySelector('#userIDSpan');
const lNameSpan = document.querySelector('#lNameSpan');
const fNameSpan = document.querySelector('#fNameSpan');
const emailSpan = document.querySelector('#emailSpan');
const phoneSpan = document.querySelector('#phoneSpan');
const newsletterSpan = document.querySelector('#newsletterSpan');
const reservationsSpan = document.querySelector('#reservationsSpan');
const createdAtSpan = document.querySelector('#createdAtSpan');

const date = userData.user.timeCreated.toDate ? userData.user.timeCreated.toDate() : new Date(userData.user.timeCreated);
const clientLink = userData.clients[0] ? 
    `<a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${userData.clients[0]}" class="link">${userData.clients[0]}</a>`
    :
    `Nu este client`;

const newsletterSubs = userData.newsletterSubs.length > 0 ? true : false;


userIDSpan.textContent = userId;
lNameSpan.textContent = userData.user.lName;
fNameSpan.textContent = userData.user.fName;
emailSpan.textContent = userData.user.email;
phoneSpan.textContent = userData.user.phone;
newsletterSpan.textContent = newsletterSubs ? "Abonat" : "Neabonat";
reservationsSpan.innerHTML = clientLink;
createdAtSpan.textContent = date.toLocaleString();