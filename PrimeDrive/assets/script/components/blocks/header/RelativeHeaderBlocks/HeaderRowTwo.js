import {HeaderNavbar} from './RelativeHeaderRowTwoBlocks/HeaderNavbar.js'; 
import {HeaderLogo} from '../../../elements/header/HeaderLogo.js'; 
import { HeaderMobileNavBtn } from '../MobileHeaderBlocks/HeaderMobileNavBtn.js';

const RowTwoContent = 
            `<div class="header_content_block_row_two">
                ${HeaderLogo}
                <div class="header_large">
                    ${HeaderNavbar}
                </div>
                <div class="header_mobile">
                    ${HeaderMobileNavBtn}
                </div>
            </div>`;

export const HeaderRowTwo = RowTwoContent;