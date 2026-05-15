import { setURLPath } from "../../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../../elements/admin/CreateAdminPage.js";
import { AddClientSection } from "./AddClientSection.js";



const main = document.querySelector('main');

const link = `<a href="${setURLPath()}pages/admin/dashboard/data/clients.html" class="orange_link">Clienți</a> >> Adaugă client`;


const addClientContent = CreateAdminPage(link, '', AddClientSection)

main.innerHTML = addClientContent;