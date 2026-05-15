import { Services } from "../../../../data/json/Services.data.js";

let CardsContent = ``;
Services.forEach(e=>{
    const pageType = document.querySelector("#pageType").value;
    const link = pageType != 'index' ? (e.link == './' ? '../' : e.link) : (e.link == './' ? './' : './pages/' + e.link);

    let taxContent = ``
    e.taxList.forEach(i=>{
        taxContent += 
            `<div class="pricing_card_b_l_item">
                <div class="pricing_card_b_l_item_name">${i.taxName}</div>
                <div class="pricing_card_b_l_item_price">$${i.taxPrice < 10 ? '0'+i.taxPrice : i.taxPrice}</div>
            </div>`;
    });
    CardsContent+=
        `<div class="pricing_card">
            <div class="pricing_card_header">
                <div class="pricing_card_h_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        ${e.icon}
                    </svg>
                </div>
                <div class="pricing_card_h_title">${e.name}</div>
                <div class="pricing_card_h_desc">${e.desc}</div>
            </div>
            <div class="pricing_card_body">
                <div class="pricing_card_b_list">
                    ${taxContent}
                </div>
            </div>
            <div class="pricing_card_footer">
                <div class="round_btn pricing_card_footer_btn">
                    <a href="${link}" class="round_btn capitalise">
                        Toate mașinile
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>`;
});

export const PricingCards = CardsContent;