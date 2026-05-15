import { FooterLogo } from "../../elements/footer/FooterLogo.js";
import { FooterRowOneSocial } from "./FooterRowOneBlocks/FooteRowOneSocial.js";

const FooterRowOneContent = 
            `<div class="footer_content_row_one">
                <div class="footer_content_row_one_block content_block">
                    ${FooterLogo}
                    ${FooterRowOneSocial}
                </div>  
            </div>`;

export const FooterRowOne = FooterRowOneContent;