import { FooterNavData } from "../../../../../data/json/HeaderNav.data.js";
import { setURLPath } from "../../../../functions/global/URLPosition.js";

const pageType = document.querySelector("#pageType").value;


let FooterInnerNavMenuContent = ``;
FooterNavData.forEach((e)=>{
    const link = setURLPath() + e.link;
    // console.log(e.key);
    FooterInnerNavMenuContent += 
        `<div class="footer_nav_links_list_item">
            <a href="${link}" ${e.key == 'terms' ? `target="blank"` : ""}>
                <div class="footer_nav_links_list_item_content">
                    <div class="footer_nav_links_list_item_content_arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </div>
                    <p class="capitalise">${e.name}</p>
                </div>
            </a>
        </div>`
});

const FooterInnerNavContent = 
            `<div class="footer_content_row_two_inner_nav footer_content_row_two_column">
                <p class="nav_category_title capitalise">PrimeDrive</p>
                <div class="footer_nav_links_list">
                    ${FooterInnerNavMenuContent}
                </div>
            </div>`;

export const FooterRowTwoInnerNav = FooterInnerNavContent;