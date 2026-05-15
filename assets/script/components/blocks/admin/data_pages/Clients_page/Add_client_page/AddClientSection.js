const SectionContent = 
            `<section id="add_car_sec">
                <div class="add_car_block">
                    <div class="add_car_container">
                        <!-- <div class="stage_indicator_block">
                            <div class="stage_indicator_container">
                                <div class="stage_indicator_content">
                                    <button class="stage_indicator completed">1</button>
                                    <button class="stage_indicator">2</button>
                                </div>
                            </div>
                        </div> -->
                        <div class="add_car_content" id="add_car_first_stage">
                            <p class="add_car_stage_name">General data</p>
                            <form action="">
                                <div class="add_car_form_row">
                                    <input type="text" placeholder="Nume" id="lNameInput">
                                    <input type="text" placeholder="Prenume" id="fNameInput">
                                </div>
                                <div class="add_car_form_row">
                                    <input type="text" placeholder="Email" id="emailInput">
                                    <input type="text" placeholder="Telefon" id="phoneInput">       
                                </div>
                                <button class="add_car_btn admin_orange_btn admin_orange_btn_no_svg" id="addClientBtn">
                                    <span>Finish</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>`;

export const AddClientSection = SectionContent;