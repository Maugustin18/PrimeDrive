import { OrdersParams } from "../../../../data/json/OrdersParams.data.js";
import { getCarsWithOrderCounts, getClientsCount, getMostOrderedCarThisMonth, getMostOrderedCarThisWeek, getPendingReservations, getReservationsEndingToday, getReservationsStartingInNext24h, getReservationsThisMonth, getUsersCount } from "../../../app/admin/general/home/home-app.js";
import { CreateOrdersRow } from "../../../components/elements/admin/tables/CreateOrdersRow.js";
import { CreatePopularCarRow } from "../../../components/elements/admin/tables/CreatePopularCarRow.js";
import { CreateTimeLeftOrderRow } from "../../../components/elements/admin/tables/CreateTimeLeftOrderRow.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";

const carsWithOrdersCounts = await getCarsWithOrderCounts();

console.log(carsWithOrdersCounts);

const totalCars = carsWithOrdersCounts.length;
let carsInService = 0;
let carsAvailable = 0;
let carsTaken = 0;

// CARS STATS
carsWithOrdersCounts.forEach(car => {
    if (car.availability === '3') {
        carsInService++;
    } else if (car.availability === '1') {
        carsAvailable++;
    } else if (car.availability === '2') {
        carsTaken++;
    }
});

const totalCarsSpan = document.querySelector('#totalCarsSpan');
const carsInServiceSpan = document.querySelector('#carsInServiceSpan');
const carsAvailableSpan = document.querySelector('#carsAvailableSpan');
const carsTakenSpan = document.querySelector('#carsTakenSpan');

totalCarsSpan.textContent = totalCars;
carsInServiceSpan.textContent = carsInService;
carsAvailableSpan.textContent = carsAvailable;
carsTakenSpan.textContent = carsTaken;

// POPULAR CARS TABLE
const popularCarsTableGrid = document.querySelector('#popularCarsTableGrid');

const popularCars = carsWithOrdersCounts.sort((a, b) => b.orderCount - a.orderCount).slice(0, 4);
popularCars.forEach((car, i) =>{
    const carRow = document.createElement('div');
    const carName = `${car.brand.name} ${car.model.name}`;
    carRow.innerHTML = CreatePopularCarRow(i+1, car.id, carName, car.orderCount);
    popularCarsTableGrid.appendChild(carRow);
});

// CAR OF THE WEEK
const carOfTheWeek = await getMostOrderedCarThisWeek();
console.log(carOfTheWeek);
const carOfWeekPhoto = document.querySelector('#carOfWeekPhoto');
const carOfWeekReservations = document.querySelector('#carOfWeekReservations');
const carOfWeekModel = document.querySelector('#carOfWeekModel');
const carOfWeekId = document.querySelector('#carOfWeekId');

carOfWeekPhoto.src = carOfTheWeek.carPhoto;
carOfWeekReservations.textContent = carOfTheWeek.count;
carOfWeekId.textContent = `ID: ${carOfTheWeek.carId}`;
carOfWeekId.href = `${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carOfTheWeek.carId}`;
carOfWeekModel.textContent = `${carOfTheWeek.brand.name} ${carOfTheWeek.model.name}`;
carOfWeekModel.href = `${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carOfTheWeek.carId}`;


// CAR OF THE MONTH
const carOfTheMonth = await getMostOrderedCarThisMonth();
console.log(carOfTheMonth);
const carOfMonthPhoto = document.querySelector('#carOfMonthPhoto');
const carOfMonthReservations = document.querySelector('#carOfMonthReservations');
const carOfMonthModel = document.querySelector('#carOfMonthModel');
const carOfMonthId = document.querySelector('#carOfMonthId');

carOfMonthPhoto.src = carOfTheMonth.carPhoto;
carOfMonthReservations.textContent = carOfTheMonth.count;
carOfMonthId.textContent = `ID: ${carOfTheMonth.carId}`;
carOfMonthId.href = `${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carOfTheMonth.carId}`;
carOfMonthModel.textContent = `${carOfTheMonth.brand.name} ${carOfTheMonth.model.name}`;
carOfMonthModel.href = `${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${carOfTheMonth.carId}`;


// MONTH GRAPH
function renderLineChart(dailyData) {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const today = new Date().getDate();

    const labels = days.slice(0, today);
    const data = labels.map(day => dailyData[day] || 0);

    const ctx = document.getElementById('reservationsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.map(d => `Day ${d}`),
            datasets: [{
                label: 'Rezervări pe zi',
                data,
                borderColor: '#FFC000',
                backgroundColor: '#FFC00010',
                tension: .3,
                fill: true,
                pointRadius: 10,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: {
                    display: true,
                    text: 'Rezervări pe zi în această lună',
                }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}
const dailyReservations = await getReservationsThisMonth();
renderLineChart(dailyReservations);




function getStatusName(value) {
    const stat = OrdersParams.statuses.find(s => s.value == value);
    return stat ? stat.name : value;
}


// PENDING RESERVATIONS
const pendingReservationsGrid = document.querySelector('#pendingReservationsGrid');
const pendingReservations = await getPendingReservations();

pendingReservations.forEach(reservation => {
    console.log(reservation);
    const pendingReservationRow = document.createElement('div');
    const carName = `${reservation.car.brand.name} ${reservation.car.model.name}`;
    const clientName = `${reservation.client.fName} ${reservation.client.lName}`;

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

    const statusName = getStatusName(reservation.status);

    pendingReservationRow.innerHTML = CreateOrdersRow(reservation.id, reservation.carId, carName, reservation.clientId, clientName, pickUpDate, pickUpTime, dropOffDate, dropOffTime, statusName);

    pendingReservationsGrid.appendChild(pendingReservationRow);
});










function getLocationName(value) {
    const location = OrdersParams.locations.find(s => s.value == value);
    return location ? location.name : value;
}

function getTimeLeftString(isoStartTime) {
    const now = new Date();
    const startTime = new Date(isoStartTime);

    const diffMs = startTime - now;

    if (diffMs <= 0) {
        return "În derulare";
    }

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffHours >= 1) {
        return `${diffHours} ${diffHours > 1 ? 'ore' : 'oră'}`;
    } else {
        return `${diffMinutes} minute${diffMinutes !== 1 ? 'minute' : 'minut'}`;
    }
}


// RESERVATIONS STARTING IN NEXT 24 HOURS
async function getUpcomingReservations() {
    const reservationsStartingInNext24h = await getReservationsStartingInNext24h();
    console.log(reservationsStartingInNext24h);

    const startingSoonReservationsGrid = document.querySelector('#startingSoonReservationsGrid');

    reservationsStartingInNext24h.forEach(reservation => {
        const startingSoonRow = document.createElement('div');
        const carName = `${reservation.car.brand.name} ${reservation.car.model.name}`;
        const clientName = `${reservation.client.fName} ${reservation.client.lName}`;

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

        const location = getLocationName(reservation.pickupLocation);
        const timeLeft = getTimeLeftString(reservation.pickupDate);

        startingSoonRow.innerHTML = CreateTimeLeftOrderRow(timeLeft, carName, reservation.carId, clientName, reservation.clientId, pickUpTime, location, reservation.id);

        startingSoonReservationsGrid.appendChild(startingSoonRow);
    });
}

getUpcomingReservations();


// TODAY RETURNS

function getTimeLeftReturnString(isoStartTime) {
    const now = new Date();
    const startTime = new Date(isoStartTime);

    const diffMs = now - startTime;

    if (diffMs <= 0) {
        return "Finisat";
    }

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffHours >= 1) {
        return `${diffHours} ${diffHours > 1 ? 'ore' : 'oră'}`;
    } else {
        return `${diffMinutes} minute${diffMinutes !== 1 ? 'minute' : 'minut'}`;
    }
}


async function getTodaysReturns(){
    const todaysReturns = await getReservationsEndingToday()
    console.log(todaysReturns);

    const todayReturnsTable = document.querySelector('#todayReturnsTable');
    todaysReturns.forEach(reservation => {
        const startingSoonRow = document.createElement('div');
        const carName = `${reservation.car.brand.name} ${reservation.car.model.name}`;
        const clientName = `${reservation.client.fName} ${reservation.client.lName}`;

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

        const location = getLocationName(reservation.pickupLocation);
        const timeLeft = getTimeLeftReturnString(reservation.dropoffDate);

        startingSoonRow.innerHTML = CreateTimeLeftOrderRow(timeLeft, carName, reservation.carId, clientName, reservation.clientId, dropOffTime, location, reservation.id);

        todayReturnsTable.appendChild(startingSoonRow);
    });
} 

getTodaysReturns()

// CLIENTS AND USERS
const totalClients = await getClientsCount();
const totalUsers = await getUsersCount();

const totalClientsSpan = document.querySelector("#totalClientsSpan");
const totalUsersSpan = document.querySelector("#totalUsersSpan");

totalClientsSpan.textContent = totalClients;
totalUsersSpan.textContent = totalUsers;
