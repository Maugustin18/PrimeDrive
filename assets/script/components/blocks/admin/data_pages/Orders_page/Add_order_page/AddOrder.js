import { setURLPath } from "../../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../../elements/admin/CreateAdminPage.js";
import { AddOrderSection } from "./AddOrderSection.js";


const main = document.querySelector('main');

const link = `<a href="${setURLPath()}pages/admin/dashboard/data/orders.html" class="orange_link">Comenzi</a> >> <span id="addOrderTitle">Adaugă comandă</span>`;


const addOrdersContent = CreateAdminPage(link, '', AddOrderSection)

main.innerHTML = addOrdersContent;