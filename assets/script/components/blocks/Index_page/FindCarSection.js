import { CarParameters } from "../../../../data/json/CarParameters.data.js";

let TransmissionOpts = ``;
CarParameters.transmission.forEach((e, index)=>{
    TransmissionOpts+=
            `<option value="${e.code}">${e.value}</option>`;
});

let FuelOpts = ``;
CarParameters.fuel.forEach((e, index)=>{
    FuelOpts+=
            `<option value="${e.code}">${e.value}</option>`;
});

const SectionContent = 
            `<section id="find_car_section">
                <div class="find_car_block">
                    <div class="find_car_container">
                        <div class="find_car_content content_block ">
                            <div class="find_car_img">
                                <img src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                            </div>
                            <div class="find_car_form_block">
                                <div class="capitalise extra_big_p">
                                    Găsește-ți mașina aici!
                                </div>
                                <div class="find_car_form_container">
                                    <form action="./pages/our-cars.html">
                                        <select name="brands" id="brands">
                                            <option value="-1" selected disabled>-Brand-</option>
                                            
                                        </select>
                                        <select name="transmission" id="transmission">
                                            <option value="-1" selected disabled>-Cutie-</option>
                                            ${TransmissionOpts}
                                        </select>
                                        <select name="fuel" id="">
                                            <option selected disabled value="-1">-Combustibil-</option>
                                            ${FuelOpts}
                                        </select>
                                        <button type="submit" class="round_btn black_btn capitalise">
                                            Caută
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const FindCarSection = SectionContent;