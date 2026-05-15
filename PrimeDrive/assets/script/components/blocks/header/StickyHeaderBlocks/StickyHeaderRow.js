import { HeaderLogo } from "../../../elements/header/HeaderLogo.js";
import { HeaderMobileNavBtn } from "../MobileHeaderBlocks/HeaderMobileNavBtn.js";
import { StickyHeaderNav } from "./StickyHeaderNav.js";

const RowContent = 
            `${HeaderLogo} 
            <div class="header_large">
                ${StickyHeaderNav}
            </div>
            <div class="header_mobile">
                ${HeaderMobileNavBtn}
            </div>`;

export const StickyHeaderRow = RowContent;