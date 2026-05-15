import { AlertTypes } from "../../../../data/json/Alerts.data.js";

export function CreateAlert(type, content){
    let selectedType = {};
    AlertTypes.forEach((e)=>{
        e.key == type ? selectedType = e : null;
    });

    const {icon} = selectedType;

    return(
        `<div class="alert_item" style="border-inline-start: .313rem solid var(--alert-${type}-colour);">
            <div class="alert_item_content">
                <div class="alert_item_content_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style="fill: var(--alert-${type}-colour);" viewBox="0 0 16 16">
                        ${icon}
                    </svg>
                </div>
                <div class="alert_item_content_text">
                    <p>${content}</p>
                </div>
            </div>
            <div class="alert_item_close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
        </div>`
    );
}