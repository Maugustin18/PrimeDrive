import { getAllBrands, getAllCars } from "../app/our-cars-app.js";
import { getUserData } from "../app/auth/global/userData-app.js";
import { Slide1 } from "../components/blocks/Index_page/HeroSection/Slides/Slide1.js";
import { Slide2 } from "../components/blocks/Index_page/HeroSection/Slides/Slide2.js";
import { SlideUser1 } from "../components/blocks/Index_page/HeroSection/Slides/SlideUser1.js";
import { SlideUser2 } from "../components/blocks/Index_page/HeroSection/Slides/SlideUser2.js";
import { CreateCarCard } from "../components/elements/car/CarCard.js";
import { addSubsNewletter } from "../app/newsletter-app.js";
import { getNewsletterSubscription } from "../app/auth/global/getNewsletterSubs-app.js";
import { checkIfAdmin } from "../app/auth/global/isAdmin-app.js";
import { CarParameters } from "../../data/json/CarParameters.data.js";


// HOME SLIDER
export async function setHomeSlides() {
    try {
        const userData = await getUserData();
        const uid = localStorage.getItem('loggedInUserId');
        if(uid){
            return [SlideUser1, SlideUser2];
        } else {
            return [Slide1, Slide2];
        }
    } catch (err) {
        console.log(err);
        return [Slide1, Slide2];
    }
}

export async function getUserInfo() {
    try {
        return await getUserData();
    } catch(err){
        console.log(err);
    }
}


// GET DB BRANDS AND TRANSMISSION
const brandsSelect = document.querySelector('#brands');
async function setCarFilters() {
    const brands = await getAllBrands();

    let BrandOpts = ``;
    brands.forEach((e, index)=>{
        BrandOpts+=
                `<option value="${e.id}">${e.name}</option>`;
    });

    brandsSelect.innerHTML += BrandOpts;
}
setCarFilters();


// GET DB BEST CARS
// let carsArr = await getAllCars();
// carsArr.sort((p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0);
// carsArr = carsArr.slice(0, 2);

// console.log(carsArr);

// let CarCards = ``;

// carsArr.forEach(car=>{
//     CarCards+= CreateCarCard(car);
// })

async function setBestCars() {
    const carsSection = document.querySelector('.our_cars_index_cars_content');
    const cars = await getAllCars();
    const {availability, fuel, transmission} = CarParameters;

    for(let i = 0; i < 2; i++) {
        const car = cars[i];
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
        carsSection.appendChild(carDiv);
    }
}

setBestCars();


// NEWSLETTER
async function setNewsletterSubsBox() {
    try{
        const isSubscribed = await getNewsletterSubscription();
        const newsletterSubsBox = document.querySelector('#sign_for_newsletter_section');
        isSubscribed == true ? newsletterSubsBox.style.display = 'none' : null;
    } catch(err){
        console.log(err);
    }
}

// FOR DEV ONLY ///////////////////////////////////////////////////////////////////////

// const isAdmin = checkIfAdmin();
// if(isAdmin) {
//     const newsletterSubsBox = document.querySelector('#sign_for_newsletter_section');
//     newsletterSubsBox.style.display = 'none';
// } else {
//     setNewsletterSubsBox();
// }



const emailInput = document.querySelector('#emailInput');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    const {value} = emailInput;

    addSubsNewletter(value);
    console.log(value);
});

