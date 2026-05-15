const SectionContent =
        `<div class="add_car_content" id="add_car_second_stage">
            <p class="add_car_stage_name">Adaugă fotografii</p>
            <div class="add_car_second_stage_wrapper">
                <form action="">
                    <input type="file" accept="image/*" multiple class="upload_input" id="uploadInput">
                    <p id="noFilesChosen">Niciun fișier selectat</p>
                    <div class="uploaded_img_grid_block">
                        <div class="uploaded_img_grid">
                            
                            
                        </div>
                    </div>
                    <button class="upload_img_btn" id="uploadImgBtn">Încarcă imagine</button>
                </form>
                <!-- <div class="add_photoes_steps">
                    <p>1. Go to ./assets/media/img/cars</p>
                    <p>2. Create a new folder and name it as you see below</p>
                    <p>3. Put the photoes into the folder</p>
                </div> -->

                <!-- <div class="add_car_id">
                    <div id="copy_btn">
                        <div class="copy_btn_content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="add_car_id_content">
                        <p class="big_p">fhOALtofIvwveEW1yON1</p>
                    </div>
                </div> -->
                <div class="add_car_control_btns">
                    <button class="add_car_btn admin_orange_btn admin_black_btn" id="prevStageBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                        </svg>
                        <span>Înapoi</span>
                    </button>

                    <button class="add_car_btn admin_orange_btn admin_orange_btn_no_svg" id="finishStageBtn">
                        <span>Finalizare</span>
                    </button>
                </div>
            </div>
            
        </div>`;

export const StageTwo = SectionContent;