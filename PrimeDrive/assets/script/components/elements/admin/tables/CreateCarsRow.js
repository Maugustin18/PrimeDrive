import { setURLPath } from "../../../../functions/global/URLPosition.js";

export function CreateCarRow(id, imgSrc, carName, brandName, year, price, availability) {
    return `<div class="admin_cars_cars_grid_body_row admin_cars_cars_grid_row">
                <div class="admin_cars_cars_grid_body_row_cell admin_cars_cars_cell_model">
                    <img src="${imgSrc}" alt="">
                    <p><a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${id}">${carName} <br> ${brandName}</a></p>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    <p>${year}</p>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    <p>${price}</p>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell">
                    <p class="car_availability">${availability}</p>
                </div>
                <div class="admin_cars_cars_grid_body_row_cell admin_cars_cars_cell_actions">
                    <a href="${setURLPath()}pages/admin/dashboard/data/cars/add-car.html?edit=true&id=${id}">
                        <button class="car_action">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                            </svg>
                        </button>
                    </a>
                    
                </div>
            </div>`
}