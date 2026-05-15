import { CarParameters } from "../../data/json/CarParameters.data.js";
import { getAllCars, getAllBrands } from "../app/our-cars-app.js";
import { CreateCarCard } from "../components/elements/car/CarCard.js";


const brands = await getAllBrands();
console.log(brands);

const brandSelect = document.querySelector('#brandSelect')
brands.forEach(brand => {
    const brandOpt = document.createElement('option')
    brandOpt.value = brand.id;
    brandOpt.textContent = brand.name;
    brandSelect.appendChild(brandOpt)
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const urlFuel = urlParams.get('fuel');
const urlTransmission = urlParams.get('transmission');
const urlBrand = urlParams.get('brands');

const brandSelector = document.querySelector('#brandSelect')
const fuelSelector = document.querySelector('#fuelSelect')
const transSelector = document.querySelector('#transSelect')

brandSelector.value = urlBrand || '';
fuelSelector.value = urlFuel || '';
transSelector.value = urlTransmission || '';

const cars = await getAllCars();
console.log(cars);
const carsPerPage = 10;
let currentPage = 1;

const filters = {
    brand: urlBrand || '',
    fuel: urlFuel || '',
    transmission: urlTransmission || '',
    sortKey: 'name',
    sortOrder: 'asc'
};

const carListEl = document.querySelector('#carsList');
const paginationEl = document.querySelector('#paginationBlock');


function applyFiltersAndSort(data) {
    return data
    .filter(car =>
        (!filters.brand || car.model.brand == filters.brand) &&
        (!filters.fuel || car.fuel === filters.fuel) &&
        (!filters.transmission || car.transmission === filters.transmission)
    )
    .sort((a, b) => {
        const key = filters.sortKey;
        let aVal = getNestedValue(a, key);
        let bVal = getNestedValue(b, key);

        if (aVal === undefined) return 1;
        if (bVal === undefined) return -1;

        if (!isNaN(parseFloat(aVal)) && !isNaN(parseFloat(bVal))) {
            aVal = parseFloat(aVal);
            bVal = parseFloat(bVal);
        } else {
            aVal = String(aVal).toLowerCase();
            bVal = String(bVal).toLowerCase();
        }

        if (aVal < bVal) return filters.sortOrder === 'asc' ? -1 : 1;
        if (aVal > bVal) return filters.sortOrder === 'asc' ? 1 : -1;
        return 0;
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}


const {availability, fuel, transmission} = CarParameters;

function renderCars() {
    carListEl.innerHTML = '';
    const filtered = applyFiltersAndSort(cars);
    const totalPages = Math.ceil(filtered.length / carsPerPage);
    currentPage = Math.min(currentPage, totalPages);

    const start = (currentPage - 1) * carsPerPage;
    const end = start + carsPerPage;
    const visibleCars = filtered.slice(start, end);

    for(const car of visibleCars) {
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
        carListEl.appendChild(carDiv);
    };

    if (visibleCars.length === 0) {
        carListEl.innerHTML = `<p class="smaller_section_title" style="text-align: center;">Nu avem așa mașini</p>`;
    }

    renderPagination(totalPages);
}

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const groupNrs = document.querySelector('#groupNrs');

function handlePrevClick() {
    goToPage(currentPage - 1);
}

function handleNextClick() {
    goToPage(currentPage + 1);
}


function renderPagination(totalPages) {
    prev.removeEventListener('click', handlePrevClick);
    next.removeEventListener('click', handleNextClick);
    console.log(currentPage);
    groupNrs.innerHTML = '';

    if (currentPage > 1) {
        prev.style.display = 'block';
        prev.addEventListener('click', handlePrevClick);
    } else {
        prev.style.display = 'none';
    }

    for (let i = 1; i <= totalPages; i++) {
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('carPageBtnDiv')
        btnDiv.innerHTML = `<a href="#top"><button class="round_btn orange_btn ${currentPage === i ? 'active' : null}">${i}</button></a>`;
        btnDiv.addEventListener('click', e=>{
            goToPage(i)
        })
        groupNrs.appendChild(btnDiv)
    }

    if (currentPage < totalPages) {
        next.style.display = 'block';
        next.addEventListener('click', handleNextClick);
    } else {
        next.style.display = 'none';
    }

}

function goToPage(page) {
    currentPage = page;
    renderCars();
}

window.goToPage = goToPage;

function setupFilters() {
    brandSelector.addEventListener('change', e => {
        filters.brand = e.target.value;
        currentPage = 1;
        renderCars();
    });

    fuelSelector.addEventListener('change', e => {
        filters.fuel = e.target.value;
        currentPage = 1;
        renderCars();
    });

    transSelector.addEventListener('change', e => {
        filters.transmission = e.target.value;
        currentPage = 1;
        renderCars();
    });

    document.querySelector('#sort').addEventListener('change', e => {
        const [sortCode, key] = e.target.value.split('-');

        filters.sortKey = key;
        filters.sortOrder = (sortCode % 2 === 1) ? 'asc' : 'desc';
        renderCars();
    });

}

setupFilters();
renderCars();
