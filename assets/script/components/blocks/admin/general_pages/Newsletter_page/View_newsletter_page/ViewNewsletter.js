import { setURLPath } from "../../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../../elements/admin/CreateAdminPage.js";
import { ViewNewsletterSection } from "./ViewNewsletterSection.js";

const main = document.querySelector('main');

const link = `<a href="${setURLPath()}pages/admin/dashboard/general/newsletter.html" class="orange_link">Newsletters</a> >> #1`;

const ViewNewsletterContent = CreateAdminPage(link, '', ViewNewsletterSection)

main.innerHTML = ViewNewsletterContent;