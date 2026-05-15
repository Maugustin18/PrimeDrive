import { setURLPath } from "../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { ObjectiveSection } from "./ObjectiveSection.js";


const main = document.querySelector('main');

const CreateObjectiveButton = `<button class="add_car_btn admin_orange_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                    <span>Creează obiectiv</span>
                                </button>`;

const objectivesContent = CreateAdminPage('Obiective', CreateObjectiveButton, ObjectiveSection)

main.innerHTML = objectivesContent;