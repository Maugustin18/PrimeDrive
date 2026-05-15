import { addAlert } from "../../../actions/global/alert.js";
import { addOrder, checkAvailability } from "../../../app/admin/data/orders/add-order-app.js";
import { updateOrder } from "../../../app/admin/data/orders/edit-order-app.js";
import { getOrder } from "../../../app/admin/data/orders/view-order-app.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";


const clientIdInput = document.querySelector('#clientIdInput');
const carIdInput = document.querySelector('#carIdInput');
const pickupLocation = document.querySelector('#pickupLocation');
const dropoffLocation = document.querySelector('#dropoffLocation');
const pickupDateInput = document.querySelector('#pickupDateInput');
const dropoffDateInput = document.querySelector('#dropoffDateInput');
const priceInput = document.querySelector('#priceInput');
const messageTextarea = document.querySelector('#messageTextarea');

const statusSelect = document.querySelector('#statusSelect');
const addOrderButton = document.querySelector('#addOrderButton');

const addOrderTitle = document.querySelector('#addOrderTitle');


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const edit = urlParams.get('edit');
const orderId = urlParams.get('id');


if (edit === 'true') {
    const orderData = await getOrder(orderId);
    addOrderTitle.innerHTML = orderId;

    clientIdInput.value = orderData.clientId;
    carIdInput.value = orderData.carId;
    pickupLocation.value = orderData.pickupLocation;
    dropoffLocation.value = orderData.dropoffLocation;
    pickupDateInput.value = orderData.pickupDate;
    dropoffDateInput.value = orderData.dropoffDate;
    priceInput.value = orderData.price;
    messageTextarea.value = orderData.message;
    statusSelect.value = orderData.status;

    addOrderButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const orderData = {
                clientId: clientIdInput.value.trim(),
                carId: carIdInput.value.trim(),
                pickupLocation: pickupLocation.value,
                dropoffLocation: dropoffLocation.value,
                pickupDate: pickupDateInput.value,
                dropoffDate: dropoffDateInput.value,
                price: priceInput.value,
                message: messageTextarea.value,
                status: statusSelect.value,
                dateCreated: new Date().toISOString(),
            };
            console.log(orderData);
        if(clientIdInput.value != '' || 
            carIdInput.value != '' || 
            pickupLocation.value != 'null' || 
            dropoffLocation.value != 'null' || 
            pickupDateInput.value != '' || 
            dropoffDateInput.value != '' || 
            priceInput.value != '' || 
            statusSelect.value != 'null') {
            const available = await checkAvailability(
                carIdInput.value,
                (new Date(pickupDateInput.value)).getTime(),
                (new Date(dropoffDateInput.value)).getTime(),
                orderId
            );
            if (available) {
                updateOrder(orderId, orderData);
                if(orderId) {
                    addAlert('AD-A-0002');
                    setTimeout(() => {
                        window.location.href = `${setURLPath()}pages/admin/dashboard/data/orders/view-order.html?id=${orderId}`;
                    }, 1000);
                } else {
                    console.error('Error adding order');
                }
                
            } else {
                addAlert('CR-R-0000');
            }

        } else {
            addAlert('FM-D-0000');
        }
        
    }); 




} else {
    addOrderTitle.innerHTML = 'Adaugă comandă';
    addOrderButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const orderData = {
                clientId: clientIdInput.value.trim(),
                carId: carIdInput.value.trim(),
                pickupLocation: pickupLocation.value,
                dropoffLocation: dropoffLocation.value,
                pickupDate: pickupDateInput.value,
                dropoffDate: dropoffDateInput.value,
                price: priceInput.value,
                message: messageTextarea.value,
                status: statusSelect.value,
                dateCreated: new Date().toISOString(),
            };
            console.log(orderData);
        if(clientIdInput.value != '' && 
            carIdInput.value != '' && 
            pickupLocation.value != 'null' && 
            dropoffLocation.value != 'null' && 
            pickupDateInput.value != '' && 
            dropoffDateInput.value != '' && 
            priceInput.value != '' && 
            statusSelect.value != 'null') {
            const available = await checkAvailability(
                carIdInput.value,
                (new Date(pickupDateInput.value)).getTime(),
                (new Date(dropoffDateInput.value)).getTime()
            );
            if (available) {
                const orderId = await addOrder(orderData);
                if(orderId) {
                    addAlert('AD-A-0002');
                    setTimeout(() => {
                        window.location.href = `${setURLPath()}pages/admin/dashboard/data/orders/view-order.html?id=${orderId}`;
                    }, 1000);
                } else {
                    console.error('Error adding order');
                }
                
            } else {
                addAlert('CR-R-0000');
            }

        } else {
            addAlert('FM-D-0000');
        }
        
    }); 
}

