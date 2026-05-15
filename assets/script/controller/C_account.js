import { OrdersParams } from "../../data/json/OrdersParams.data.js";
import { addAlert } from "../actions/global/alert.js";
import { resetPasswordEmailForAccount } from "../app/auth/global/resetPasswordWithEmail-app.js";
import { getCarPhotos } from "../app/admin/data/car/view-car-app.js";
import { getClientReservations } from "../app/admin/data/clients/view-client-app.js";
import { cancelReservation, changePassword, changeProfileData, changeProfilePicture, getClientIdByEmail, getNewsletterSubscription, getUserData, preventAccess, setNewsletterSubscription } from "../app/auth/account-app.js";
import { resetPasswordEmail } from "../app/auth/global/forgetPassword-app.js";
import { logOut } from "../app/auth/logOut-app.js";
import { CreateBookingRow } from "../components/elements/account/CreateBookingRow.js";

preventAccess();

async function renderContent(){
    try {
        const userData = await getUserData();
        console.log(userData);
        const {email, fName, lName, phone, photo} = userData;
        
        // PROFILE PICTURE
        // console.log(photo == '');
        // console.log(typeof(photo));
        await renderProfilePicture();
        // REMOVE PROFILE PICTURE
        const removeProfilePictureBtn = document.querySelector("#removeProfilePicture");
        removeProfilePictureBtn.addEventListener('click', async ()=>{
            await changeProfilePicture('');
            addAlert('US-S-0003');
            await renderProfilePicture();
        });

        // PROFILE DATA
        const fNameInput = document.querySelector("#fNameInput");
        const lNameInput = document.querySelector("#lNameInput");
        const emailInput = document.querySelector("#emailInput");
        const telInput = document.querySelector("#telInput");
        const updateProfileBtn = document.querySelector("#updateProfileBtn");

        fNameInput.value = fName || null;
        lNameInput.value = lName || null;
        emailInput.value = email;
        telInput.value = phone || null;

        updateProfileBtn.addEventListener('click', async()=>{
            const newFName = fNameInput.value != fName ? fNameInput.value : false;
            const newLName = lNameInput.value != lName ? lNameInput.value : false;
            const newEmail = emailInput.value != email ? emailInput.value : false;
            const newPhone = telInput.value != phone ? telInput.value : false;
            console.log(newFName)
            console.log(newLName)
            console.log(newEmail)
            console.log(newPhone)
            await changeProfileData(newFName, newLName, newEmail, newPhone);
        });

    } catch(err) {
        console.log(err);
    }
} 

async function renderProfilePicture() {
    const userData = await getUserData();
    const {photo} = userData;
        
    // PROFILE PICTURE
    const profilePicture = document.querySelector("#profilePicture");
    photo !== '' ?  
        profilePicture.style.background =  `url(${photo})` 
        : 
        profilePicture.style.background =  'var(--user-profile-picture)';
}

// CHANGE PROFILE PICTURE
const pictureLink = document.querySelector("#pictureLink");
const changeProfilePictureBtn = document.querySelector("#changeProfilePictureBtn");
const body = document.querySelector('body');
const popUp = document.querySelector('#reservation_pop_up_block');
const popUpBlock = document.querySelector('.reservation_pop_up');

changeProfilePictureBtn.addEventListener('click', async (event)=>{
    // console.log(pictureLink.value);
    event.preventDefault();
    setTimeout(()=>{
        popUp.classList.add('reservation_pop_up_block_reverse');
        popUpBlock.classList.add('reservation_pop_up_rev');
        setTimeout(()=>{
            popUp.style.display = "none";
            body.style.overflowY = "auto";
            popUp.classList.remove('reservation_pop_up_block_reverse');
            popUpBlock.classList.remove('reservation_pop_up_rev');
        }, 500)
    }, 700);
    await changeProfilePicture(pictureLink.value);
    pictureLink.value = '';
    addAlert('US-S-0004');
    await renderProfilePicture();
});





// CHANGE PASSWORD
const userData = await getUserData();

const forgotPasswordBtn = document.querySelector('#forgotPasswordBtn');
forgotPasswordBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    resetPasswordEmailForAccount(userData.email)
});


const updatePasswordBth = document.querySelector('#updatePasswordBth');
updatePasswordBth.addEventListener('click', ()=>{
    const currentPassword = document.querySelector("#passwordInput").value;
    const newPassword = document.querySelector("#newPasswordInput").value;
    const confirmNewPassword = document.querySelector("#confirmNewPasswordInput").value;
    changePassword(currentPassword, newPassword, confirmNewPassword);
});


renderContent();







// NEWSLETTER SUBSCRIPTION
const subscribedCheckbox = document.querySelector('#newsletterCheckbox');
const isSubscribed = await getNewsletterSubscription();
const newsletterCheckboxLabel = document.querySelector('#newsletterCheckboxLabel');

if(isSubscribed){
    subscribedCheckbox.checked = isSubscribed;
    newsletterCheckboxLabel.textContent = 'Ești abonat la newsletter-ul nostru';
} else {
    newsletterCheckboxLabel.textContent = 'Nu ești abonat la newsletter-ul nostru';
}

subscribedCheckbox.addEventListener('change', ()=>{
    // console.log(subscribedCheckbox.checked)
    setNewsletterSubscription(subscribedCheckbox.checked);
    if(subscribedCheckbox.checked){
        newsletterCheckboxLabel.textContent = 'Ești abonat la newsletter-ul nostru';
    } else {
        newsletterCheckboxLabel.textContent = 'Nu ești abonat la newsletter-ul nostru';
    }
})

// LOG OUT
const logOutBtn = document.querySelector('#logOutBtn');

logOutBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    logOut(logOutBtn);
});




// REZERVATIONS
function getLocationName(value) {
    const location = OrdersParams.locations.find(s => s.value == value);
    return location ? location.name : value;
}




async function renderReservations() {
    const userData = await getUserData();
    const clientId = await getClientIdByEmail(userData.email);

    const clientReservations = await getClientReservations(clientId);
    console.log(clientReservations);

    const ongoingReservationsGrid = document.querySelector('#ongoingReservationsGrid');
    const pendingReservationsGrid = document.querySelector('#pendingReservationsGrid');
    const acceptedReservationsGrid = document.querySelector('#acceptedReservationsGrid');
    const historyReservationsGrid = document.querySelector('#historyReservationsGrid');

    const activeReservations = clientReservations.filter(reservation => reservation.status === '5');
    const pendingReservations = clientReservations.filter(reservation => reservation.status === '1');
    const acceptedReservations = clientReservations.filter(reservation => reservation.status === '2');
    const finishedReservations = clientReservations.filter(reservation => reservation.status === '4');


    // ACTIVE RESERVATIONS
    if(activeReservations.length > 0) {
        for(const reservation of activeReservations) {
            const reservationDiv = document.createElement('div');
            reservationDiv.classList.add('reservations_grid_row_block');
            const carName = `${reservation.carDetails.brandName} ${reservation.carDetails.modelName}`;
            const carPhoto = (await getCarPhotos(reservation.carId))[0].publicUrl;
            console.log(reservation.carId);
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

            const pickUpLocation = getLocationName(reservation.pickupLocation);
            const dropOffLocation = getLocationName(reservation.dropoffLocation);

            reservationDiv.innerHTML = CreateBookingRow(
                reservation.id,
                reservation.carId,
                carPhoto,
                carName,
                pickUpDate,
                pickUpTime,
                pickUpLocation,
                dropOffDate,
                dropOffTime,
                dropOffLocation,
                reservation.price,
                false
            );
            ongoingReservationsGrid.appendChild(reservationDiv);
        };
    } else {
        const noReservationsDiv = document.createElement('div');
        noReservationsDiv.innerHTML = '<p class="smaller_section_title" style="font-weight: normal; font-size: 14px; color: var(--text-color)">Nu ai nicio rezervare activă.</p>';
        ongoingReservationsGrid.appendChild(noReservationsDiv);
    }


    // PENDING RESERVATIONS
    if(pendingReservations.length > 0) {
        for(const reservation of pendingReservations) {
            const reservationDiv = document.createElement('div');
            reservationDiv.classList.add('reservations_grid_row_block');
            const carName = `${reservation.carDetails.brandName} ${reservation.carDetails.modelName}`;
            const carPhoto = (await getCarPhotos(reservation.carId))[0].publicUrl;
            // console.log(reservation.carId);
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

            const pickUpLocation = getLocationName(reservation.pickupLocation);
            const dropOffLocation = getLocationName(reservation.dropoffLocation);

            reservationDiv.innerHTML = CreateBookingRow(
                reservation.id,
                reservation.carId,
                carPhoto,
                carName,
                pickUpDate,
                pickUpTime,
                pickUpLocation,
                dropOffDate,
                dropOffTime,
                dropOffLocation,
                reservation.price,
                true
            );
            pendingReservationsGrid.appendChild(reservationDiv);
        };
    } else {
        const noReservationsDiv = document.createElement('div');
        noReservationsDiv.innerHTML = '<p class="smaller_section_title" style="font-weight: normal; font-size: 14px; color: var(--text-color)">Nu ai nicio rezervare în așteptare.</p>';
        pendingReservationsGrid.appendChild(noReservationsDiv);
    }



    // ACCEPTED RESERVATIONS
    if(acceptedReservations.length > 0) {
        for(const reservation of acceptedReservations) {
            const reservationDiv = document.createElement('div');
            reservationDiv.classList.add('reservations_grid_row_block');
            const carName = `${reservation.carDetails.brandName} ${reservation.carDetails.modelName}`;
            const carPhoto = (await getCarPhotos(reservation.carId))[0].publicUrl;
            // console.log(reservation.carId);
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

            const pickUpLocation = getLocationName(reservation.pickupLocation);
            const dropOffLocation = getLocationName(reservation.dropoffLocation);

            reservationDiv.innerHTML = CreateBookingRow(
                reservation.id,
                reservation.carId,
                carPhoto,
                carName,
                pickUpDate,
                pickUpTime,
                pickUpLocation,
                dropOffDate,
                dropOffTime,
                dropOffLocation,
                reservation.price,
                true
            );
            acceptedReservationsGrid.appendChild(reservationDiv);
        };
    } else {
        const noReservationsDiv = document.createElement('div');
        noReservationsDiv.innerHTML = '<p class="smaller_section_title" style="font-weight: normal; font-size: 14px; color: var(--text-color)">Nu ai nicio rezervare acceptată.</p>';
        acceptedReservationsGrid.appendChild(noReservationsDiv);
    }

    // HISTORY RESERVATIONS
    if(finishedReservations.length > 0) {
        for(const reservation of finishedReservations) {
            const reservationDiv = document.createElement('div');
            reservationDiv.classList.add('reservations_grid_row_block');
            const carName = `${reservation.carDetails.brandName} ${reservation.carDetails.modelName}`;
            const carPhoto = (await getCarPhotos(reservation.carId))[0].publicUrl;
            // console.log(reservation.carId);
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

            const pickUpLocation = getLocationName(reservation.pickupLocation);
            const dropOffLocation = getLocationName(reservation.dropoffLocation);

            reservationDiv.innerHTML = CreateBookingRow(
                reservation.id,
                reservation.carId,
                carPhoto,
                carName,
                pickUpDate,
                pickUpTime,
                pickUpLocation,
                dropOffDate,
                dropOffTime,
                dropOffLocation,
                reservation.price,
                false
            );
            historyReservationsGrid.appendChild(reservationDiv);
            
        };
    } else {
        const noReservationsDiv = document.createElement('div');
        noReservationsDiv.innerHTML = '<p class="smaller_section_title" style="font-weight: normal; font-size: 14px; color: var(--text-color)">Nu ai nicio rezervare finalizată.</p>';
        historyReservationsGrid.appendChild(noReservationsDiv);
    }
}

renderReservations();


document.addEventListener('click', async (e) => {
    if (e.target && e.target.classList.contains('cancel_btn')) {
        const reservationId = e.target.id;
        console.log('Cancel booking for reservation ID:', reservationId);
        await cancelReservation(reservationId);
        const row = e.target.closest('.reservations_grid_row_block');
        if (row) row.remove();
    }
});