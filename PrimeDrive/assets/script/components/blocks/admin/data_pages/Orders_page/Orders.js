import { setURLPath } from "../../../../../functions/global/URLPosition.js";
import { CreateAdminPage } from "../../../../elements/admin/CreateAdminPage.js";
import { OrdersSection } from "./OrdersSection.js";


const main = document.querySelector('main');

const CreateOrderButton = `<a href="${setURLPath()}pages/admin/dashboard/data/orders/add-order.html" class="add_car_btn admin_orange_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                    <span>Adaugă comandă</span>
                                </a>`;

const ordersContent = CreateAdminPage('Comenzi', CreateOrderButton, OrdersSection)

main.innerHTML = ordersContent;