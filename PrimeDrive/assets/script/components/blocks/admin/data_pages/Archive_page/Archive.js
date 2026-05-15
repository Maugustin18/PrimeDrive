import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { ArchiveSection } from "./ArchiveSection.js";


const main = document.querySelector('main');

const archiveContent = CreateAdminPage('Archivă', '', ArchiveSection)

main.innerHTML = archiveContent;