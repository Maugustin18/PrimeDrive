const SectioncContent = 
            `<div class="account_page_grid_col_2_opts_item">
                <form action="" id="accountContent">
                    <div class="account_page_grid_col_2_opts_data">
                        <div class="account_page_grid_col_2_opts_data_input_group account_page_grid_col_2_opts_data_input_group_security">
                            <label for="password">Parola curentă</label>
                            <div class="password_field">
                                <input class="middle_radius_input grey_input" type="password" name="password" autocomplete="current-password" id="passwordInput" placeholder="Parola curentă" required>
                                <button id="showCurrentPassword" type="button" class="showCurrentPassword">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="password_log_in_opts">
                                <div>
                                    <button type="button" id="forgotPasswordBtn">Ai uitat parola?</button>
                                </div>
                            </div>
                        </div>
                        <div class="account_page_grid_col_2_opts_data_input_group">
                            <label for="newPassword">Parolă nouă</label>
                            <div class="password_field">
                                <input class="middle_radius_input grey_input" type="password" name="newPassword" id="newPasswordInput" placeholder="Parola nouă" required>
                                <button id="showNewPassword" type="button" class="showNewPassword">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="account_page_grid_col_2_opts_data_input_group">
                            <label for="confirmNewPassword">Confirmă parola nouă</label>
                            <div class="password_field">
                                <input class="middle_radius_input grey_input" type="password" name="confirmNewPassword" id="confirmNewPasswordInput" placeholder="Parola nouă" required>
                                <button id="showConfirmNewPassword" type="button" class="showConfirmNewPassword">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="account_page_grid_col_2_opts_item">
                        <button type="button" class="account_page_grid_col_2_form_submit round_btn orange_btn" id="updatePasswordBth">Actualizează parola</button>
                    </div>
                </form>
            </div>`;

const SectionObj = {
    key: 'security',
    title: 'Securitate',
    content: SectioncContent,
};

export const Security = SectionObj;