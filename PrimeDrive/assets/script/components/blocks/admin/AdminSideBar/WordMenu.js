import { AdminDashboardNav } from "../../../../../data/json/AdminDashboardNav.data.js";
import { setURLPath } from "../../../../functions/global/URLPosition.js";


let menu = ``;
AdminDashboardNav.forEach(e => {
    let localMenu = '';
    e.links.forEach(link => {
        e.root == 'external' ?
            localMenu += 
            `<div class="admin_d_link_side_menu_item">
                <a href="${link.link}" target="_blank" class="capitalise">${link.name}</a>
            </div>` 
            : 
            localMenu += 
            `<div class="admin_d_link_side_menu_item">
                <a href="${setURLPath()}pages/admin/dashboard${e.root}${link.link}" class="capitalise">${link.name}</a>
            </div>`;
    });

    menu += 
        `<div class="admin_d_link_side_menu_list">
           ${localMenu}
        </div>`;
});

const SectionContent = 
            `<div class="admin_d_link_side_menu">
                <div class="admin_d_link_side_menu_wrapper">
                   ${menu}
                </div>
            </div>`;

export const WordMenu = SectionContent;