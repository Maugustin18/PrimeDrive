import { HeaderNavData } from "../../../../data/json/HeaderNav.data.js";
import { LastNavItem } from "../../../app/auth/haeder-app.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";

let HeaderNavContent = '';
const pageType = document.querySelector("#pageType").value;
console.log(pageType);
HeaderNavData.forEach((e)=>{

    //const link = pageType != 'index' ? (e.link == './' ? '../' : e.link) : (e.link == './' ? './' : './pages/' + e.link);
    const link = setURLPath() + e.link;

    HeaderNavContent+=
        `<div class="header_nav_list_item">
            <a href="${link}" class="header_nav_list_item_link">
                <div class="header_nav_list_item_name">
                    <p>${e.name}</p>
                </div>
            </a>
        </div>`
});

HeaderNavContent+=LastNavItem;

export const HeaderNav = HeaderNavContent;