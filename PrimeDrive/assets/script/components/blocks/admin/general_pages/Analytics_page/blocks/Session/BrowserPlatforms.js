import { Browser } from "./blocks/Browser.js";
import { Platforms } from "./blocks/Platforms.js";

const SectionContent = 
            `<div class="browser_platforms_block">
                <div class="browser_platforms_container">
                    <div class="browser_platforms_grid">
                        ${Browser}
                        ${Platforms}
                    </div>
                </div>
            </div>`;

export const BrowserPlatforms = SectionContent;