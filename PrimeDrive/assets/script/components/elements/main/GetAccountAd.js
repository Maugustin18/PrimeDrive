import { setURLPath } from "../../../functions/global/URLPosition.js";


const SectionContent = 
            `<section id="account_ad">
                <div class="account_ad_block">
                    <div class="account_ad_container">
                        <div class="content_block">
                            <div class="account_ad_content">
                                <div class="account_ad_grid">
                                    <div class="account_ad_grid_col_1">
                                        <div class="account_ad_grid_col_1_header">
                                            <p class="orange_subtitle">Acces Rapid la Mașina Potrivită — Oricând Ai Nevoie</p>
                                            <p class="extra_big_p section_title capitalise">Creează-ți contul într-un minut</p>
                                            <p class="small_p">• Vezi toate ofertele exclusive disponibile doar pentru membri
                                            <br>• Salvează datele pentru rezervări ultra-rapide
                                            <br>• Primești acces prioritar la cele mai bune mașini</p>
                                        </div>
                                        <div class="account_ad_grid_col_1_body">
                                            <a href="./pages/user/signup.html" class="round_btn orange_btn capitalise">Create account</a>
                                            <!-- <a href="" class="round_btn black_btn capitalise">Log in</a> -->
                                        </div>
                                    </div>
                                    <div class="account_ad_grid_col_2">
                                        <div class="account_ad_grid_col_2_body">
                                            <img src="${setURLPath()}assets/media/img/prime.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const GetAccountAd = SectionContent;