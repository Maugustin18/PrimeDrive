const SectioncContent = 
            `<div class="account_page_grid_col_2_opts_item">
                <p class="smaller_section_title">În derulare</p>
                <div class="reservations_grid" id="ongoingReservationsGrid">
                   
                </div>
            </div>
            <div class="account_page_grid_col_2_opts_item">
                <p class="smaller_section_title">În așteptare</p>
                <div class="reservations_grid" id="pendingReservationsGrid">
                    
                </div>
            </div>
            <div class="account_page_grid_col_2_opts_item">
                <p class="smaller_section_title">Acceptate</p>
                <div class="reservations_grid" id="acceptedReservationsGrid">
                    
                </div>
            </div>`;

const SectionObj = {
    key: 'reservations',
    title: 'Rezervări',
    content: SectioncContent,
};

export const Reservations = SectionObj;