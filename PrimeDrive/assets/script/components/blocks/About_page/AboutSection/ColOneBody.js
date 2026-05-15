import { CompanyInfoData } from "../../../../../data/json/CompanyInfo.data.js";
import { StatisticsData } from "../../../../../data/json/Statistics.data.js";

const {shortDesc} = CompanyInfoData;
const {barStats} = StatisticsData;


let BarStatsContent = ``;
barStats.forEach((e)=>{
    BarStatsContent += 
            `<div class="about_data_bars_block">
                <div class="about_data_b_block">
                    <div class="about_data_b_text ">
                        <div class="about_data_b_name bold_p">${e.name}</div>
                        <div class="about_data_b_nr bold_p">${e.para}%</div>
                    </div>
                    <div class="about_data_b_bar">
                        <div class="about_data_b_bar_outer">
                            <div class="about_data_b_bar_progress" style="width: ${e.para}%;"></div>
                        </div>
                    </div>
                </div>
            </div>`;
})

const ColContent = 
            `<div class="about_section_data_column_body">
                <div class="small_p">
                    ${shortDesc}                
                </div>
                ${BarStatsContent}
            </div>`;

export const ColOneBody = ColContent;