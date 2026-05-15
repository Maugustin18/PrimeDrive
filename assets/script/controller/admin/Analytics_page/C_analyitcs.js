import { OrdersParams } from "../../../../data/json/OrdersParams.data.js";
import { getAllOrders } from "../../../app/admin/data/orders/orders-app.js";
import { countClientsWithMultipleReservations, getCancellations, getCancellationsPerMonth, getMonthlyClientSignupCounts, getMonthlyUserSignupCounts, getOrdersPerMonth, getTopClientsByPayment, getTopPlatforms, getUsersCreatedThisMonth } from "../../../app/admin/general/analytics/analytics-app.js";
import { CreateLocationRow } from "../../../components/elements/admin/tables/CreateLocationRow.js";
import { CreatePlatformsRow } from "../../../components/elements/admin/tables/CreatePlatformsRow.js";
import { CreateTopUserRow } from "../../../components/elements/admin/tables/CreateTopUserRow.js";

const allOrders = await getAllOrders();


// BOOKING STATS
const totalBookingsSpan = document.querySelector('#totalBookingsSpan');
const avgBookingValueSpan = document.querySelector('#avgBookingValueSpan');

totalBookingsSpan.textContent = allOrders.length;

const totalBookingValue = allOrders.reduce((acc, order) => acc + parseFloat(order.price), 0);
avgBookingValueSpan.textContent = `${(totalBookingValue / allOrders.length).toFixed(2)}$`;



// BOOKING GRAPH
export function renderOrdersPerMonthChart(labels, counts) {
    const ctx = document.getElementById('ordersChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Rezervări pe lună',
                data: counts,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                fill: true,
                tension: 0.3,
                pointRadius: 4,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Luna'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Rezervări'
                    }
                }
            }
        }
    });
}

const { labels, counts } = await getOrdersPerMonth();
renderOrdersPerMonthChart(labels, counts);


// BOOKINGS CANCELLATIONS
const bookingCancellation = await getCancellations()

const totalCancellationsSpan = document.querySelector('#totalCancellationsSpan');
totalCancellationsSpan.textContent = bookingCancellation.length;

const cancellationRateSpan = document.querySelector('#cancellationRateSpan');
cancellationRateSpan.textContent = `${(((bookingCancellation.length / allOrders.length) * 100) || 0).toFixed(2)}%`;


function renderCancellationLineChart(canvasId, data) {
  const ctx = document.getElementById(canvasId).getContext("2d");

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [{
        label: 'Cancellations per Month',
        data: data.counts,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Monthly Reservation Cancellations'
        }
      }
    }
  });
}

const cancellationData = await getCancellationsPerMonth();
renderCancellationLineChart("cancellationChart", cancellationData);


// POPOLAR LOCATIONS
function getPopularLocationsFromOrders(orders) {
    const pickupCounts = {};
    const dropoffCounts = {};

    orders.forEach(order => {
        const pickup = order.pickupLocation;
        const dropoff = order.dropoffLocation;

        if (pickup) {
            pickupCounts[pickup] = (pickupCounts[pickup] || 0) + 1;
        }

        if (dropoff) {
            dropoffCounts[dropoff] = (dropoffCounts[dropoff] || 0) + 1;
        }
    });

    const sortedPickups = Object.entries(pickupCounts)
        .sort((a, b) => a[0] - b[0])
        .map(([location, count]) => ({ location, count }));

    const sortedDropoffs = Object.entries(dropoffCounts)
        .sort((a, b) => a[0] - b[0])
        .map(([location, count]) => ({ location, count }));

    return {
        pickup: sortedPickups,
        dropoff: sortedDropoffs
    };
}



const popularLocations = getPopularLocationsFromOrders(allOrders);
const popularLocationsArr = [];
OrdersParams.locations.forEach(location => {
    popularLocationsArr.push({
        locationValue: location.value,
        locationName: location.name,
        pickupCount: popularLocations.pickup.find(item => item.location === location.value)?.count || 0,
        dropoffCount: popularLocations.dropoff.find(item => item.location === location.value)?.count || 0,
        totalCount: (popularLocations.pickup.find(item => item.location === location.value)?.count || 0) + (popularLocations.dropoff.find(item => item.location === location.value)?.count || 0)
    })
});

popularLocationsArr.sort((a, b) => b.totalCount - a.totalCount);

const popularLocationsTable = document.getElementById('popularLocationsTable');

popularLocationsArr.forEach((location, i) => {
    const newRow = document.createElement('div');
    newRow.innerHTML = CreateLocationRow(i+1, location.locationName, location.pickupCount, location.dropoffCount, location.totalCount);
    popularLocationsTable.appendChild(newRow);
});

console.log(popularLocationsArr);


// BROWSERS CHART 
function renderBrowserUsagePieChart() {
    const ctx = document.getElementById('browserUsageChart').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Google Chrome', 'Firefox', 'Safari'],
            datasets: [{
                data: [2194, 843, 634],
                backgroundColor: ['#4285F4', '#FF7139', '#7AC142'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#333'
                    }
                },
                title: {
                    display: true,
                    text: 'Browser Usage',
                    color: '#111',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });
}

renderBrowserUsagePieChart();



// POPPULAR PLATFORMS
const topPlatforms = getTopPlatforms();
const totalSessions = topPlatforms.reduce((acc, platform) => acc + platform.count, 0);
const platformsGrid = document.querySelector('#platformsGrid');


topPlatforms.forEach((platform, i) => {
    const platformDiv = document.createElement('div');
    const platformPercentage = ((platform.count / totalSessions) * 100).toFixed(2);
    platformDiv.innerHTML = CreatePlatformsRow(i+1, platform.name, platform.count, platformPercentage);
   platformsGrid.appendChild(platformDiv);
});



// NEW SIGN UPS
const newUsers = await getUsersCreatedThisMonth();
const returningUsers = await countClientsWithMultipleReservations();

const newUsersSpan = document.querySelector('#newUsersSpan');
const returningUsersSpan = document.querySelector('#returningUsersSpan');

newUsersSpan.textContent = newUsers;
returningUsersSpan.textContent = returningUsers;

// USER STATS CHART

async function prepareChartData() {
  const users = await getMonthlyUserSignupCounts();
  const clients = await getMonthlyClientSignupCounts();

  const allMonths = Array.from(new Set([...users, ...clients].map(d => d.month))).sort();

  const userMap = Object.fromEntries(users.map(d => [d.month, d.count]));
  const clientMap = Object.fromEntries(clients.map(d => [d.month, d.count]));

  return {
    labels: allMonths,
    datasets: [
      {
        label: 'Utilizatori noi',
        data: allMonths.map(month => userMap[month] || 0),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.3
      },
      {
        label: 'Clienți noi',
        data: allMonths.map(month => clientMap[month] || 0),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3
      }
    ]
  };
}

const ctx = document.getElementById('newSignUpsChart').getContext('2d');


prepareChartData().then(chartData => {
  new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            title: {
            display: true,
            text: 'Clienți și utilizatori noi'
            }
        }
    }
  });
});


const topClients = await getTopClientsByPayment(5);

const topUsersTable = document.querySelector('#topUsersTable');
topClients.forEach((client, i) => {
    console.log(client);
    const newRow = document.createElement('div');
    const clientName = `${client.clientInfo.fName} ${client.clientInfo.lName}`;
    newRow.innerHTML = CreateTopUserRow(clientName, client.clientId, i+1, client.reservationCount, client.totalPayment.toFixed(2));
    topUsersTable.appendChild(newRow);
});