import { getAllOrders } from "../../../app/admin/data/orders/orders-app.js";
import { CreateOrdersRow } from "../../../components/elements/admin/tables/CreateOrdersRow.js";
import { OrdersParams } from "../../../../../assets/data/json/OrdersParams.data.js";


const allOrders = await getAllOrders();
console.log(allOrders);

const activeOrders = allOrders.filter(order => order.status == "5");
const confirmedOrders = allOrders.filter(order => order.status == "2");
const unconfirmedOrders = allOrders.filter(order => order.status == "1");

// ORDER STATS
const totalOrdersSpan = document.querySelector('#totalOrdersSpan');
const activeOrdersSpan = document.querySelector('#activeOrdersSpan');
const confirmedOrdersSpan = document.querySelector('#confirmedOrdersSpan');
const unconfirmedOrdersSpan = document.querySelector('#unconfirmedOrdersSpan');

totalOrdersSpan.textContent = allOrders.length;
activeOrdersSpan.textContent = activeOrders.length;
confirmedOrdersSpan.textContent = confirmedOrders.length;
unconfirmedOrdersSpan.textContent = unconfirmedOrders.length;

// ORDER SORT/FILTER
const sortSelectOrders = document.querySelector('#sortSelect');
const statusSelect = document.querySelector('#statusSelect');
const pickupTimeSelect = document.querySelector('#pickupTimeSelect');
const dropoffTimeSelect = document.querySelector('#dropoffTimeSelect');

function selectOrders() {
    const sortValue = sortSelectOrders.value;
    const statusValue = statusSelect.value;
    const pickupTimeValue = pickupTimeSelect.value;
    const dropoffTimeValue = dropoffTimeSelect.value;

    let filteredOrders = allOrders;

    if (statusValue && statusValue != 'null' && statusValue != "-1") {
        filteredOrders = filteredOrders.filter(order => order.status == statusValue);
    }

    if (pickupTimeValue && pickupTimeValue != 'null' && pickupTimeValue != "-1") { 
        filteredOrders = filteredOrders.filter(order => {
            const startDateRaw = order.pickupDate;
            const startDate = startDateRaw.toDate ? startDateRaw.toDate() : new Date(startDateRaw);
            const now = new Date();

            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() - now.getDay());
            startOfWeek.setHours(0, 0, 0, 0);

            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            endOfWeek.setHours(23, 59, 59, 999);

            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

            if (pickupTimeValue === '1') {
                return startDate >= startOfWeek && startDate <= endOfWeek;
            }

            if (pickupTimeValue === '2') {
                return startDate >= startOfMonth && startDate <= endOfMonth;
            }

            if (pickupTimeValue === '3') {
                return startDate < startOfMonth || startDate > endOfMonth;
            }

            return true;
        });
    }
    if (dropoffTimeValue && dropoffTimeValue != 'null' && dropoffTimeValue != "-1") { 
        filteredOrders = filteredOrders.filter(order => {
            const endDateRaw = order.dropoffDate;
            const endDate = endDateRaw.toDate ? endDateRaw.toDate() : new Date(endDateRaw);
            const now = new Date();

            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() - now.getDay());
            startOfWeek.setHours(0, 0, 0, 0);

            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            endOfWeek.setHours(23, 59, 59, 999);

            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

            if (dropoffTimeValue === '1') {
                return endDate >= startOfWeek && endDate <= endOfWeek;
            }

            if (dropoffTimeValue === '2') {
                return endDate >= startOfMonth && endDate <= endOfMonth;
            }

            if (dropoffTimeValue === '3') {
                return endDate < startOfMonth || endDate > endOfMonth;
            }

            return true;
        });
    }

    if (sortValue) {
        switch (sortValue) {
            case "1":
                filteredOrders.sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated));
                break;
            case "2":
                filteredOrders.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
                break;
        }
    }

    return filteredOrders;
}

sortSelectOrders.addEventListener('change', () => 
    updateTable(selectOrders())
);
statusSelect.addEventListener('change', () => 
    updateTable(selectOrders())
);
pickupTimeSelect.addEventListener('change', () => 
    updateTable(selectOrders())
);
dropoffTimeSelect.addEventListener('change', () => 
    updateTable(selectOrders())
);

function updateTable(selectedOrders) {
    const ordersGrid = document.querySelector('.admin_orders_grid');
    ordersGrid.innerHTML = 
        `<div class="admin_orders_grid_header_row admin_orders_grid_row">
            <div class="admin_orders_grid_header_row_cell"><p>Mașină</p></div>
            <div class="admin_orders_grid_header_row_cell"><p>Client</p></div>
            <div class="admin_orders_grid_header_row_cell"><p>Preluare</p></div>
            <div class="admin_orders_grid_header_row_cell"><p>Predare</p></div>
            <div class="admin_orders_grid_header_row_cell"><p>Status</p></div>
            <div class="admin_orders_grid_header_row_cell"><p>Detalii</p></div>
        </div>`;
    selectedOrders.forEach(order => {
        const orderRow = document.createElement('div');

        const carName = `${order.car.brand.name} ${order.car.model.name}`;
        const clientName = `${order.client.fName} ${order.client.lName}`;

        const pickUpRaw = order.pickupDate;
        const pickUpDateObj = pickUpRaw.toDate ? pickUpRaw.toDate() : new Date(pickUpRaw);
        const pickUpISO = pickUpDateObj.toISOString();
        const pickUpDate = pickUpISO.split("T")[0];
        const pickUpTime = pickUpISO.split("T")[1].slice(0, 5);

        const dropOffRaw = order.dropoffDate;
        const dropOffDateObj = dropOffRaw.toDate ? dropOffRaw.toDate() : new Date(dropOffRaw);
        const dropOffISO = dropOffDateObj.toISOString();
        const dropOffDate = dropOffISO.split("T")[0];
        const dropOffTime = dropOffISO.split("T")[1].slice(0, 5);

        const statusName = getStatusName(order.status);

        orderRow.innerHTML = CreateOrdersRow(order.id, order.carId, carName, order.clientId, clientName,
            pickUpDate, pickUpTime, dropOffDate, dropOffTime, statusName);
        ordersGrid.appendChild(orderRow);
    });
}

// SEARCH ORDERS
function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

const searchOrderId = document.querySelector('#searchOrderId');
searchOrderId.addEventListener('input', debounce(() => {
    const searchTerm = searchOrderId.value;
    const filteredOrders = allOrders.filter(order => {
        return order.id && order.id.includes(searchTerm);
    });
    updateTable(filteredOrders);
}, 500));


// ORDER TABLE
function getStatusName(value) {
    const stat = OrdersParams.statuses.find(s => s.value == value);
    return stat ? stat.name : value;
}

const ordersGrid = document.querySelector('.admin_orders_grid');
allOrders.forEach(order => {
    const orderRow = document.createElement('div');

    const carName = `${order.car.brand.name} ${order.car.model.name}`;
    const clientName = `${order.client.fName} ${order.client.lName}`;

    const pickUpRaw = order.pickupDate;
    const pickUpDateObj = pickUpRaw.toDate ? pickUpRaw.toDate() : new Date(pickUpRaw);
    const pickUpISO = pickUpDateObj.toISOString();
    const pickUpDate = pickUpISO.split("T")[0];
    const pickUpTime = pickUpISO.split("T")[1].slice(0, 5);

    const dropOffRaw = order.dropoffDate;
    const dropOffDateObj = dropOffRaw.toDate ? dropOffRaw.toDate() : new Date(dropOffRaw);
    const dropOffISO = dropOffDateObj.toISOString();
    const dropOffDate = dropOffISO.split("T")[0];
    const dropOffTime = dropOffISO.split("T")[1].slice(0, 5);

    const statusName = getStatusName(order.status);

    orderRow.innerHTML = CreateOrdersRow(order.id, order.carId, carName, order.clientId, clientName,
        pickUpDate, pickUpTime, dropOffDate, dropOffTime, statusName);
    ordersGrid.appendChild(orderRow);
});