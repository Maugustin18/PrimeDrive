import { ContactsInfoData } from "../../../../../data/json/ContactsInfo.data.js";
import { setURLPath } from "../../../../functions/global/URLPosition.js";

const {phone} = ContactsInfoData;

const ColContent = 
            `<div class="about_section_data_column_footer">
                <div class="about_footer_btn">
                    <a href="${setURLPath()}pages/about.html" class="round_btn black_btn capitalise">
                        Află mai mult
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div>
                <div class="about_footer_tel_block">
                    <div class="about_footer_tel_b_icon_col">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            ${phone.icon}
                        </svg>
                    </div>
                    <div class="about_footer_tel_b_data_col">
                        <div class="about_footer_tel_b_data_col_text">Contactează-ne:</div>
                        <div class="about_footer_tel_b_data_col_nr bold_p">${phone.data[1]}</div>
                    </div>
                </div>
            </div>`;

export const ColOneFooter = ColContent;