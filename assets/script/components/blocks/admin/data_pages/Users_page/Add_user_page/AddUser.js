import { setURLPath } from "../../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../../elements/admin/CreateAdminPage.js";
import { AddUserSection } from "./AddUserSection.js";



const main = document.querySelector('main');

const link = `<a href="${setURLPath()}pages/admin/dashboard/data/users.html" class="orange_link">Utilizatori</a> >> Adaugă utilizator`;


const addUserContent = CreateAdminPage(link, '', AddUserSection)

main.innerHTML = addUserContent;