import { CarParameters } from "../../data/json/CarParameters.data.js";
import { addAlert } from "../actions/global/alert.js";
import { getCar, getCarPhotos } from "../app/admin/data/car/view-car-app.js";
import { addClient } from "../app/admin/data/clients/add-client-app.js";
import { addOrder, checkAvailability } from "../app/admin/data/orders/add-order-app.js";
import { getUserData } from "../app/auth/global/userData-app.js";
import { findClientByEmail, getCarsFromSameBrand } from "../app/car-app.js";
import { CreateCarCard } from "../components/elements/car/CarCard.js";
import { CarFeature } from "../components/elements/car/CarFeature.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');


const uid = localStorage.getItem('loggedInUserId');
console.log(id);

const carData = await getCar(id);
console.log(carData);
const carPhotos = await getCarPhotos(id);
console.log(carPhotos);

const {availability, fuel, transmission} = CarParameters;
const carNameSpan = document.querySelector('#carNameSpan');
const carNameTitleSpan = document.querySelector('#carNameTitleSpan');
const carName = `${carData.brand.name} ${carData.model.name}`;
carNameSpan.textContent = carName;
carNameTitleSpan.textContent = carName;
document.querySelector('title').textContent += ` - ${carName}`;

const carPriceSpan = document.querySelector('#carPriceSpan');
carPriceSpan.textContent =`$${parseFloat(carData.price)}`;

const carRatingSpan = document.querySelector('#carRatingSpan');
carRatingSpan.textContent = `${parseFloat(carData.rating)}`;

const carDoorsSpan = document.querySelector('#carDoorsSpan');
carDoorsSpan.textContent = carData.doors;

const carSeatsSpan = document.querySelector('#carSeatsSpan');
carSeatsSpan.textContent = carData.seats;

const carTransmissionSpan = document.querySelector('#carTransmissionSpan');
carTransmissionSpan.textContent = transmission[parseInt(carData.transmission) - 1].value;

const carFuelSpan = document.querySelector('#carFuelSpan');
carFuelSpan.textContent = fuel[parseInt(carData.fuel) - 1].value;

const carAgeSpan = document.querySelector('#carAgeSpan');
console.log(carData.year);
const carAge = new Date().getFullYear() - parseInt(carData.year);
carAgeSpan.textContent = `${carAge < 1 ? '< 1' : carAge} ${carAge <= 1 ? 'an' : 'ani'}`;



// CAR SLIDER
export const activateSliderClient = new Promise((resolve) => {
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

// CAR FEATURES
const carFeaturesList = document.querySelector('#carFeaturesList');
const carPageBodyColTwoBodyFeatures = document.querySelector('#carPageBodyColTwoBodyFeatures');
if (carData.features && carData.features.length > 0 && carData.features[0] !== '') {
    carPageBodyColTwoBodyFeatures.style.display = 'block';
    carData.features.forEach(feature => {
        
        const featureDiv = document.createElement('div');
        featureDiv.innerHTML = CarFeature(feature);
        carFeaturesList.appendChild(featureDiv);
    });
} else {
    
}


// SIMILAR CARS
const similarCarsContent = document.querySelector('#similarCarsContent');

const similarCars = await getCarsFromSameBrand(carData.modelId, id);
console.log(similarCars);
similarCars.forEach(car => {
    console.log(car)
    const carDiv = document.createElement('div');
    const carName = `${car.brand.name} ${car.model.name}`;
    carDiv.innerHTML = CreateCarCard(
        car.id,
        carName,
        car.year,
        transmission[parseInt(car.transmission) - 1].value,
        parseFloat(car.price).toFixed(2),
        car.seats,
        car.photos[0].publicUrl,
        car.rating,
        car.reviewCount,
        car.doors,
        fuel[parseInt(car.fuel) - 1].value,
    )
    similarCarsContent.appendChild(carDiv);
});





// ORDER REQUST
const sendReservation = document.querySelector('#sendReservation');

const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const pickupLocation = document.querySelector('#pickupLocation');
const dropoffLocation = document.querySelector('#dropoffLocation');
const pickupDateInput = document.querySelector('#pickupDate');
const dropoffDateInput = document.querySelector('#dropoffDate');
const priceInput = document.querySelector('#price');
const messageTextarea = document.querySelector('#message');
const statusSelect = document.querySelector('#status');




if(uid){
    const uData = await getUserData();
    emailInput.value = uData.email;
    fullNameInput.value = `${uData.fName} ${uData.lName}`;
    phoneInput.value = uData.phone == 'false' ? null : uData.phone;
}

const now = new Date();
const isoString = now.toISOString();
const trimmed = isoString.slice(0, 16);
pickupDateInput.min = trimmed;
dropoffDateInput.min = trimmed;

pickupDateInput.addEventListener('change', ()=>{
    const pickupDate = new Date(pickupDateInput.value);
    pickupDate.setHours(pickupDate.getHours() + 5);
    const toLocalDatetimeValue = (date) => {
        const pad = (n) => n.toString().padStart(2, '0');
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
    };

    const minDropoff = toLocalDatetimeValue(pickupDate);
    dropoffDateInput.min = minDropoff;
    if (new Date(dropoffDateInput.value) < new Date(minDropoff)) {
        dropoffDateInput.value = minDropoff;
    }
});


async function checkClientByEmail(email) {
    const client = await findClientByEmail(email);
    if(client == null) {
        const fName = fullNameInput.value.trim().split(' ')[0];
        const lName = fullNameInput.value.trim().split(' ')[1] || '';
        return await addClient({
            firstName: fName,
            lastName: lName,
            email: emailInput.value,
            phone: phoneInput.value
        });
    } else {
        return client.id;
    }
}

sendReservation.addEventListener('click', async (e) => {
    console.log('Send reservation clicked');
    e.preventDefault();

    if( pickupLocation.value !== 'null' && 
        dropoffLocation.value !== 'null' && 
        pickupDateInput.value !== '' && 
        dropoffDateInput.value !== '' && 
        fullNameInput.value !== '' &&
        emailInput.value !== '' &&
        phoneInput.value !== '' &&
        messageTextarea.value !== '') {

        if(emailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

            const orderData = {
                clientId: await checkClientByEmail(emailInput.value),
                carId: id,
                pickupLocation: pickupLocation.value,
                dropoffLocation: dropoffLocation.value,
                pickupDate: pickupDateInput.value,
                dropoffDate: dropoffDateInput.value,
                price: null,
                message: messageTextarea.value,
                status: '1',
                dateCreated: new Date().toISOString(),
            };
            const available = await checkAvailability(
                id,
                (new Date(pickupDateInput.value)).getTime(),
                (new Date(dropoffDateInput.value)).getTime()
            );
            if (available) {
                const orderId = await addOrder(orderData);
                if(orderId) {
                    uid ? 
                    addAlert('CL-A-0000')
                    :
                    addAlert('CL-A-0001');
                } else {
                    console.log('Error adding order');
                }
                
            } else {
                addAlert('CR-R-0000');
            }

        } else {
            addAlert('FM-E-0000')
        }
                

    } else {
        addAlert('FM-D-0000');
    }
    
}); 
