import { getAllOrders, getDailyRevenue, getReservationsGroupedByDay, getTopCars } from "../../../app/admin/data/finaces/finances-app.js";
import { CreateTopCarRow } from "../../../components/elements/admin/tables/CreateTopCarRow.js";


const allOrders = await getAllOrders();
console.log(allOrders);

const totalOrders = allOrders.length;

let totalPrice = 0;
allOrders.forEach((order)=>{
    if(order.price != null){
        totalPrice += parseFloat(order.price)
    }
})
console.log(totalPrice)

const thisMonthOrders = separateOrdersByMonth(allOrders);
const thisMonthTotalOrders = thisMonthOrders.length;
const thisMonthTotalPrice = thisMonthOrders.reduce((acc, order) => acc + parseFloat(order.price), 0);

const previousMonthOrders = separatePreviousMonthOrder(allOrders);
const previousMonthTotalOrders = previousMonthOrders.length;
const previousMonthTotalPrice = previousMonthOrders.reduce((acc, order) => acc + parseFloat(order.price), 0);

// console.log(previousMonthOrders)
// console.log(previousMonthTotalPrice);

function separateOrdersByMonth(orders) {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const thisMonthOrders = [];
    console.log(orders)

    orders.forEach(order => {
        const pickupDate = order.pickupDate.toDate ? order.pickupDate.toDate() : new Date(order.pickupDate);
        const dropoffDate = order.dropoffDate.toDate ? order.dropoffDate.toDate() : new Date(order.dropoffDate);

        const isThisMonth = 
            (pickupDate.getMonth() === currentMonth && pickupDate.getFullYear() === currentYear) ||
            (dropoffDate.getMonth() === currentMonth && dropoffDate.getFullYear() === currentYear);
            console.log(isThisMonth);

        if (isThisMonth) {
            thisMonthOrders.push(order);
        }
    });

    return thisMonthOrders;
}

function separatePreviousMonthOrder(allOrders) {
    console.log(allOrders);
    const now = new Date();
    const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const startOfPrevMonth = new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 1);
    const endOfPrevMonth = new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 0, 23, 59, 59, 999);

    const previousMonthReservations = allOrders.filter(reservation => {
        const createdAt = reservation.dateCreated?.toDate
            ? reservation.dateCreated.toDate()
            : new Date(reservation.dateCreated);

        return createdAt >= startOfPrevMonth && createdAt <= endOfPrevMonth;
    });

    return previousMonthReservations;
}

const currentMonthEarningsSpan = document.querySelector('#currentMonthEarningsSpan');
const averagePriceSpan = document.querySelector('#averagePriceSpan');
const totalOrdersSpan = document.querySelector('#totalOrdersSpan');
const growthRateSpan = document.querySelector('#growthRateSpan');

currentMonthEarningsSpan.textContent = `${thisMonthTotalPrice}$`;
averagePriceSpan.textContent = `${(totalPrice / totalOrders).toFixed(2)}$`;
totalOrdersSpan.textContent = `${thisMonthTotalOrders}`;
growthRateSpan.textContent = `${((thisMonthTotalPrice - previousMonthTotalPrice) / previousMonthTotalPrice * 100).toFixed(2)}%`;

// ALL TIME REVENUE
async function renderRevenueChart() {
    const revenue = await getDailyRevenue();

    const ctx = document.getElementById("revenueChart").getContext("2d");

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: revenue.labels,
            datasets: [{
                label: 'Venituri pe zi',
                data: revenue.data,
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                pointRadius: 10,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Venitul total'
                },
                legend: {
                    display: true
                }
            },
            scales: {
                x: {
                    title: { display: false, text: 'Date' },
                    ticks: {
                        maxRotation: 90,
                        minRotation: 45,
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                },
                y: {
                    title: { display: true, text: '($)' },
                    beginAtZero: true
                }
            }
        }
    });
}

renderRevenueChart();


// ALL TIME GRAPH
function renderLineChartAllTime(groupedData) {
    const labels = Object.keys(groupedData).sort();
    const data = labels.map(date => groupedData[date]);

    const ctx = document.getElementById("reservationsChartAllTime").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Rezervări pe zi",
                data,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                
                tension: 0.3,
                fill: true,
                pointRadius: 10,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Toate rezervările",
                },
                legend: {
                    position: "top"
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxRotation: 90,
                        minRotation: 45,
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const groupedByDay = await getReservationsGroupedByDay();
// console.log(groupedByDay);
renderLineChartAllTime(groupedByDay);


// TOP CARS
const topCars = await getTopCars();
// console.log(topCars);

const topCarsGrid = document.querySelector('#topCarsGrid');
topCars.forEach((car, i) => {
    console.log(car);
    const carDiv = document.createElement('div');
    const carName = `${car.brand.name} ${car.model.name}`;
    carDiv.innerHTML = CreateTopCarRow(i + 1, carName, car.id, car.thisMonthRevenue, car.allTimeRevenue, car.status);
    topCarsGrid.appendChild(carDiv);
});

// TOP CARS PIE CHART
const topRevenue = topCars.reduce((sum, car) => sum + car.allTimeRevenue, 0);


const labels = topCars.map(car => `${car.brand.name} ${car.model.name}`);
const data = topCars.map(car => car.allTimeRevenue);
console.log(data)
const remainingRevenue = totalPrice - topRevenue;

labels.push("Restul");
data.push(remainingRevenue);

function renderTopCarsRevenuePieChart(labels, data){
    const ctx = document.getElementById('topCarsRevenuePieChart').getContext('2d');

    new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: "Revenue Distribution",
            data: data,
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#AAAAAA'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                    display: true,
                    text: "Ponderile veniturilor pe mașini",
            },
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const value = context.parsed;
                        const percentage = ((value / totalPrice) * 100).toFixed(2);
                        return `${context.label}: $${value} (${percentage}%)`;
                    }
                }
            }
        }
    }
});
}

renderTopCarsRevenuePieChart(labels, data)