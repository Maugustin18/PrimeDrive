import { FaqData } from "../../../../../data/json/Faq.data.js";

let List = ``;
FaqData.forEach((e, index)=>{
    List += 
        `<div class="faq_q_block ${index == 0 ? 'active_faq_q' : ''}">
            <div class="faq_q_block_header">
                <div class="faq_q_block_header_text">${e.name}</div>
                <div class="faq_q_block_header_arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
                    </svg>
                </div>
            </div>
            <div class="faq_q_block_body">
                <div class="small_p">
                    ${e.answer}
                </div>
            </div>
        </div>`;
});

export const FaqList = List;