import { FooterRowTwoAbout } from "./FooterRowTwoBlocks/FooterRowTwoAbout.js";
import { FooterRowTwoInnerNav } from "./FooterRowTwoBlocks/FooterRowTwoInnerNav.js";
import { FooterRowTwoOuterNav } from "./FooterRowTwoBlocks/FooterRowTwoOuterNav.js";
import { FooterRowTwoContacts } from "./FooterRowTwoBlocks/FooterRowTwoContacts.js";

const FooterRowTwoContent = 
            `<div class="footer_content_row_two">
                <div class="dark_fader">
                    <div class="footer_content_row_two_block content_block">
                        ${ FooterRowTwoAbout }
                        ${ FooterRowTwoInnerNav }
                        ${ FooterRowTwoOuterNav }
                        ${ FooterRowTwoContacts }
                    </div> 
                </div>
            </div>`;

export const FooterRowTwo = FooterRowTwoContent;