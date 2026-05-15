import { CarParameters } from "../../../../../../../../data/json/CarParameters.data.js";

let availabilityOpt = '';
CarParameters.availability.forEach((item) => {
    availabilityOpt += `<option value="${item.code}">${item.value}</option>`;
});

let fuelOpt = '';
CarParameters.fuel.forEach((item) => {
    fuelOpt += `<option value="${item.code}">${item.value}</option>`;
});

let transmissionOpt = '';
CarParameters.transmission.forEach((item) => {
    transmissionOpt += `<option value="${item.code}">${item.value}</option>`;
});

const SectionContent =
        `<div class="add_car_content" id="add_car_first_stage">
            <p class="add_car_stage_name">Date generale</p>
            <form action="">
                <div class="add_car_form_row">
                    <select name="" id="modelSelect">
                        <option value="" disabled selected>Model</option>
                        <option value="-1">Nou</option>
                        
                    </select>
                    <select name="" id="availabilitySelect">
                        <option value="" disabled selected>Disponibilitate</option>
                        ${availabilityOpt}
                    </select>
                </div>
                <div id="hidden_brand_opts">
                    <div class="hidden_brand_opts_wrapper add_car_form_row">
                        <select name="" id="brandSelect">
                            <option value="" disabled selected>Brand</option>

                        </select>
                        <input type="text" placeholder="Denumire" id="modelNameInput">
                    </div>         
                </div>
                <div class="add_car_form_row">
                    <select name="" id="fuelSelect">
                        <option value="" disabled selected>Combustibil</option>
                        ${fuelOpt}
                    </select>
                    <select name="" id="transmissionSelect">
                        <option value="" disabled selected>Transmisie</option>
                        ${transmissionOpt}
                    </select>
                </div>
                <div class="add_car_form_row">
                    <input type="number" id="doorsInput" placeholder="Uși" min="1" max="6">
                    <input type="number" id="seatsInput" placeholder="Locuri" min="1" max="12">
                </div>
                <div class="add_car_form_row">
                    <input type="number" id="ratingInput" placeholder="Evaluare" min="0" max="5">
                    <input type="number" id="yearInput" placeholder="An" min="1980">
                </div>
                <input type="number" id="priceInput" placeholder="Preț" min="0">
                <textarea name="" id="featuresTextarea" placeholder="Dotări"></textarea>
                <p class="reminder">* dotările trebuie separate prin virgulă ( , )</p>
                <button class="add_car_btn admin_orange_btn" id="nextStageBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                    <span>Următorul</span>
                </button>
            </form>
        </div>`;

export const StageOne = SectionContent;