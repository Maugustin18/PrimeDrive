import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { HomeSection } from "./HomeSection.js";


const main = document.querySelector('main');

const homeContent = CreateAdminPage('Acasă', '', HomeSection)

main.innerHTML = homeContent;