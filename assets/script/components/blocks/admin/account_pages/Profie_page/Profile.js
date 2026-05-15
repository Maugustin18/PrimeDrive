import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { ProfileSection } from "./ProfileSection.js";



const main = document.querySelector('main');

const profileContent = CreateAdminPage('Profile', '', ProfileSection)

main.innerHTML = profileContent;