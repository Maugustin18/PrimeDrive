import { HeaderNav } from "../../../elements/header/HeaderNav.js";

const StickyHeaderNavContent = 
            `<div class="header_nav">
                <nav>
                    <div class="header_nav_container">
                        <div class="header_nav_list sticky_header_nav_list">
                            ${HeaderNav}
                        </div>
                    </div>
                </nav>
            </div>`;

export const StickyHeaderNav = StickyHeaderNavContent;