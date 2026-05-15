import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateTopUserRow(clientName, clientId, nr, bookings, totalPayment) {
    return `
        <div class="admin_table_row top_users_row admin_table_body_row">
            <div class="top_users_cell">
                <p>${nr}</p>
            </div>
            <div class="top_users_cell">
                <p>
                    <a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}">${clientName}</a>
                </p>
            </div>
            <div class="top_users_cell">
                <p>${bookings}</p>
            </div>
            <div class="top_users_cell">
                <p>${totalPayment}</p>
            </div>
        </div>`;
}