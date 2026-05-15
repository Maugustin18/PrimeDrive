import { setURLPath } from "../../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../../elements/admin/CreateAdminPage.js";
import { ViewUserSection } from "./ViewUserSection.js";


const main = document.querySelector('main');

const link = `<a href="${setURLPath()}pages/admin/dashboard/data/users.html" class="orange_link">Utilizatori</a> >> <span id="userIDSpan"></span>`;


const usersContent = CreateAdminPage(link, '', ViewUserSection)

main.innerHTML = usersContent;