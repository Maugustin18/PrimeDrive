import { NewsletterAudienceOpt } from "../../../../../../../data/json/AdminEditOpts.data.js";

let opts = ``;

NewsletterAudienceOpt.forEach(opt => {
    opts += `<option value="${opt.value}">${opt.name}</option>`;
});

const SectionContent = 
            `<div class="create_newsletter_block">
                <div class="create_newsletter_container admin_home_container">
                    <div class="create_newsletter_content">
                        <div class="add_car_content">
                            <form action="">
                                <div class="add_car_form_row">
                                    <input type="text" placeholder="Subiect">
                                    <select name="" id="">
                                        <option value="" disabled selected>Audiență</option>
                                        ${opts}
                                    </select>
                                </div>
                                <textarea name="" id="" placeholder="Conținut"></textarea>
                                <button class="add_car_btn admin_orange_btn admin_orange_btn_no_svg">
                                    <span>Finalizare</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
            
export const AddNewsletterSection = SectionContent;