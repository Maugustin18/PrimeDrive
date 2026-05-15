import { setURLPath } from "../../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../../elements/admin/CreateAdminPage.js";
import { AddCarSection } from "./AddCarSection.js";



const main = document.querySelector('main');

const link = `<a href="${setURLPath()}pages/admin/dashboard/data/cars.html" class="orange_link">Mașini</a> >> <span id="carNameSpan"></span>`;

const addCarsContent = CreateAdminPage(link, '', AddCarSection)

main.innerHTML = addCarsContent;