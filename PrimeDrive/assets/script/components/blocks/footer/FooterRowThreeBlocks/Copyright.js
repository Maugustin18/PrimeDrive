import { CompanyInfoData } from "../../../../../data/json/CompanyInfo.data.js";
const currentYear = (new Date).getFullYear();

const {name} = CompanyInfoData;

const CopyrightContent = 
            `<div class="copyright_block">
                <p>Copyright © 2024-${currentYear} ${name}. All rights reserved.</p>
            </div>`;

export const Copyright = CopyrightContent;