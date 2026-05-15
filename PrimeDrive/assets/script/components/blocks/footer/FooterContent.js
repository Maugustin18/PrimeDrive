import { FooterRowOne } from "./FooterRowOne.js";
import { FooterRowTwo } from "./FooterRowTwo.js";
import { FooterRowThree } from "./FooterRowThree.js";

const FooterContent = 
            `<div class="footer_container">
                <div class="footer_content_wrapper">
                    ${FooterRowOne}
                    ${FooterRowTwo}
                    ${FooterRowThree}
                </div>
            </div>`;


export const Footer = FooterContent;