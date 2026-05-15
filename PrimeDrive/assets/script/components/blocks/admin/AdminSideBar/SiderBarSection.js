import { IconMenu } from "./IconMenu.js";
import { WordMenu } from "./WordMenu.js";


const SectionContent = 
            `<div class="admin_d_side_bar">
                <div class="admin_d_side_menu_header_col1"></div>
                <div class="admin_d_side_menu_header_col2">
                    <p>Dashboards</p>
                </div>
                
                ${IconMenu}

                ${WordMenu}
            </div>`;


export const SideBarSection = SectionContent;