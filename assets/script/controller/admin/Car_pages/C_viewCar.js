import { CarParameters } from "../../../../data/json/CarParameters.data.js";
import { deleteCar, deleteCarPhotos } from "../../../app/admin/data/car/delete-car-app.js";
import { getCar, getCarPhotos, getCarReservations, getCarReviews } from "../../../app/admin/data/car/view-car-app.js";
import { CreateCarReservationRow } from "../../../components/elements/admin/tables/CreateCarReservationRow.js";
import { CreateCarReviewRow } from "../../../components/elements/admin/tables/CreateCarReviewRow.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";
import { OrdersParams } from "../../../../../assets/data/json/OrdersParams.data.js";



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const carId = urlParams.get('id');

// DELETE CAR
const deleteCarBtn = document.querySelector("#deleteCarBtn");

deleteCarBtn.addEventListener("click", async () => {
    const confirmed = confirm("Ești sigur că vrei să ștergi această mașină?");
    if (confirmed) {
        deleteCar(carId);
        deleteCarPhotos(carId);
        setTimeout(()=>{
            window.location.href = `${setURLPath()}pages/admin/dashboard/data/cars.html`;
        }, 1000)
    }
});

// CAR INFO
const carData = await getCar(carId);
console.log(carData);
if(carData) {
    const {availability, fuel, transmission} = CarParameters;

    const carNameSpan = document.querySelector("#carNameSpan");
    
    const carIdSpan = document.querySelector("#carIdSpan");
    const editCarBtn = document.querySelector("#editCarBtn");
    const carModelSpan = document.querySelector("#carModelSpan");
    const carBrandSpan = document.querySelector("#carBrandSpan");
    const carPriceSpan = document.querySelector("#carPriceSpan");
    const carAvailabilitySpan = document.querySelector("#carAvailabilitySpan");
    const carYearSpan = document.querySelector("#carYearSpan");
    const carTransmissionSpan = document.querySelector("#carTransmissionSpan");
    const carFuelSpan = document.querySelector("#carFuelSpan");
    const carDoorsSpan = document.querySelector("#carDoorsSpan");
    const carSeatsSpan = document.querySelector("#carSeatsSpan");
    const carRatingSpan = document.querySelector("#carRatingSpan");
    const carFeaturesSpan = document.querySelector("#carFeaturesSpan");

    carNameSpan.textContent = `${carData.brand.name} ${carData.model.name}`;
    editCarBtn.href = `${setURLPath()}pages/admin/dashboard/data/cars/add-car.html?edit=true&id=${carData.id}`;
    carIdSpan.textContent = carData.id;
    carModelSpan.textContent = carData.model.name;
    carBrandSpan.textContent = carData.brand.name;
    carPriceSpan.textContent = carData.price;
    carAvailabilitySpan.textContent = availability[parseInt(carData.availability) - 1].value;
    carYearSpan.textContent = carData.year;
    carTransmissionSpan.textContent = transmission[parseInt(carData.transmission) - 1].value;
    carFuelSpan.textContent = fuel[parseInt(carData.fuel) - 1].value;
    carDoorsSpan.textContent = carData.doors;
    carSeatsSpan.textContent = carData.seats;
    carRatingSpan.textContent = carData.rating;
    carFeaturesSpan.textContent = carData.features.join(", ");
}

// CAR PHOTOS
const carPhotos = await getCarPhotos(carId);
console.log(carPhotos);

export const activateSlider = new Promise((resolve) => {
    carPhotos ? resolve(true) : resolve(false);
});

if(carPhotos){
    const carImgSlider = document.querySelector("#car_img_slider");
    const carPageSliderCtrlC = document.querySelector("#car_page_slider_ctrl_c");

    carPhotos.forEach((photo, index) => {
        const img = document.createElement("img");
        img.src = photo.publicUrl;
        if(index === 0) img.classList.add("slider_img_active");
        carImgSlider.appendChild(img);

        const ctrlBtn = document.createElement("div");
        ctrlBtn.classList.add("car_page_slider_ctrl_b");
        if(index === 0) ctrlBtn.classList.add("car_page_slider_ctrl_b_active");
        carPageSliderCtrlC.appendChild(ctrlBtn);
    });
}


// CAR RESERVATIONS
const carReservations = await getCarReservations(carId);
console.log(carReservations);

function getStatusName(value) {
    const stat = OrdersParams.statuses.find(s => s.value == value);
    return stat ? stat.name : value;
}

if(carReservations.length > 0) {
    const carReservationsGrid = document.querySelector("#carReservationsGrid");
    carReservationsGrid.style.display = "block";
    // console.log('sdfsdf');
    carReservations.forEach(reservation => {
        // console.log('sdfsdf');
        const pickUpRaw = reservation.pickupDate;
        const pickUpDateObj = pickUpRaw.toDate ? pickUpRaw.toDate() : new Date(pickUpRaw);
        const pickUpISO = pickUpDateObj.toISOString();
        const pickUpDate = pickUpISO.split("T")[0];
        const pickUpTime = pickUpISO.split("T")[1].slice(0, 5);

        const dropOffRaw = reservation.dropoffDate;
        const dropOffDateObj = dropOffRaw.toDate ? dropOffRaw.toDate() : new Date(dropOffRaw);
        const dropOffISO = dropOffDateObj.toISOString();
        const dropOffDate = dropOffISO.split("T")[0];
        const dropOffTime = dropOffISO.split("T")[1].slice(0, 5);

        const reservationRow = document.createElement("div");

        const reservId = reservation.id;
        const reservClient = reservation.clientId;
        const clientName = `${reservation.client.fName} ${reservation.client.lName}`;
        
        const reservStatus = reservation.status;
        const statusName = getStatusName(reservStatus);

        reservationRow.innerHTML = CreateCarReservationRow(
            reservId,
            clientName,
            reservClient,
            pickUpDate,
            pickUpTime,
            dropOffDate,
            dropOffTime,
            statusName
        );
        // console.log(reservationRow);
        carReservationsGrid.appendChild(reservationRow);
    })

} else {
    const carReservationsSpan = document.querySelector("#carReservationsSpan");
    carReservationsSpan.style.display = "block";
    const carReservationsGrid = document.querySelector("#carReservationsGrid");
    carReservationsGrid.style.display = "none";
}


// CAR REVIEWS
const CarReviews = await getCarReviews(carId);
// console.log(carReservations);

if(CarReviews.length > 0) {
    const carReviewsGrid = document.querySelector("#carReviewsGrid");
    carReviewsGrid.style.display = "block";
    // console.log('sdfsdf');
    CarReviews.forEach(review => {
        // console.log('sdfsdf');
        const reviewRow = document.createElement("div");

        const timestamp = review.date;
        const dateObj = timestamp.toDate();
        const fullDate = dateObj.toISOString();

        const reviewClient = review.clientId;
        const clientName = `${review.client.fName} ${review.client.lName}`;
        const reviewMessage = review.message;
        const reviewRating = review.rating;
        const reviewDate = fullDate.split("T")[0];

        reviewRow.innerHTML = CreateCarReviewRow(reviewClient, clientName, reviewMessage, reviewRating, reviewDate);
        // console.log(reviewRow);
        carReviewsGrid.appendChild(reviewRow);
    });

} else {
    const carReviewsSpan = document.querySelector("#carReviewsSpan");
    carReviewsSpan.style.display = "block";
    const carReviewsGrid = document.querySelector("#carReviewsGrid");
    carReviewsGrid.style.display = "none";
}


