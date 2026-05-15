import { PricingCards } from "./PricingCards.js";

const pageType = document.querySelector("#pageType").value;


const CardListContent = 
    `<section id="pricing">
        <div class="pricing_block">
            <div class="pricing_container">
                ${pageType == 'index' ? '<div class="pricing_sec_head content_block section_head"> <div class="orange_subtitle">Tarife</div> <div class="section_title extra_big_p">Pachete adiționale cu tarife accesibile</div></div>' : ''}
                
                <div class="princing_wrapper">
                    <div class="content_block">
                        <div class="pricing_content">
                            ${PricingCards}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export const PricingCardsList = CardListContent;