import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth } from "../app.js";
import { addAlert } from "../../actions/global/alert.js";
import { setURLPath } from "../../functions/global/URLPosition.js";
import { AdditionalAuthNavData } from "../../../data/json/HeaderNav.data.js";
import { closeAuthSession } from "./sessionManager-app.js";
import { checkIfAdmin } from "./global/isAdmin-app.js";

let navItem = ``;
const [signInLink, accountLink] = AdditionalAuthNavData;

const uid = localStorage.getItem('loggedInUserId');
// let isAdmin;
// if(uid) {
//     isAdmin = await checkIfAdmin();
// }

const isAdmin = uid == 'a835vGafaXceKsEjbQCR3JaGRr33' ? true : false;

uid ?
navItem = 
            `<div class="header_nav_list_item">
                <a href="${isAdmin ? `${setURLPath()}pages/admin/dashboard/account/profile.html` : `${setURLPath()}${accountLink.link}`}" class="header_nav_list_item_link ${accountLink.key}">
                    <div class="header_nav_list_item_name">
                        <p>${accountLink.name}</p>
                    </div>
                </a>
            </div>`
            :
navItem = 
            `<div class="header_nav_list_item">
                <a href="${setURLPath()}${signInLink.link}" class="header_nav_list_item_link ${signInLink.key}">
                    <div class="header_nav_list_item_name">
                        <p>${signInLink.name}</p>
                    </div>
                </a>
            </div>`

export const LastNavItem = navItem;

let mobileNavItem = ``;


uid ?
mobileNavItem = 
            `<div class="mobile_nav_item">
                <a href="${isAdmin ? `${setURLPath()}pages/admin/dashboard/account/profile.html` : `${setURLPath()}${accountLink.link}`}">${accountLink.name}</a>
            </div>`
            :
mobileNavItem = 
            `<div class="mobile_nav_item">
                <a href="${setURLPath()}${signInLink.link}">${signInLink.name}</a>
            </div>`

export const LastMobileNavItem = mobileNavItem;


