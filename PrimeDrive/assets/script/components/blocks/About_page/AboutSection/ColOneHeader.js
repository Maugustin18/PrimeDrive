import { CompanyInfoData } from "../../../../../data/json/CompanyInfo.data.js";

const {name} = CompanyInfoData;

const ColContent = 
            `<div class="about_section_data_column_header">
                <div class="orange_subtitle title_fade_in">
                    Despre ${name}
                </div>
                <div class="section_title extra_big_p title_fade_in">
                    Cine Suntem și De Ce Noi?
                </div>
            </div>`;

export const ColOneHeader = ColContent;