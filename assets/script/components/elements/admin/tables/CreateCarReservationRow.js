import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateCarReservationRow(id, clientName,clientId, pickUpDate, pickUpTime, dropOffDate, dropOffTime, status) {
    return `<div class="admin_cars_cars_grid_body_row admin_cars_cars_grid_row">
                <div class="admin_cars_cars_grid_body_row_cell">
                    <div class="view_car_resrevation_cell">
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}">${clientName}</a></p>
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}">${clientId}</a></p>
                    </div>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    <div class="view_car_resrevation_cell">
                        <p>${pickUpDate}</p>
                        <p>${pickUpTime}</p>
                    </div>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    <div class="view_car_resrevation_cell">
                        <p>${dropOffDate}</p>
                        <p>${dropOffTime}</p>
                    </div>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    <p class="car_availability">${status}</p>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell admin_cars_cars_cell_actions">
                    <a href="${setURLPath()}pages/admin/dashboard/data/orders/view-order.html?id=${id}">Detalii</a>
                </div>
            </div>`;
}