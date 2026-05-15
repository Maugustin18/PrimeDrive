import { CarPageBodyColOne } from "./CarPageBody/CarPageBodyColOne.js";
import { CarPageBodyColTwo } from "./CarPageBody/CarPageBodyColTwo.js";

const SectionContent = 
        `<section id="car_page_body">
            <div class="car_page_body_block">
                <div class="content_block">
                    <div class="car_page_body_container">
                        <div class="car_page_body_grid">
                            ${CarPageBodyColOne}
                            ${CarPageBodyColTwo}
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

export const CarPageBody = SectionContent;