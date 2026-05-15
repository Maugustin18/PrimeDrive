import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateClientReservationRow(id, carName, carId, pickUpDate, pickUpTime, dropOffDate, dropOffTime, status) {
    return ` <div class="admin_cars_cars_grid_body_row admin_cars_cars_grid_row">
                <div class="admin_cars_cars_grid_body_row_cell">
                    <div class="view_car_resrevation_cell">
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}">${carName}</a></p>
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}">${carId}</a></p>
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
                    <a href="${setURLPath()}pages/admin/dashboard/data/orders/view-order.html?id=${id}">Vezi mai mult</a>
                </div>
            </div>`
}