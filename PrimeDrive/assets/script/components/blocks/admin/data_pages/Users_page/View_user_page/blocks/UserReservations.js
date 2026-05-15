import { CreateClientReservationRow } from "../../../../../../elements/admin/tables/CreateClientReservationRow.js";

const SectionContent =
    `<div class="admin_view_car_grid_wrapper">
        <p class="smaller_section_title">Reservations</p>
        <div class="admin_cars_cars_grid">
            <div class="admin_cars_cars_grid_header_row admin_cars_cars_grid_row">
                <div class="admin_cars_cars_grid_header_row_cell">
                    <p>Car</p>
                </div>
                <div class="admin_cars_cars_grid_header_row_cell">
                    <p>Pick up</p>
                </div>
                <div class="admin_cars_cars_grid_header_row_cell">
                    <p>Drop off</p>
                </div>
                <div class="admin_cars_cars_grid_header_row_cell">
                    <p>Status</p>
                </div>
                <div class="admin_cars_cars_grid_header_row_cell">
                    <p>Deatils</p>
                </div>
            </div>

            ${CreateClientReservationRow(1, "Car A", "CAR123", "12 May 2025", "11:29:17", "12 May 2025", "11:29:17", "In progress")}
        </div>
    </div>`;

export const UserReservations = SectionContent;