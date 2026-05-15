import { AdminDashboardNav } from "../../../../../data/json/AdminDashboardNav.data.js";

let Menu = ``

AdminDashboardNav.forEach(e=>{
    Menu += 
        `<div class="admin_d_icon_side_menu_item">
            <button>
                ${e.icon}
            </button>
        </div>`
})



const SectionContent = 
            `<div class="admin_d_icon_side_menu">
                <div class="admin_d_icon_side_menu_wrapper">
                    <div class="admin_d_icon_side_menu_list">
                        ${Menu}
                    </div>
                </div>
            </div>`;

export const IconMenu = SectionContent;