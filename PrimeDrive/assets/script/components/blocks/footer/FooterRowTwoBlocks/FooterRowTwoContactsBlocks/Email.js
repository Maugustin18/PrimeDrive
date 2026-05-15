import { ContactsInfoData } from "../../../../../../data/json/ContactsInfo.data.js";


const {email} = ContactsInfoData;

let Emails = ``;
email.data.forEach(e => {
    Emails+=`<a href="mailto:${e}"><p>${e}</p></a>`;
});

const EmailContent = 
            `<div class="footer_contacts_list_item">
                <div class="content_social_icon">
                    <div class="content_social_icon_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            ${email.icon}
                        </svg>
                    </div>
                </div>
                <div class="footer_contacts_list_item_text">
                    ${Emails}
                </div>
            </div>`;

export const Email = EmailContent;

