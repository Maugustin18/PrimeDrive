import { BookingData } from "./Booking/BookingData.js";
import { Cancellation } from "./Booking/Cancellation.js";
import { LocationsTable } from "./Booking/LocationsTable.js";

const SectionContent = 
            `<section id="booking_analytics_sec">
                <div class="admin_home_container">
                    <p class="add_car_stage_name">Analiticele rezervărilor</p>
                    ${BookingData}
                    ${Cancellation}
                    ${LocationsTable}
                </div>
            </section>`;

export const BookingSection = SectionContent;