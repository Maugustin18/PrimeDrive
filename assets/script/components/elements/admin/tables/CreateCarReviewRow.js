import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateCarReviewRow(clientId, clientName, message, rating, date) {
    return `<div class="admin_cars_reviw_grid_body_row admin_cars_reviw_grid_row">
                <div class="admin_cars_cars_grid_body_row_cell">
                    <div class="view_car_resrevation_cell">
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}">${clientName}</a></p>
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}">${clientId}</a></p>
                    </div>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    <div class="view_car_resrevation_cell">
                        <p class="review_p">${message}</p>
                    </div>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    <div class="view_car_resrevation_cell">
                        <p class="rating_p">${rating}</p>
                    </div>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    ${date}
                </div>
            </div>`;
}