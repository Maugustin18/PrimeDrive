import { OrdersParams } from "../../../../data/json/OrdersParams.data.js";
import { getClientReservations, viewClient } from "../../../app/admin/data/clients/view-client-app.js";
import { CreateClientReservationRow } from "../../../components/elements/admin/tables/CreateClientReservationRow.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const clientId = urlParams.get('id');

// CLIENT DATA
const editClientBtn = document.querySelector('#editClientBtn');
editClientBtn.href = `${setURLPath()}pages/admin/dashboard/data/clients/add-client.html?edit=true&id=${clientId}`;

const clientData = await viewClient(clientId);
// console.log(clientData);

const clientIDSpan = document.querySelector('#clientIDSpan');
const lName = document.querySelector('#lName');
const fName = document.querySelector('#fName');
const clientEmail = document.querySelector('#clientEmail');
const clientPhone = document.querySelector('#clientPhone');
const clientCreatedAt = document.querySelector('#clientCreatedAt');

let date;
if (clientData.timeCreated.toDate) {
    date = clientData.timeCreated.toDate();
} else {
    date = new Date(clientData.timeCreated);
}

clientIDSpan.textContent = clientId;
lName.textContent = clientData.lName;
fName.textContent = clientData.fName;
clientEmail.textContent = clientData.email;
clientPhone.textContent = clientData.phone;
clientCreatedAt.textContent = date.toLocaleString();



// CLIENT RESERVATIONS
console.log(await getClientReservations(clientId));
const clientReservations = await getClientReservations(clientId);
const clientReservationsGrid = document.querySelector('#clientReservationsGrid');
const clientReservationsSpan = document.querySelector('#clientReservationsSpan');

function getStatusName(value) {
    const stat = OrdersParams.statuses.find(s => s.value == value);
    return stat ? stat.name : value;
}

if (clientReservations.length > 0) {
    clientReservationsGrid.style.display = 'grid';
    clientReservations.forEach(reservation => {
        const reservationDiv = document.createElement('div');

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

        const carName = `${reservation.carDetails.brandName} ${reservation.carDetails.modelName}`;
        const statusName = getStatusName(reservation.status);

        reservationDiv.innerHTML = CreateClientReservationRow(reservation.id, carName, reservation.carId, pickUpDate, pickUpTime, dropOffDate, dropOffTime, statusName);
        clientReservationsGrid.appendChild(reservationDiv);
    });
} else {
    clientReservationsSpan.style.display = 'block';
}
