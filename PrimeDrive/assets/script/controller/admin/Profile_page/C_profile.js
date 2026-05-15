import { addAlert } from "../../../actions/global/alert.js";
import { changeProfileData, changeProfilePicture, getUserData, preventAccess } from "../../../app/admin/account/account-app.js";

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

        updateProfileBtn.addEventListener('click', async(e)=>{
            e.preventDefault();
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

renderContent()

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


