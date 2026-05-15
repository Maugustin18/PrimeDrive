import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateOrdersRow(id, carId, carName, clientId, clientName, pickUpDate, pickUpTime, dropOffDate, dropOffTime, status) {
    return `
        <div class="admin_orders_grid_body_row admin_orders_grid_row">
            <div class="admin_orders_grid_body_row_cell">
                <p class="client_name">
                    <a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}">${carName}</a>
                </p>
                <p class="client_name">
                    ID: ${carId}
                </p>
            </div>
            <div class="admin_orders_grid_body_row_cell">
                <p class="client_name">
                    <a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}">${clientName}</a>
                </p>
                <p class="client_name">
                    ID: ${clientId}
                </p>
            </div>
            <div class="admin_orders_grid_body_row_cell">
                <p class="user_data">${pickUpDate}</p>
                <p class="user_data">${pickUpTime}</p>
            </div>
            <div class="admin_orders_grid_body_row_cell">
                <p class="user_data">${dropOffDate}</p>
                <p class="user_data">${dropOffTime}</p>
            </div>
            <div class="admin_orders_grid_body_row_cell">
                <p class="user_data car_availability">${status}</p>
            </div>
            <div class="admin_orders_grid_body_row_cell">
                <p class="user_data orange_link"><a href="${setURLPath()}pages/admin/dashboard/data/orders/view-order.html?id=${id}">Detalii</a></p>
            </div>
        </div>
    `;
};