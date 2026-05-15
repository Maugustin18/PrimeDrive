import { ContactsForm } from "./ContactsForm.js";
import { ContactsInfo } from "./ContactsInfo.js";

const ContactsBlockContent = 
            `<section class="contacts_s_">
                <div class="contacts_container">
                    <div class="contacts_wrapper">
                        <div class="content_block">
                            <div class="contacts_content">
                                ${ContactsInfo}
                                ${ContactsForm}
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const ContactsBlock = ContactsBlockContent;