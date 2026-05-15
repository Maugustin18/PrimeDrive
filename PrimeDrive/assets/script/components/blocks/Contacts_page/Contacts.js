import { setURLPath } from "../../../functions/global/URLPosition.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { PageHead } from "../../elements/main/PageHead.js";
import { ContactsBlock } from "./ContactsBlock.js";

const main = document.querySelector("main");
const pageType = document.querySelector("#pageType").value;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/local-styles/contacts.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/mobile-styles/local-style/contacts.css"> `;

document.querySelector('title').textContent += ` - Contacte`;

const ContactsContent = 
            `${PageHead}
            ${ContactsBlock}
            ${GetCarAdd}`;
        
const Contacts = ContactsContent;

main.innerHTML = Contacts;