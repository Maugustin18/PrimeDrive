import { Slide1 } from "./Slides/Slide1.js";
import { Slide2 } from "./Slides/Slide2.js";

const slidesArr = [Slide1, Slide2];
let currentSlideIndex = 1;
let currentSlide = slidesArr[currentSlideIndex];

// 

// export function changeSlide(i){
//     currentSlide = slidesArr[i];
// }

const Slider = 
            `<div class="index_hero_slider">
                <div class="slider_control_block">
                    <div class="slider_control_arrow" id="slider_ctrl_arrow_left">
                        <
                    </div>
                    <div class="slider_control_arrow" id="slider_ctrl_arrow_right">
                        >
                    </div>
                </div>
                <div class="index_hero_slider_content">
                    <div class="index_hero_slider_wrapper" id="index_hero_slider_wrapper">
                    
                    </div>
                </div>
            </div>`;

const HeroContent = 
            `<section id="index_hero">
                <div class="index_hero_block">
                    <div class="index_hero_container">
                        ${Slider}
                    </div>
                </div>
            </section>`;

export const HeroSection = HeroContent;