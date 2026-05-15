import { PartnersData } from "../../../../../data/json/Partners.data.js";

let ListContent = ``;
PartnersData.forEach((e)=>{
    ListContent += 
            `<div class="partner_item">
                <a href="${e.link}">
                    <img src="${e.logo}" alt="" title="${e.name}">
                </a>
            </div>`;
});

export const PartnersList = ListContent;