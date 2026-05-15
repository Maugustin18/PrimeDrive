import { changeOrderStatus, getOrder } from "../../../app/admin/data/orders/view-order-app.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";
import { OrdersParams } from "../../../../../assets/data/json/OrdersParams.data.js";
import { addAlert } from "../../../actions/global/alert.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const orderId = urlParams.get('id');

const clientName = document.querySelector('#clientName');
const carName = document.querySelector('#carName');
const pickupLocation = document.querySelector('#pickupLocation');
const dropoffLocation = document.querySelector('#dropoffLocation');
const pickupTime = document.querySelector('#pickupTime');
const dropoffTime = document.querySelector('#dropoffTime');
const price = document.querySelector('#price');
const message = document.querySelector('#message');
const status = document.querySelector('#status');
const dateCreated = document.querySelector('#dateCreated');

const orderIdSpan = document.querySelector('#orderIdSpan');
orderIdSpan.innerHTML = orderId;

const editOrderButton = document.querySelector('#editOrderButton');
editOrderButton.href = `${setURLPath()}pages/admin/dashboard/data/orders/add-order.html?edit=true&id=${orderId}`;

const orderData = await getOrder(orderId);

function getLocationName(value) {
    const loc = OrdersParams.locations.find(l => l.value == value);
    return loc ? loc.name : value;
}

function getStatusName(value) {
    const stat = OrdersParams.statuses.find(s => s.value == value);
    return stat ? stat.name : value;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString('ro-RO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

clientName.innerHTML = `<a href="${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${orderData.clientId}">${orderData.clientName}</a>`;
carName.innerHTML = `<a href="${setURLPath()}pages/admin/dashboard/data/cars/view-car.html?id=${orderData.carId}">${orderData.carBrandName} ${orderData.carModelName}</a>`;
pickupLocation.innerHTML = getLocationName(orderData.pickupLocation);
dropoffLocation.innerHTML = getLocationName(orderData.dropoffLocation);
pickupTime.innerHTML = formatDate(orderData.pickupDate);
dropoffTime.innerHTML = formatDate(orderData.dropoffDate);
price.innerHTML = orderData.price;
message.innerHTML = orderData.message;
status.innerHTML = getStatusName(orderData.status); 
dateCreated.innerHTML = formatDate(orderData.dateCreated);


const orderControlBtns = document.querySelector('#orderControlBtns');
const acceptOrderBtn = document.querySelector('#acceptOrderBtn');
const rejectOrderBtn = document.querySelector('#rejectOrderBtn');

if (orderData.status == '1') {
    orderControlBtns.style.display = 'flex';
}

if (orderData.status != '4') {
    editOrderButton.style.display = 'flex';
}

acceptOrderBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const newStatus = '2';
    const success = await changeOrderStatus(orderId, newStatus);
    setTimeout(() => {
        window.location.reload();
    }, 1000);
    
});

rejectOrderBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const newStatus = '3';
    const success = await changeOrderStatus(orderId, newStatus);
    setTimeout(() => {
        window.location.reload();
    }, 1000);
});