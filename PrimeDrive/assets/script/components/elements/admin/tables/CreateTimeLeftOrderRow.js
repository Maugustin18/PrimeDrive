import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateTimeLeftOrderRow(timeLeft, carName, carId, clientName, clientId, time, place, orderId) {
    return ` 
            <div class="starting_soon_resrvations_row admin_table_row admin_table_body_row">
                <div class="starting_soon_resrvations_row_cell">
                    <p>${timeLeft}</p>
                </div>
                <div class="starting_soon_resrvations_row_cell">
                    <p><a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}">${carName}</a></p>
                </div>
                <div class="starting_soon_resrvations_row_cell">
                    <p><a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}">${clientName}</a></p>
                </div>
                <div class="starting_soon_resrvations_row_cell">
                    <p>${time}</p>
                </div>
                <div class="starting_soon_resrvations_row_cell">
                    <p>${place}</p>
                </div>
                <div class="starting_soon_resrvations_row_cell">
                    <p>
                        <a href="${setURLPath()}pages/admin/dashboard/data/orders/view-order.html?id=${orderId}">
                            Detalii
                        </a>
                    </p>
                </div>
            </div>`;
}   