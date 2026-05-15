import { FinancesCarGraph } from "./FinacesCarTableGraph/CarGraph.js";
import { FinancesCarTable } from "./FinacesCarTableGraph/CarTable.js";

const SectionContent =
        `<div class="finaces_car_and_graph_block">
            <div class="finaces_car_and_graph_container">
                <div class="finaces_car_and_graph_content">
                    <div class="finaces_car_and_graph_grid">
                       ${FinancesCarTable}
                       ${FinancesCarGraph}
                    </div>
                </div>
            </div>
        </div>`;

export const FinancesCarTableGraph = SectionContent;
