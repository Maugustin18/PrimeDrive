export function CreateLocationRow(nr, locationName, pickUpCount, dropOffCount, totalCount) {
    return `
        <div class="booking_popular_places_row admin_table_body_row admin_table_row">
            <div class="booking_popular_places_cell">
                <p>${nr}.</p>
            </div>
            <div class="booking_popular_places_cell">
                <p>${locationName}</p>
            </div>
            <div class="booking_popular_places_cell">
                <p>${pickUpCount}</p>
            </div>
            <div class="booking_popular_places_cell">
                <p>${dropOffCount}</p>
            </div>
            <div class="booking_popular_places_cell">
                <p>${totalCount}</p>
            </div>
        </div>
    `;
}