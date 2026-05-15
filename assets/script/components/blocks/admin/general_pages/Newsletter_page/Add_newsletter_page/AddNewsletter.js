import { setURLPath } from "../../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../../elements/admin/CreateAdminPage.js";
import { AddNewsletterSection } from "./AddNewsletterSection.js";

const main = document.querySelector('main');

const link = `<a href="${setURLPath()}pages/admin/dashboard/general/newsletter.html" class="orange_link">Newslettere</a> >> Creează newsletter`;

const AddNewsletterContent = CreateAdminPage(link, '', AddNewsletterSection)

main.innerHTML = AddNewsletterContent;