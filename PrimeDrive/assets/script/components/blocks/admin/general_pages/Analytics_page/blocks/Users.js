import { TopUsersTable } from "./Users/TopUsersTable.js";
import { UsersStatsChart } from "./Users/UsersStatsChart.js";

const SectionContent = 
        `<section id="users_analytics_sec">
            <div class="admin_home_container">
                <p class="add_car_stage_name">Utilizatori & clienți</p>
                ${UsersStatsChart}
                ${TopUsersTable}
            </div>
        </section>`;


export const UsersSection = SectionContent;