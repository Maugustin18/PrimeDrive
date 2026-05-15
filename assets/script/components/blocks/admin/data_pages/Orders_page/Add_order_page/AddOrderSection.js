import { OrdersParams } from "../../../../../../../data/json/OrdersParams.data.js";

let locationOpts = '';
    OrdersParams.locations.forEach((item) => {
    locationOpts += `<option value="${item.value}">${item.name}</option>`;
});

let statusOpts = '';
    OrdersParams.statuses.forEach((item) => {
    statusOpts += `<option value="${item.value}">${item.name}</option>`;
});

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
                        <p class="add_car_stage_name">Date generale</p>
                        <form action="">

                            <input type="text" placeholder="ID client" id="clientIdInput">

                            <input type="text" placeholder="ID mașină" id="carIdInput">

                            <div class="add_car_form_row">

                                <select name="trans" id="pickupLocation">
                                    <option value="null" selected disabled>-Loc preluare-</option>
                                    ${locationOpts}
                                </select>

                                <input type="datetime-local" placeholder="Data preluării" id="pickupDateInput">

                            </div>
                            <div class="add_car_form_row">

                                <select name="trans" id="dropoffLocation">
                                    <option value="null" selected disabled>-Loc predare-</option>
                                    ${locationOpts}
                                </select>

                                <input type="datetime-local" placeholder="Data predării" id="dropoffDateInput">

                            </div>

                            <input type="number" placeholder="Preț" id="priceInput">

                            <select name="trans" id="statusSelect">
                                <option value="null" selected disabled>-Status-</option>
                                ${statusOpts}
                            </select>

                            <textarea name="" id="messageTextarea" placeholder="Mesaj"></textarea>

                            <button class="add_car_btn admin_orange_btn admin_orange_btn_no_svg" id="addOrderButton" type="button">
                                <span>Finalizare</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>`;

export const AddOrderSection = SectionContent;