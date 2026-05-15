import { menu } from "../components/blocks/user/Account_page/AccountSection.js";
import { CreateAccountTab } from "../components/elements/account/CreateAccountTab.js";

const accountMenu = document.querySelectorAll(".account_menu_item");
const accountTabs = document.querySelectorAll(".accountSlide")

// console.log("Here")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const selectedURLTab = urlParams.get('tab');

console.log(selectedURLTab);

switch (selectedURLTab) {
    case 'profile':
        getSelectedTab(0);
        break;
    case 'security':
        getSelectedTab(1);
        break;
    case 'reservations':
        getSelectedTab(2);
        break;
    case 'history':
        getSelectedTab(3);
        break;
    case 'newsletter':
        getSelectedTab(4);
        break;
    case 'logout':
        getSelectedTab(5);
        break;
    default:
        getSelectedTab(0)
        break;
}

function getSelectedTab(tabIndex){
    accountTabs.forEach((tab)=>{
        tab.classList.remove('active');
    });
    accountTabs[tabIndex].classList.add('active');

    accountMenu.forEach((d)=>{
        d.classList.remove('active');
    });
    accountMenu[tabIndex].classList.add('active');
}



accountMenu.forEach((e, index)=>{
    e.addEventListener('click', (event)=>{
        // console.log(e.querySelector('p').innerHTML);
        accountMenu.forEach((d)=>{
            d.classList.remove('active');
        });
        accountTabs.forEach((tab, index)=>{
            tab.classList.remove('active');
        });
        e.classList.add('active');
        accountTabs[index].classList.add('active');
    });
})

// CHANGE PROFILE PICTURE POP UP
const popUp = document.querySelector('#reservation_pop_up_block');
const popUpBlock = document.querySelector('.reservation_pop_up');
const openPopUpBtn = document.querySelector('#uploadProfilePicture');
const closePopUpBtn = document.querySelector('#closePopUp');
const popUpWrapper = document.querySelector('.reservation_pop_up_wrapper');
const body = document.querySelector('body');

openPopUpBtn.addEventListener('click', ()=>{
    popUp.style.display = "block";
    body.style.overflowY = "hidden";
});

closePopUpBtn.addEventListener('click', ()=>{
    popUp.classList.add('reservation_pop_up_block_reverse');
    popUpBlock.classList.add('reservation_pop_up_rev');
    setTimeout(()=>{
        popUp.style.display = "none";
        body.style.overflowY = "auto";
        popUp.classList.remove('reservation_pop_up_block_reverse');
        popUpBlock.classList.remove('reservation_pop_up_rev');
    }, 500)
    
});

popUpWrapper.addEventListener('click', (e)=>{
    const {target} = e;
    console.log(target.classList.contains('reservation_pop_up_wrapper'));
    if(target.classList.contains('reservation_pop_up_wrapper')){
        popUp.classList.add('reservation_pop_up_block_reverse');
        popUpBlock.classList.add('reservation_pop_up_rev');
        setTimeout(()=>{
            popUp.style.display = "none";
            body.style.overflowY = "auto";
            popUp.classList.remove('reservation_pop_up_block_reverse');
            popUpBlock.classList.remove('reservation_pop_up_rev');
        }, 500)
    }
});