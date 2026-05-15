import { getAllCars } from "../../../app/admin/data/car/cars-app.js";
import { getCarPhotos } from "../../../app/admin/data/car/view-car-app.js";
import { CarsTable } from "../../../components/blocks/admin/data_pages/Cars_page/blocks/CarsTable.js";
import { CreateCarRow } from "../../../components/elements/admin/tables/CreateCarsRow.js";

const allCars = await getAllCars();
console.log(allCars);

const available = allCars.filter(car => car.availability == "1");
const taken = allCars.filter(car => car.availability == "2");
const inServiceCars = allCars.filter(car => car.availability == "3");
const unavailable = allCars.filter(car => car.availability == "4");


// CAR STATS
const totalCarsSpan = document.querySelector('#totalCarsSpan');
const inServiceCarsSpan = document.querySelector('#inServiceCarsSpan');
const availableCarsSpan = document.querySelector('#availableCarsSpan');
const takenCarsSpan = document.querySelector('#takenCarsSpan');

totalCarsSpan.textContent = allCars.length;
inServiceCarsSpan.textContent = inServiceCars.length;
availableCarsSpan.textContent = available.length;
takenCarsSpan.textContent = taken.length;


// CAR SORT
const sortSelect = document.querySelector('#sortSelect');
const availabilitySelect = document.querySelector('#availabilitySelect');
const fuelSelect = document.querySelector('#fuelSelect');
const transmissionSelect = document.querySelector('#transmissionSelect');

function selectCars() {
    const sortValue = sortSelect.value;
    const availabilityValue = availabilitySelect.value;
    const fuelValue = fuelSelect.value;
    const transmissionValue = transmissionSelect.value;

    let filteredCars = allCars;

    if (availabilityValue != 'null' && availabilityValue != "-1") {
        filteredCars = filteredCars.filter(car => car.availability == availabilityValue);
    }

    if (fuelValue != 'null' && fuelValue != "-1") {
        filteredCars = filteredCars.filter(car => car.fuel == fuelValue);
    }

    if (transmissionValue != 'null' && transmissionValue != "-1") {
        filteredCars = filteredCars.filter(car => car.transmission == transmissionValue);
    }

    console.log(sortValue);

        switch (sortValue) {
            case "1":
                filteredCars.sort((a, b) => a.model.name.localeCompare(b.model.name));
                break;
            case "2":
                filteredCars.sort((a, b) => b.model.name.localeCompare(a.model.name));
                break;
            case "3":
                filteredCars.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
                break;
            case "4":
                filteredCars.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
                break;
            case "5":
                filteredCars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case "6":
                filteredCars.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
        }
    console.log(filteredCars);
    return filteredCars;
}  

sortSelect.addEventListener('change', () => {
    // console.log(selectCars());
    updateTable(selectCars());
});
availabilitySelect.addEventListener('change', () => {
    updateTable(selectCars());
});

fuelSelect.addEventListener('change', () => {
    updateTable(selectCars());
});

transmissionSelect.addEventListener('change', () => {
    updateTable(selectCars());
});

async function updateTable(selectCars) {
    console.log(selectCars);
    carsGrid.innerHTML =  
                `<div class="admin_cars_cars_grid_header_row admin_cars_cars_grid_row">
                    <div class="admin_cars_cars_grid_header_row_cell">
                        <p>Marcă & model</p>
                    </div>
                    <div class="admin_cars_cars_grid_header_row_cell">
                        <p>An</p>
                    </div>
                    <div class="admin_cars_cars_grid_header_row_cell">
                        <p>Preț</p>
                    </div>
                    <div class="admin_cars_cars_grid_header_row_cell">
                        <p>Stare</p>
                    </div>
                    <div class="admin_cars_cars_grid_header_row_cell">
                        <p>Acțiuni</p>
                    </div>
                </div>`; 

    for(const car of selectCars) {
        console.log(car);
        const carRow = document.createElement('div');
        carRow.innerHTML = CreateCarRow(car.id, car.photos[0] ? car.photos[0].publicUrl : '', car.model.name, car.brand.name, car.year, car.price, car.availability == "1" ? "Disponibilă" : car.availability == "2" ? "Ocupată" : car.availability == "3" ? "În service" : "Indisponibilă");
        carsGrid.appendChild(carRow);
    }
}

// SEARCH CARS
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('input', debounce(() => {
    const searchTerm = searchInput.value.toLowerCase();
    const searchTermForId = searchInput.value;
    const filteredCars = allCars.filter(car => {
        return car.model.name.toLowerCase().includes(searchTerm) ||
               car.brand.name.toLowerCase().includes(searchTerm) ||
               car.id.includes(searchTermForId);
    });
    updateTable(filteredCars);
}, 500));

// CAR TABLE
const carsGrid = document.querySelector('#carsGrid');

for(const car of allCars) {
    const carRow = document.createElement('div');

    console.log(car.photos);
    carRow.innerHTML = CreateCarRow(car.id, car.photos[0] ? car.photos[0].publicUrl : '', car.model.name, car.brand.name, car.year, car.price, car.availability == "1" ? "Disponibilă" : car.availability == "2" ? "Ocupată" : car.availability == "3" ? "În service" : "Indisponibilă");
    carsGrid.appendChild(carRow);

};