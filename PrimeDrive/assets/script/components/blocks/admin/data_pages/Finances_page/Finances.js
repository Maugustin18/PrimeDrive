import { setURLPath } from "../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { FinancesSection } from "./FinancesSection.js";


const main = document.querySelector('main');


const financesContent = CreateAdminPage('Finanțe', '', FinancesSection)

main.innerHTML = financesContent;