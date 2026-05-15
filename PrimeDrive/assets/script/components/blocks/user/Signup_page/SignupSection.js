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
                                            <p class="smaller_section_title">Înregistrare</p>
                                        </div>
                                        <div class="log_in_grid_col_2_body_form">
                                            <form action="">
                                                <input class="middle_radius_input grey_input" type="text" name="fName" id="fNameInput" placeholder="Nume" required>
                                                <input class="middle_radius_input grey_input" type="text" name="lName" id="lNameInput" placeholder="Prenume" required>
                                                <input class="middle_radius_input grey_input" type="tel" name="phone" id="phoneInput" placeholder="Telefon" required>
                                                <input class="middle_radius_input grey_input" type="email" name="email" id="emailInput" autocomplete="email" placeholder="Email" required>
                                                <div class="password_group">
                                                    <div class="password_field">
                                                        <input class="middle_radius_input grey_input" type="password" name="password" autocomplete="new-password" id="passwordInput" placeholder="Parola" required>
                                                        <button id="showCurrentPassword" type="button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                                                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="password_group">
                                                    <div class="password_field">
                                                        <input class="middle_radius_input grey_input" type="password" name="password" autocomplete="new-password" id="confirmPasswordInput" placeholder="Confirmați parola" required>
                                                        <button id="showConfirmPassword" type="button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                                                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="password_log_in_opts">
                                                    <div>
                                                        <input type="checkbox" class="checkbox" name="agreement" id="agreementCheckbox" required>
                                                        <label for="agreement">Prin crearea unui cont ești de acord cu <a href="${setURLPath()}assets/media/docs/Termeni%20și%20Condiții.pdf">Termenii și condițiile</a> și <a href="${setURLPath()}assets/media/docs/Privacy%20policy.pdf">Politica de confidențialitate</a></label>
                                                    </div>
                                                </div>
                                                <button type="submit" class="round_btn orange_btn" id="signUpBtn">Înregistrează-te</button>
                                            </form>
                                        </div>
                                        <div class="log_in_grid_col_2_body_footer">
                                            <div class="log_in_grid_col_2_body_footer_h">
                                                <p>Ai deja un cont? <a href="${setURLPath()}pages/user/login.html">Autentificare</a></p>
                                            </div>
                                            <div class="log_in_grid_col_2_body_footer_b">
                                                <p>SAU</p>
                                            </div>
                                            <div class="log_in_grid_col_2_body_footer_f">
                                                <div class="log_in_grid_col_2_body_footer_f_social">
                                                    <button id="signInWithGoogleBtn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                                                        </svg>
                                                    </button>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="log_in_grid_block_col_1">
                        <div class="log_in_grid_col_1_container">
                            <div class="log_in_grid_img sign_up_grid_img">
                                <div class="log_in_grid_col_1_fader"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const SignupSection = SectionContent;



//  <button>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
//         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
//     </svg>
// </button>
// <button>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
//         <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
//         <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
//     </svg>
// </button>