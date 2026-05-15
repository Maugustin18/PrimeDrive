import { ContactsInfoData } from "../../../../../../data/json/ContactsInfo.data.js";


const {address} = ContactsInfoData;

let Addresses = ``;
address.data.forEach(e => {
    Addresses+=`<p>${e}</p>`;
});

const AddressContent = 
            `<div class="footer_contacts_list_item">
                <div class="content_social_icon">
                    <div class="content_social_icon_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            ${address.icon}
                        </svg>
                    </div>
                </div>
                <div class="footer_contacts_list_item_text">
                    ${Addresses}
                </div>
            </div>`;

export const Address = AddressContent;