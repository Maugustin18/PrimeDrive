import { setURLPath } from "../../../functions/global/URLPosition.js";

export function CreateBookingRow(reservationId, carId, carPhoto, carName, pickUpDate, pickUpTime, pickUpLocation, dropOffDate, dropOffTime, dropOffLocation, price, cancelBtn) {
    return `
            <div class="reservations_grid_row">
                <a href="${setURLPath()}pages/car.html?id=${carId}">
                    <div class="car_photo">
                        <img src="${carPhoto}" alt="">
                    </div>
                </a>
                <a href="${setURLPath()}pages/car.html?id=${carId}">
                    <div class="car_model">${carName}</div>
                </a>
                <div class="reservations_grid_row_data">
                    <div class="reservations_grid_row_data_row">
                        <div class="date">${pickUpDate}</div>
                        <div class="time">${pickUpTime}</div>
                        <div class="location">${pickUpLocation}</div>
                    </div>
                    <div class="reservations_grid_row_data_row">
                        <div class="date">${dropOffDate}</div>
                        <div class="time">${dropOffTime}</div>
                        <div class="location">${dropOffLocation}</div>
                    </div>
                </div>
                <div class="price">${price}$</div>
                <div class="cancel_btn_block">
                    ${cancelBtn ? `<button type="button" class="round_btn orange_btn cancel_btn" id="${reservationId}">Anulează</button>` : ''}
                </div>
            </div>`
}