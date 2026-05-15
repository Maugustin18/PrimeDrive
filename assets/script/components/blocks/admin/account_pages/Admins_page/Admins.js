import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { AdminsSection } from "./AdminsSection.js";



const main = document.querySelector('main');

const adminContent = CreateAdminPage('Administratori', '', AdminsSection)

main.innerHTML = adminContent;