import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateTopCarRow(nr, carName, carId, carMonthEarnings, carAllTimeEarnings) {
    return `
        <div class="admin_finances_cars_grid_body_row admin_finances_cars_grid_row">
            <div class="admin_finances_cars_grid_body_row_cell">
                <p class="client_name">
                    ${nr}.
                </p>
                
            </div>
            <div class="admin_finances_cars_grid_body_row_cell">
                <p class="client_name">
                    <a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}">${carName}</a>
                </p>
                <p class="client_name">
                    ID: ${carId}
                </p>
            </div>
            <div class="admin_finances_cars_grid_body_row_cell">
                <p class="user_data">${carMonthEarnings}</p>
            </div>
            <div class="admin_finances_cars_grid_body_row_cell">
                <p class="user_data">${carAllTimeEarnings}</p>
            </div>
        </div>`;
}