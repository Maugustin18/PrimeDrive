import { setURLPath } from "../../../../../../../functions/global/URLPosition.js";

const SectionContent =
        `<div class="admin_home_car_fleet_block">
            <div class="admin_home_car_fleet_content">
                <p class="add_car_stage_name">Flota de mașini</p>
                <div class="admin_home_cars_stats_grid">
                    <div class="admin_cars_stats_card admin_d_card">
                        <p class="admin_cars_stats_card_title capitalise medium_p">
                            Total mașini
                        </p>
                        <p class="admin_cars_stats_card_data bold_p">
                            <span id="totalCarsSpan"></span>
                        </p>
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/cars.html" class="admin_d_card_link">Vezi mai mult</a></p>
                    </div>
                    <div class="admin_cars_stats_card admin_d_card">
                        <p class="admin_cars_stats_card_title capitalise medium_p">
                            În service
                        </p>
                        <p class="admin_cars_stats_card_data bold_p">
                            <span id="carsInServiceSpan"></span>
                        </p>
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/cars.html" class="admin_d_card_link">Vezi mai mult</a></p>
                    </div>
                    <div class="admin_cars_stats_card admin_d_card">
                        <p class="admin_cars_stats_card_title capitalise medium_p">
                            Disponibile
                        </p>
                        <p class="admin_cars_stats_card_data bold_p">
                            <span id="carsAvailableSpan"></span>
                        </p>
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/cars.html" class="admin_d_card_link">Vezi mai mult</a></p>
                    </div>
                    <div class="admin_cars_stats_card admin_d_card">
                        <p class="admin_cars_stats_card_title capitalise medium_p">
                            Ocupate
                        </p>
                        <p class="admin_cars_stats_card_data bold_p">
                            <span id="carsTakenSpan"></span>
                        </p>
                        <p><a href="${setURLPath()}pages/admin/dashboard/data/cars.html" class="admin_d_card_link">Vezi mai mult</a></p>
                    </div>

                </div>
            </div>
        </div>`;

export const CarFleetStats = SectionContent;
