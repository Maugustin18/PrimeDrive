const SectionContent = 
            `<div class="view_car_data_block">
                <div class="view_car_data_container">
                    <div class="view_car_data_content">
                        <div class="admin_d_card">
                            <div class="view_car_data_card_block">
                                <div class="view_car_data_card_content">
                                    <div class="view_car_data_card_content_grid">
                                        <p>Client: <span id="clientName"><a href="">Nume prenume</a></span></p>
                                        <p>Mașină: <span id="carName"><a href="">Nume</a></span></p>
                                        <p>Loc preluare: <span id="pickupLocation"></span></p>
                                        <p>Data/ora preluare: <span id="pickupTime"></span></p>
                                        <p>Loc predare: <span id="dropoffLocation"></span></p>
                                        <p>Data/ora predare: <span id="dropoffTime"></span></p>
                                    </div>
                                    <div class="view_car_data_card_content_features">
                                        <p>Preț: <span id="price"></span></p>
                                    </div>
                                    <div class="view_car_data_card_content_features">
                                        <p>Mesaj: <span id="message"></span></p>
                                    </div>
                                    <div class="view_car_data_card_content_features">
                                        <p>Status: <span id="status"></span></p>
                                    </div>
                                    <div class="view_car_data_card_content_features">
                                        <p>Data creare: <span id="dateCreated"></span></p>
                                    </div>
                                    <div class="view_car_data_card_content_features order_control_btns" id="orderControlBtns">
                                        <button class="add_car_btn admin_orange_btn admin_orange_btn admin_green_btn" id="acceptOrderBtn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                                            </svg>
                                            <span>Acceptă</span>
                                        </button>
                                        <button class="add_car_btn admin_orange_btn admin_orange_btn admin_red_btn" id="rejectOrderBtn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                            <span>Respinge</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

export const ViewOrderSection = SectionContent;