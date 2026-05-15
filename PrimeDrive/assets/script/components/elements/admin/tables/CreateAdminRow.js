export function CreateAdminRow(adminName, createdDate, createdTime, email, phone) {
    return `<div class="admin_admins_grid_body_row admin_admins_grid_grid_row admin_table_row admin_table_body_row">
                <div class="admin_admins_grid_body_row_cell">
                    <p class="client_name">${adminName}</p>
                </div>
                <div class="admin_admins_grid_body_row_cell">
                    <p class="user_data">${createdDate}</p>
                    <p class="user_data">${createdTime}</p>
                </div>
                <div class="admin_admins_grid_body_row_cell">
                    <p class="user_data">${email}</p>
                </div>
                <div class="admin_admins_grid_body_row_cell">
                    <p class="user_data">${phone}</p>
                </div>
            </div>`;
}