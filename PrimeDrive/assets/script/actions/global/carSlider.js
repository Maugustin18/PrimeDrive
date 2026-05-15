import { activateSlider } from "../../controller/admin/Car_pages/C_viewCar.js";

// CAR SLIDER
    activateSlider
        .then((isActive) => {
            const sliderBlock = document.querySelector('#car_img_slider');
            const carImgArr = document.querySelectorAll('#car_img_slider>img');
            const ctrlBtnArr = document.querySelectorAll('.car_page_slider_ctrl_b');

            const time = 1000 * 5;
            let currentIndex = 0;

            ctrlBtnArr.forEach((b, index)=>{
                b.addEventListener('click', ()=>{
                    console.log(index);
                    setCurrentSlide(index);
                    currentIndex = index;
                    clearInterval(changeSlideInterval);
                    changeSlideInterval = setInterval(()=>{
                        currentIndex == carImgArr.length - 1 ? 
                            currentIndex = 0 
                            : 
                            currentIndex++;
                        setCurrentSlide(currentIndex);
                    }, time);
                });
            });

            let changeSlideInterval = setInterval(()=>{
                currentIndex == carImgArr.length - 1 ? 
                    currentIndex = 0 
                    : 
                    currentIndex++;
                setCurrentSlide(currentIndex);
            }, time);

            function setCurrentSlide(i){
                ctrlBtnArr.forEach((btn)=>{
                    btn.classList.contains('car_page_slider_ctrl_b_active') ?
                        btn.classList.remove('car_page_slider_ctrl_b_active')
                        :
                        null;
                });
                ctrlBtnArr[i].classList.add('car_page_slider_ctrl_b_active');

                    carImgArr.forEach((img, imgIndex)=>{
                        img.classList.contains('slider_img_active') && i!=imgIndex ?
                            (img.classList.remove('slider_img_active'),
                            img.classList.add('slider_img_prevActive'))
                            :
                            null;
                    });
                setTimeout(()=>{
                    carImgArr.forEach((img, imgIndex)=>{
                        img.classList.contains('slider_img_prevActive') && i!=imgIndex ?
                            img.classList.remove('slider_img_prevActive')
                            :
                            null;
                    });
                }, 500);
                carImgArr[i].classList.add('slider_img_active');
            }
    });

