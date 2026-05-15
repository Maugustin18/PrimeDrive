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

