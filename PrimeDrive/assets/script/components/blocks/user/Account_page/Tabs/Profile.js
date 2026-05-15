const SectioncContent = 
            `<div class="account_page_grid_col_2_opts_item">
                <div class="account_page_grid_col_2_opts_picture">
                    <div class="account_page_grid_col_2_opts_picture_icon" id="profilePicture"></div>
                    <div class="account_page_grid_col_2_opts_picture_btns">
                        <button type="button" class="capitalise account_page_grid_col_2_opts_picture_upload round_btn orange_btn" id="uploadProfilePicture">Încarcă nouă</button>
                        <button type="button" class="capitalise account_page_grid_col_2_opts_picture_remove round_btn orange_btn" id="removeProfilePicture">Șterge poza de profil</button>
                    </div>
                </div>
            </div>
            <form action="">
                <div class="account_page_grid_col_2_opts_item">
                    <div class="account_page_grid_col_2_opts_data">
                        <div class="account_page_grid_col_2_opts_data_input_group">
                            <label for="fname">Nume</label>
                            <input class="middle_radius_input grey_input" type="text" name="fname" id="fNameInput" placeholder="Nume">
                        </div>
                        <div class="account_page_grid_col_2_opts_data_input_group">
                            <label for="lname">Prenume</label>
                            <input class="middle_radius_input grey_input" type="text" name="lname" id="lNameInput" placeholder="Prenume">
                        </div>
                        <div class="account_page_grid_col_2_opts_data_input_group">
                            <label for="email">Email</label>
                            <input class="middle_radius_input grey_input" type="email" name="email" id="emailInput" placeholder="Email">
                        </div>
                        <div class="account_page_grid_col_2_opts_data_input_group">
                            <label for="tel">Telefon</label>
                            <input class="middle_radius_input grey_input" type="tel" name="tel" id="telInput" placeholder="Telefon">
                        </div>
                    </div>
                </div>
                <div class="account_page_grid_col_2_opts_item">
                    <button type="button" class="account_page_grid_col_2_form_submit round_btn orange_btn" id="updateProfileBtn">Actualizează profilul</button>
                </div>
            </form>`;


const SectionObj = {
    key: 'profile',
    title: 'Profil',
    content: SectioncContent,
};

export const Profile = SectionObj;