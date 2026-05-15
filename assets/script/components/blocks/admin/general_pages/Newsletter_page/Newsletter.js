import { setURLPath } from "../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { NewsletterSection } from "./NewsletterSection.js";


const main = document.querySelector('main');

const CreateNewsletterButton = `<a href="${setURLPath()}pages/admin/dashboard/general/newsletter/create-newsletter.html" class="add_car_btn admin_orange_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                    <span>Creează newsletter</span>
                                </a>`;

const newsletterContent = CreateAdminPage('Newsletter', CreateNewsletterButton, NewsletterSection)

main.innerHTML = newsletterContent;