import { setURLPath } from "../../../functions/global/URLPosition.js";

const SectionContent =
    `<section id="car_page_header">
        <div class="car_page_header_block">
            <div class="content_block">
                <div class="car_page_header_container">
                    <div class="car_page_header_wrapper">
                        <div class="dark_fader">
                            <div class="car_page_header_content">
                                <div class="car_head_content_text">
                                    <p class="car_page_title extra_big_p capitalise"><span id="carNameTitleSpan"></span></p>
                                    <div class="page_head_links">
                                        <div class="page_head_link_one_block">
                                            <a href="${setURLPath()}index.html">
                                                <p class="car_head_link_one page_head_link capitalise">Acasă</p>
                                            </a>
                                        </div>
                                        <div class="page_head_links_devidor"></div>
                                        <div class="page_head_link_one_block">
                                            <a href="${setURLPath()}pages/our-cars.html">
                                                <p class="car_head_link_one page_head_link capitalise">Mașini</p>
                                            </a>
                                        </div>  
                                        <div class="page_head_links_devidor"></div>
                                        <div class="page_head_link_two_block">
                                            <p class="car_head_link_two page_head_link capitalise">
                                                <span id="carNameSpan"></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export const CarPageHeader = SectionContent;