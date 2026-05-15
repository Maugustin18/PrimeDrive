import { setURLPath } from "../../../../../../functions/global/URLPosition.js";

const SectionContent =
            `<div class="home_user_stats_block">
                    <div class="admin_home_container">
                        <div class="home_user_stats_grid">
                            <div class="home_user_stats_grid_col">
                                <div class="admin_d_card">
                                    <p class="admin_cars_stats_card_title capitalise medium_p">
                                        Total clients
                                    </p>
                                    <p class="admin_cars_stats_card_data bold_p">
                                        <span id="totalClientsSpan"></span>
                                    </p>
                                    <p><a href="${setURLPath()}pages/admin/dashboard/data/clients.html" class="admin_d_card_link">See more</a></p>
                                </div>
                            </div>
                            <div class="home_user_stats_grid_col">
                                <div class="admin_d_card">
                                    <p class="admin_cars_stats_card_title capitalise medium_p">
                                        Total users
                                    </p>
                                    <p class="admin_cars_stats_card_data bold_p">
                                        <span id="totalUsersSpan"></span>
                                    </p>
                                    <p><a href="${setURLPath()}pages/admin/dashboard/data/users.html" class="admin_d_card_link">See more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                
export const UserStatsSection = SectionContent;