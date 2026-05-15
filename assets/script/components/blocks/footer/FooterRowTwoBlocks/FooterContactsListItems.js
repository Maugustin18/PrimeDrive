import {Email} from './FooterRowTwoContactsBlocks/Email.js';
import {Phone} from './FooterRowTwoContactsBlocks/Phone.js';
import {Address} from './FooterRowTwoContactsBlocks/Address.js';


let FooterContactsItemsContent = 
            `<div class="footer_contacts_list">
                ${Phone}
                ${Email}
                ${Address}                    
            </div>`;

export const FooterContactsListItems = FooterContactsItemsContent;
