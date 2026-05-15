import { HeaderNavData } from "../../../../../data/json/HeaderNav.data.js";
import { LastMobileNavItem } from "../../../../app/auth/haeder-app.js";
import { setURLPath } from "../../../../functions/global/URLPosition.js";

let NavList = ``;
const pageType = document.querySelector("#pageType").value;

HeaderNavData.forEach((e)=>{
    const link = setURLPath() + e.link;
    NavList+=
        `<div class="mobile_nav_item">
            <a href="${link}">${e.name}</a>
        </div>`;
});

const NavContent = 
            `<div id="mobile_nav" class="header_mobile">
                <div class="mobile_nav_wrapper content_block">
                    <div class="mobile_nav_content">
                        ${NavList}
                        ${LastMobileNavItem}
                    </div>
                </div>
            </div>`;

export const MobileNav = NavContent;