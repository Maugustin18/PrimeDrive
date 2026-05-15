import { SlidesData } from '../../../../../../data/json/IndexHeroSlides.data.js';

const SlideData = SlidesData[0];
const {img, sTitle, title, titleSpan, desc, link} = SlideData;

const SlideContent = 
            `<div class="index_hero_s_slide">
                <div class="index_hero_s_slide_bg">
                    <img src="${img}" alt="">
                </div>
                <div class="light_grey_fader"></div>
                <div class="content_block index_hero_s_slide_container">
                    <div class="index_hero_s_slide_content">
                        <div class="index_hero_s_slide_small_title capitalise">${sTitle}</div>
                        <div class="index_hero_s_slide_big_title extra_big_title">${title} <span class="extra_big_title">${titleSpan}</span></div>
                        <div class="index_hero_s_slide_desc">${desc}</div>
                        <div class="index_hero_s_slide_btn">
                            <a href="${link}" class="round_btn capitalise orange_btn">
                                Toate mașinile
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;

export const Slide1 = SlideContent;