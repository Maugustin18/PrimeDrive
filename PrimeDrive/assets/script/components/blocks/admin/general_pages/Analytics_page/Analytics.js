import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { AnalyticsSection } from "./AnalyticsSection.js";

const main = document.querySelector('main');

const AnalyticsContent = CreateAdminPage('Analitice', '', AnalyticsSection)

main.innerHTML = AnalyticsContent;