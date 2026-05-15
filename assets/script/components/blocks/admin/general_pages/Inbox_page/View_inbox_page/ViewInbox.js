import { setURLPath } from "../../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../../elements/admin/CreateAdminPage.js";
import { ViewInboxSection } from "./ViewInboxSection.js";

const main = document.querySelector('main');

const link = `<a href="${setURLPath()}pages/admin/dashboard/general/inbox.html" class="orange_link">Inbox</a> >> #1`;

const ViewInboxContent = CreateAdminPage(link, '', ViewInboxSection)

main.innerHTML = ViewInboxContent;