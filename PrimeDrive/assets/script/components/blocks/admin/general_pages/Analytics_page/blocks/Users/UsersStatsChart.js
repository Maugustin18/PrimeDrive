import { UserChart } from "./blocks/UserChart.js";
import { UserStats } from "./blocks/UserStats.js";

const SectionContent = 
            `<div class="users_stats_and_graph_block">
                <div class="users_stats_and_graph_container">
                    <div class="users_stats_and_graph_grid">
                        ${UserStats}
                        ${UserChart}
                    </div>
                </div>
            </div>`;

export const UsersStatsChart = SectionContent;