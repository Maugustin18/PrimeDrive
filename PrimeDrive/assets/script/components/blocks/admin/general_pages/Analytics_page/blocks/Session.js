import { BrowserPlatforms } from "./Session/BrowserPlatforms.js";
import { SessionStats } from "./Session/SessionStats.js";

const SectionContent = 
        `<section id="session_analytics_sec">   
            <div class="admin_home_container">
                <p class="add_car_stage_name">Date despre sesiuni</p>

                ${SessionStats}
                ${BrowserPlatforms}
                
            </div>
        </section>`;

export const SessionSection = SectionContent;