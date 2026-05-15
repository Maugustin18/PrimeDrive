import {HeaderSocialData} from '../../../../data/json/HeaderSocial.data.js';

let FooterSocialContent = ``;
HeaderSocialData.forEach((e)=>{
    FooterSocialContent += 
    `<div class="footer_content_social_${e.name} footer_content_social_icon content_social_icon">
        <a href="${e.link}">
            <div class="footer_content_social_${e.name}_btn footer_content_social_icon_btn content_social_icon_btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    ${e.icon}
                </svg>
            </div>
        </a>
    </div>`;
});

export const FooterSocial = FooterSocialContent;