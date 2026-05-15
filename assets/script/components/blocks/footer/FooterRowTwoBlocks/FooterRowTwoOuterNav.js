import { FooterNavDataOuterLinks } from "../../../../../data/json/HeaderNav.data.js";

let FooterOuterNavMenuContent = ``;
FooterNavDataOuterLinks.forEach((e)=>{
    FooterOuterNavMenuContent += 
        `<div class="footer_nav_links_list_item">
            <a href="${e.link}">
                <div class="footer_nav_links_list_item_content">
                    <div class="footer_nav_links_list_item_content_arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </div>
                    <p class="capitalise">${e.name}</p>
                </div>
            </a>
        </div>`
});

const FooterOuterNavContent = 
            `<div class="footer_content_row_two_inner_nav footer_content_row_two_column">
                <p class="nav_category_title capitalise">Alte servicii</p>
                <div class="footer_nav_links_list">
                    ${FooterOuterNavMenuContent}
                </div>
            </div>`;

export const FooterRowTwoOuterNav = FooterOuterNavContent;