import { CarParameters } from "../../../../../../../data/json/CarParameters.data.js";

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
            `<section class="cars_filter_and_sort_section">
                <div class="cars_filter_and_sort_block">
                    <form action="">
                        <div class="cars_filter_and_sort_wrapper">
                    
                            <div class="cars_filter_content">
                                <div class="filter_ops_wrapper" id="top">
                                    <div class="filter_ops_content">
                                        <select name="availabilitySelect" id="availabilitySelect">
                                            <option value="null" selected disabled>-Status-</option>
                                            <option value="-1">Toate</option>
                                            ${availabilityOpt}
                                        </select>
                                        <select name="trans" id="transmissionSelect">
                                            <option value="null" selected disabled>-Cutie-</option>
                                            <option value="-1">Toate</option>
                                            ${transmissionOpt}
                                        </select>
                                        <select name="fuelSelect" id="fuelSelect">
                                            <option value="null" selected disabled>-Combustibil-</option>
                                            <option value="-1">Toate</option>
                                            ${fuelOpt}
                                        </select>
                                        <select name="sort" id="sortSelect">
                                            <option value="1" selected disabled hidden>-Sortare-</option>
                                            <option value="1">Nume A -> Z</option>
                                            <option value="2">Nume Z -> A</option>
                                            <option value="3">Rating 1 -> 5</option>
                                            <option value="4">Rating 5 -> 1</option>
                                            <option value="5">Preț mic -> mare</option>
                                            <option value="6">Preț mare -> mic</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>`;
            
export const FilterCars = SectionContent;