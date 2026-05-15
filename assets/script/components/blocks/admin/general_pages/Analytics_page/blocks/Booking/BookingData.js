const SectionContent =
        `<div class="booking_analytics_block">
            <div class="booking_analytics_content">
                <div class="booking_analytics_grid">
                    <div class="booking_analytics_col">
                        <div class="booking_analytics_col_data_block">
                            <div class="admin_d_card">
                                <p class="admin_cars_stats_card_title capitalise medium_p">
                                    Total rezervări
                                </p>
                                <p class="admin_cars_stats_card_data bold_p">
                                    <span id="totalBookingsSpan"></span>
                                </p>
                            </div>
                            <div class="admin_d_card">
                                <p class="admin_cars_stats_card_title capitalise medium_p">
                                    Valoare medie per rezervare
                                </p>
                                <p class="admin_cars_stats_card_data bold_p">
                                    <span id="avgBookingValueSpan"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="booking_analytics_col">
                        <div class="booking_analytics_col_chart_block">
                            <div class="admin_d_card">
                                <p class="add_car_stage_name">Graficul rezervărilor pe luni</p>
                                <canvas id="ordersChart" width="600" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`; 

export const BookingData = SectionContent;