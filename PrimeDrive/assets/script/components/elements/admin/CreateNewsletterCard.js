import { setURLPath } from "../../../functions/global/URLPosition.js";


export function CreateNewsletter(id, aud, subj, date, timeAgo, adminName){
    return `<div class="inbox_card">
                <a href="${setURLPath()}pages/admin/dashboard/general/newsletter/view-newsletter.html?id=${id}">
                    <div class="inbox_card_container">
                        <div class="inbox_card_wrapper">
                            <div class="inbox_card_content">
                                <div class="inbox_card_head">
                                    <div class="inbox_card_head_img_block">
                                        <img src="https://cdn.prod.website-files.com/60658b47b03f0c77e8c14884/613f2d65b7c57fda58f7caf0_mailchimp.jpg" alt="">
                                        <!-- <div class="inbox_card_head_img_icon">M</div> -->
                                    </div>
                                </div>
                                <div class="inbox_card_body">
                                    <div class="inbox_card_body_flex">
                                        <div class="inbox_card_body_info">
                                            <div class="newsletter_card_data_header">
                                                <p class="inbox_card_user_name">${adminName}</p>
                                                <p class="newsletter_target"> către <span class="newsletter_target_span">${aud}</span></p>
                                            </div>

                                            <p class="inbox_message_text">${subj}</p>
                                            <p class="inbox_message_time">${timeAgo}</p>
                                        </div>
                                        <div class="inbox_card_body_date">
                                            <p class="inbox_message_date">${date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
}