import { FindCarSection } from "./FindCarSection.js";
import { StatsSection } from "./StatsSection.js";

const SectionContent = 
            `<section id="find_car_and_stats_section">
                <div class="find_car_and_stats_container">
                    <div class="find_car_and_stats_wrapper">
                        <div class="dark_fader">
                            <div class="find_car_and_stats_content">
                                ${FindCarSection}
                                ${StatsSection}
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const FindCarAndStatsSection = SectionContent;