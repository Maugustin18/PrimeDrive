import { OrdersParams } from "../../../../../../../data/json/OrdersParams.data.js";

let statusOpts = ``;
OrdersParams.statuses.forEach(status => {
    statusOpts += `<option value="${status.value}">${status.name}</option>`;
});
let timeOpts = ``;
OrdersParams.time.forEach(time => {
    timeOpts += `<option value="${time.value}">${time.name}</option>`;
});
const SectionContent = 
        `<section class="cars_filter_and_sort_section">
            <div class="cars_filter_and_sort_block">
                <form action="">
                    <div class="cars_filter_and_sort_wrapper">
                        <div class="cars_filter_content">
                            <div class="filter_ops_wrapper" id="top">
                                <div class="filter_ops_content">
                                    <select name="status" id="statusSelect">
                                        <option value="null" selected disabled>-Status-</option>
                                        <option value="-1">Toate</option>
                                        ${statusOpts}
                                    </select>
                                    <select name="pickupTimeSelect" id="pickupTimeSelect">
                                        <option value="null" selected disabled>-Data/ora preluare-</option>
                                        <option value="-1">Toate</option>
                                        ${timeOpts}
                                    </select>
                                    <select name="dropoffTimeSelect" id="dropoffTimeSelect">
                                        <option value="null" selected disabled>-Data/ora predare-</option>
                                        <option value="-1">Toate</option>
                                        ${timeOpts}
                                    </select>
                                    <select name="sortSelect" id="sortSelect">
                                        <option value="1" selected disabled hidden>-Sortare-</option>
                                        <option value="1">Dată crescător</option>
                                        <option value="2">Dată descrescător</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>`;
        
export const FilterOrders = SectionContent;