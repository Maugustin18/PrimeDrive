const SectionContent = 
            `<div class="booking_cancellation_block">
                <div class="booking_cancellation_content">
                    <div class="booking_cancellation_grid">
                        <div class="booking_analytics_col">
                            <div class="booking_analytics_col_chart_block">
                                <div class="admin_d_card">
                                    <p class="add_car_stage_name">Graficul anulărilor pe luni</p>
                                    <canvas id="cancellationChart" width="600" height="300"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="booking_analytics_col">
                            <div class="booking_analytics_col_data_block">
                                <div class="admin_d_card">
                                    <p class="admin_cars_stats_card_title capitalise medium_p">
                                        Total anulări
                                    </p>
                                    <p class="admin_cars_stats_card_data bold_p">
                                        <span id="totalCancellationsSpan"></span>
                                    </p>
                                </div>
                                <div class="admin_d_card">
                                    <p class="admin_cars_stats_card_title capitalise medium_p">
                                        Rata anulărilor
                                    </p>
                                    <p class="admin_cars_stats_card_data bold_p">
                                        <span id="cancellationRateSpan"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

export const Cancellation = SectionContent;