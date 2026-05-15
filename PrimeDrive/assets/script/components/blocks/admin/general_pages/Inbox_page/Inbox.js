import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { InboxSection } from "./InboxSection.js";


const main = document.querySelector('main');

const inboxContent = CreateAdminPage('Inbox', '', InboxSection)

main.innerHTML = inboxContent;