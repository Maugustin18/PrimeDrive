import { CompanyInfoData } from "../../../../data/json/CompanyInfo.data.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";

const {logo} = CompanyInfoData;

const pageType = document.querySelector("#pageType").value;
const logoSrc = setURLPath() + logo[logo.length - 1];

const FooterLogoContent = 
            `<div class="footer_content_row_one_logo">
                <img src="${logoSrc}" alt="">
            </div>`;

export const FooterLogo = FooterLogoContent;