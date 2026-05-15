import {ContactsInfoData} from '../../../../data/json/ContactsInfo.data.js';

const {email, phone, address} = ContactsInfoData;

let Emails = ``;
email.data.forEach((e)=>{
    Emails+=
        `<a href="mailto:${e}" class="underlined_link orange_hover">
            <p class="orange_hover">${e}</p>
        </a>`;
});

let Phones = ``;
phone.data.forEach((e)=>{
    Phones+=
        `<p class="medium_p bold_p">${e}</p>`;
});

let Address = ``;
address.data.forEach((e)=>{
    Address+=
        `<p class="medium_p">${e}</p>`;
});

const ContactsInfoContent = 
            `<div class="contacts_info">
                <p class="small_section_title section_title capitalise">Date de contact</p>
                <div>
                    ${Address}
                </div>
                <div>
                    ${Emails}
                </div>
                <div>
                    ${Phones}
                </div>
            </div>`;

export const ContactsInfo = ContactsInfoContent;