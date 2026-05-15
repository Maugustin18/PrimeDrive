import { ContactsInfoData } from "../../../../../../data/json/ContactsInfo.data.js";

let ContactsContent = 
            `<div class="header_content_block_row_one_contacts">
                <div class="header_content_block_row_one_contacts_phone header_content_block_row_one_contacts_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 16 16">
                        ${ContactsInfoData.phone.icon}
                    </svg>
                    <p>
                        ${ContactsInfoData.phone.data[0]}
                    </p>
                </div>
                <div class="header_content_block_row_one_contacts_devidor"></div>
                <div class="header_content_block_row_one_contacts_email header_content_block_row_one_contacts_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        ${ContactsInfoData.email.icon}                    
                    </svg>
                    <p>
                        ${ContactsInfoData.email.data[0]}
                    </p>
                </div>
            </div>`;

export const Contacts = ContactsContent;