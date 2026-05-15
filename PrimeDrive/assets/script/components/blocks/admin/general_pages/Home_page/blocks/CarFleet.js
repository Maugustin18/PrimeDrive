import { CarFleetStats } from "./CarFleet/CarFleetStats.js";
import { PopularCarsTable } from "./CarFleet/PopularCarsTable.js";

const SectionContent = 
        `<div class="admin_home_car_fleet_and_popular_cars_table_block">
            <div class="admin_home_container admin_home_car_fleet_and_popular_cars_table_content">
                <div class="admin_home_car_fleet_and_popular_cars_table_grid">
                   ${CarFleetStats}
                   ${PopularCarsTable}
                </div>
            </div>
        </div>`;

export const CarFleetSection = SectionContent;