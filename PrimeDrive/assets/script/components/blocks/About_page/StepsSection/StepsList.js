import { StepsData } from "../../../../../data/json/Steps.data.js";
import { setURLPath } from "../../../../functions/global/URLPosition.js";

const pageType = document.querySelector("#pageType").value;

let StepsListContent = ``;
StepsData.forEach((e, index)=>{
    const link =  `${setURLPath()}pages/${e.link}`;

    StepsListContent += 
            `<div class="steps_card">
                <div class="steps_header">
                    <div class="steps_header_icon">
                        <div class="steps_header_icon_wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                ${e.icon}
                            </svg>
                        </div>
                    </div>
                    <div class="steps_header_line"></div>
                    <div class="steps_header_num">0${index+1}</div>
                </div>
                <div class="steps_card_body">
                    <div class="smaller_section_title">${e.name}</div>
                    <div class="small_p">${e.desc}</div>
                </div>
                <div class="steps_card_footer">
                    <a href="${link}" class="round_btn capitalise orange_btn">
                        ${e.btnName}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div>
            </div>`;
});

export const StepsList = StepsListContent;