import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { SecuritySection } from "./SecuritySection.js";



const main = document.querySelector('main');

const securityContent = CreateAdminPage('Security', '', SecuritySection)

main.innerHTML = securityContent;