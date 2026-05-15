import { setURLPath } from "../../../../functions/global/URLPosition.js";

const SectionContent = 
            `<section id="log_in_page_sec">
                <div class="log_in_grid_block">
                    <div class="log_in_grid_block_col_2">
                        <div class="log_in_grid_col_2_container">
                            <div class="log_in_grid_col_2_wrapper">
                                <div class="log_in_grid_col_2_content">
                                    <div class="log_in_grid_col_2_header">
                                        <div class="log_in_logo">
                                            <a href="${setURLPath()}index.html">
                                                <img src="${setURLPath()}assets/media/img/logo/prime1.png" alt="">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="log_in_grid_col_2_body">
                                        <div class="log_in_grid_col_2_body_header">
                                            <p class="smaller_section_title">Verifică-ți contul</p>
                                        </div>
                                        <div class="log_in_grid_col_2_body_form">
                                            <form action="">
                                                <input class="middle_radius_input grey_input" type="email" name="email" id="emailInput" autocomplete="email" placeholder="Cod TOTP (ex. 123456)" required>
                                                
                                                <button type="submit" class="round_btn orange_btn" id="signInBtn">Verifică</button>
                                            </form>
                                        </div>
                                        <div class="log_in_grid_col_2_body_footer">
                                            <div class="log_in_grid_col_2_body_footer_h">
                                                <p>Nu ai primit codul? <a href="${setURLPath()}pages/user/signup.html">Retrimite</a></p>
                                            </div>
                                            <p class="red_text_totp">*Nu partaja codul de verificare cu nimeni!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="log_in_grid_block_col_1">
                        <div class="log_in_grid_col_1_container">
                            <div class="log_in_second_step_grid_img">
                                <div class="log_in_grid_col_1_fader"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const SecondStepSection = SectionContent;