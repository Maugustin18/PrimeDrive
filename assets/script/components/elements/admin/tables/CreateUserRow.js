import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateUserRow(id, name, email, phone) {
    return `
        <div class="admin_users_grid_body_row admin_users_grid_row">
            <div class="admin_clients_grid_body_row_cell">
                <p class="client_name">
                    <a href="${setURLPath()}pages/admin/dashboard/data/users/view-user.html?id=${id}">${name}</a>
                </p>
            </div>
            <div class="admin_clients_grid_body_row_cell">
                <p class="">${id}</p>
            </div>
            <div class="admin_clients_grid_body_row_cell">
                <p class="user_data">${email}</p>
            </div>
            <div class="admin_clients_grid_body_row_cell">
                <p class="user_data">${phone}</p>
            </div>
        </div>`
}