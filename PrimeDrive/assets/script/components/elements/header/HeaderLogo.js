import { CompanyInfoData } from "../../../../data/json/CompanyInfo.data.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";

const {logo} = CompanyInfoData;

const pageType = document.querySelector("#pageType").value;
const logoSrc = setURLPath() + logo[0];

const LogoContent = 
            `<div class="header_logo">
                <div class="header_logo_container">
                    <a href="">
                        <img src="${logoSrc}" alt="">
                    </a>
                </div>
            </div>`;
    
export const HeaderLogo = LogoContent;