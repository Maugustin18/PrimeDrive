import { ContactsInfoData } from "../../../../../../data/json/ContactsInfo.data.js";


const {phone} = ContactsInfoData;

let Phones = ``;
phone.data.forEach(e => {
    Phones+=`<a href="tel:${e}"><p>${e}</p></a>`;
});

const PhoneContent = 
            `<div class="footer_contacts_list_item">
                <div class="content_social_icon">
                    <div class="content_social_icon_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            ${phone.icon}
                        </svg>
                    </div>
                </div>
                <div class="footer_contacts_list_item_text">
                    ${Phones}
                </div>
            </div>`;

export const Phone = PhoneContent;

