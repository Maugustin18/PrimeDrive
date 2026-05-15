import { OrdersParams } from "../../../../../data/json/OrdersParams.data.js";

let locationOpts = '';
    OrdersParams.locations.forEach((item) => {
    locationOpts += `<option value="${item.value}">${item.name}</option>`;
});

const SectionContent = 
        `<div id="reservation_pop_up_block">
            <div class="reservation_pop_up_wrapper">
                <div class="reservation_pop_up" id="reservation_pop_up">
                    <div class="reservation_pop_up_content">
                        <div class="reservation_pop_up_header">
                            <button class="close_pop_up_btn" id="closePopUp">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="reservation_pop_up_body">
                            <div class="reservation_pop_up_subheader">
                                <p class="big_p">Rezervă-ți vehiculul astăzi!</p>
                                <p class="small_p">Completează formularul de mai jos pentru a-ți rezerva vehiculul. Dacă alegi opțiunea 'Altul' la locație, ea trebuie specificată în mesaj, alături de solicitări specifice.</p>
                            </div>
                            <div class="reservation_pop_up_form">
                                <form action="">
                                    <div class="reservation_pop_up_form_row_1">
                                        <input type="text" class="middle_radius_input outlined_input" placeholder="Nume Prenume" id="fullName" required>
                                        <input type="email" class="middle_radius_input outlined_input" placeholder="Email" id="email" required>
                                        <input type="tel" class="middle_radius_input outlined_input" placeholder="Telefon" id="phone" required>
                                    </div>
                                    <div class="reservation_pop_up_form_row_2">
                                        <select name="" id="pickupLocation" class="middle_radius_input outlined_input">
                                            <option value="0" disabled selected>Loc preluare</option>
                                            ${locationOpts}
                                        </select>
                                        <input type="datetime-local" name="" id="pickupDate" class="middle_radius_input outlined_input">
                                    </div>
                                    <div class="reservation_pop_up_form_row_2">
                                        <select name="" id="dropoffLocation" class="middle_radius_input outlined_input">
                                            <option value="0" disabled selected>Loc returnare</option>
                                            ${locationOpts}
                                        </select>
                                        <input type="datetime-local" name="" id="dropoffDate" class="middle_radius_input outlined_input">
                                    </div>
                                    <textarea name="" id="message" class="middle_radius_input outlined_input" placeholder="Mesaj"></textarea>
                                    <div class="reservation_pop_up_form_btns_block">
                                        <div class="calc_block">
                                            <!--<button class="round_btn orange_btn calc_r_btn">Calculate</button>
                                            <p></p>-->
                                        </div>
                                        <button class="round_btn black_btn" id="sendReservation">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

export const CarRezervationPopUp = SectionContent;