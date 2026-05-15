const pageType = document.querySelector("#pageType").value;

const link = pageType != 'index' ? './our-cars.html' : './pages/our-cars.html';

const GetCarAddContent = 
            `<section class="get_car_add">
                <div class="get_car_add_container">
                    <div class="content_block">
                        <div class="get_car_add_wrapper">
                            <div class="get_car_add_content">
                                <p class="extra_big_p">
                                    Ia cheile aventurii tale - Închiriază!
                                </p>
                            </div>
                            <div class="get_car_add_btn_block">
                                <a href="${link}" class="round_btn black_btn capitalise">
                                    Toate mașinile
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const GetCarAdd = GetCarAddContent;