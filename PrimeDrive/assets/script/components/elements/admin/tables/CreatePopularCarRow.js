import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreatePopularCarRow(nr, carId, carName, rentalsCount) {
    return `
        <div class="popular_cars_table_grid_row grid_body_row admin_table_body_row admin_table_row">
            <div class="popular_cars_table_grid_cell">
                <p>${nr}.</p>
            </div>
            <div class="popular_cars_table_grid_cell">
                <p><a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}">${carName}</a></p>
                <p><a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}">ID: ${carId}</a></p>
            </div>
            <div class="popular_cars_table_grid_cell">
                <p>${rentalsCount}</p>
            </div>
        </div>`;
}