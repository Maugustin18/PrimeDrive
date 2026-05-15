import { CarParameters } from "../../../../data/json/CarParameters.data.js";
let FuelOpts = ``;
CarParameters.fuel.forEach((e)=>{
    FuelOpts+=
            `<option value="${e.code}">${e.value}</option>`;
});

let TransmissionOpts = ``;
CarParameters.transmission.forEach((e)=>{
    TransmissionOpts+=
             `<option value="${e.code}">${e.value}</option>`;
});


const SectionContent  = 
            `<section class="cars_filter_and_sort_section">
                <div class="cars_filter_and_sort_block content_block">
                    <form action="">
                        <div class="cars_filter_and_sort_wrapper">
                       
                            <div class="cars_filter_content">
                                <div class="filter_ops_wrapper" id="top">
                                 <p class="big_p">Alegeți mașina aici</p>
                                    <div class="filter_ops_content">
                                        <select name="brand" id="brandSelect">
                                            <option value="" selected disabled>-Brand-</option>
                                            <option value="">Toate</option>
                                            
                                        </select>
                                        <select name="trans" id="transSelect">
                                            <option value="" selected disabled>-Cutie-</option>
                                            <option value="">Toate</option>
                                            ${TransmissionOpts}
                                        </select>
                                        <select name="airCond" id="fuelSelect">
                                            <option value="" selected disabled>-Combustibil-</option>
                                            <option value="">Toate</option>
                                            ${FuelOpts}
                                        </select>
                                        <select name="sort" id="sort">
                                            <option value="1" selected disabled hidden>-Sortare-</option>
                                            <option value="1-brand.name">Nume A -> Z</option>
                                            <option value="2-brand.name">Nume Z -> A</option>
                                            <option value="3-rating">Rating 1 -> 5</option>
                                            <option value="4-rating">Rating 5 -> 1</option>
                                            <option value="5-price">Preț mic -> mare</option>
                                            <option value="6-price">Preț mare -> mic</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>`;

export const CarsDisplayOpts = SectionContent;