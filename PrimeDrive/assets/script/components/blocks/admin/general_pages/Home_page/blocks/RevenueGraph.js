import { setURLPath } from "../../../../../../functions/global/URLPosition.js";

const SecondStepContent = 
        `<div class="home_car_graph_block">
            <div class="home_car_graph_container admin_home_container">
                <p class="add_car_stage_name">Graficul rezervărilor aceastei luni</p>
                <div class="home_car_graph_content">
                    <div class="admin_d_card">
                        <canvas id="reservationsChart" width="400" height="200"></canvas>
                        <p class="admin_home_graph_link"><a href="${setURLPath()}pages/admin/dashboard/data/finances.html" class="admin_d_card_link">Vezi mai mult</a></p>
                    </div>
                </div>
            </div>
        </div>`;

export const RevenueGraphSection = SecondStepContent;