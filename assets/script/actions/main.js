import { setHomeSlides } from "../controller/C_home.js";

const leftArrow = document.querySelector("#slider_ctrl_arrow_left");
const rigthArrow = document.querySelector("#slider_ctrl_arrow_right");

const indexHeroSliderWrapper = document.querySelector("#index_hero_slider_wrapper");

const slidesArr = await setHomeSlides();


let currentSlideIndex = 0;
const changeSlideIntervat = 9000;

function changeSlideIndex(i){
    currentSlideIndex = i;
}

indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];

let changeSlideAuto = setInterval(()=>{
    const isEnd = currentSlideIndex == slidesArr.length - 1;
    isEnd ? changeSlideIndex(0) : changeSlideIndex(++currentSlideIndex);
    // console.log(currentSlideIndex);
    indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
}, changeSlideIntervat);

leftArrow.addEventListener('click', ()=>{
    const isStart = currentSlideIndex == 0;
    isStart ? changeSlideIndex(slidesArr.length - 1) : changeSlideIndex(--currentSlideIndex);
    // console.log(currentSlideIndex);
    indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
    clearInterval(changeSlideAuto);
    changeSlideAuto = setInterval(()=>{
        const isEnd = currentSlideIndex == slidesArr.length - 1;
        isEnd ? changeSlideIndex(0) : changeSlideIndex(++currentSlideIndex);
        // console.log(currentSlideIndex);
        indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
    }, changeSlideIntervat);
});

rigthArrow.addEventListener('click', ()=>{
    const isEnd = currentSlideIndex == slidesArr.length - 1;
    isEnd ? changeSlideIndex(0) : changeSlideIndex(++currentSlideIndex);
    // console.log(currentSlideIndex);
    indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
    clearInterval(changeSlideAuto);
    changeSlideAuto = setInterval(()=>{
        const isEnd = currentSlideIndex == slidesArr.length - 1;
        isEnd ? changeSlideIndex(0) : changeSlideIndex(++currentSlideIndex);
        // console.log(currentSlideIndex);
        indexHeroSliderWrapper.innerHTML = slidesArr[currentSlideIndex];
    }, changeSlideIntervat);
});