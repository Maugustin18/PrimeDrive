import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateTodayReturnsRow(carName, carId, clientName, clientId, pickUpTime, dropOffTime, status, orderId) {
    return `
        <div class="pending_resrvations_row admin_table_row admin_table_body_row">
            <div class="pending_resrvations_row_cell">
                <p><a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carId}">${carName}</a></p>
            </div>
            <div class="pending_resrvations_row_cell">
                <p><a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}">${clientName}</a></p>
            </div>
            <div class="pending_resrvations_row_cell">
                <p>${pickUpTime}</p>
            </div>
            <div class="pending_resrvations_row_cell">
                <p>${dropOffTime}</p>
            </div>
            <div class="pending_resrvations_row_cell">
                <p>${status}</p>
            </div>
            <div class="pending_resrvations_row_cell">
                <p>
                    <a href="${setURLPath()}pages/admin/dashboard/data/orders/view-order.html?id=${orderId}">
                        Details
                    </a>
                </p>
            </div>
        </div>`;
}
