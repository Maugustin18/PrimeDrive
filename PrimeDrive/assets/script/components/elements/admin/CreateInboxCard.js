import { setURLPath } from "../../../functions/global/URLPosition.js";


export function CreateInboxCard(id, sender, subj, date, timeAgo, userType, userPhoto){
    return `<div class="inbox_card">
                <a href="${setURLPath()}pages/admin/dashboard/general/inbox/view-message.html?id=${id}">
                    <div class="inbox_card_container">
                        <div class="inbox_card_wrapper">
                            <div class="inbox_card_content">
                                <div class="inbox_card_head">
                                    <div class="inbox_card_head_img_block">
                                        <img src="${userPhoto}" alt="">
                                        <div class="inbox_card_head_img_icon">${userType}</div>
                                    </div>
                                </div>
                                <div class="inbox_card_body">
                                    <div class="inbox_card_body_flex">
                                        <div class="inbox_card_body_info">
                                            <div class="newsletter_card_data_header">
                                                <p class="inbox_card_user_name">${sender}</p>
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