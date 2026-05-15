import { StageOne } from "./blocks/StageOne.js";
import { StageTwo } from "./blocks/StageTwo.js";

const SectionContent = 
            `<section id="add_car_sec">
                <div class="add_car_block">
                    <div class="add_car_container">
                        <!-- <div class="stage_indicator_block">
                            <div class="stage_indicator_container">
                                <div class="stage_indicator_content">
                                    <button class="stage_indicator completed">1</button>
                                    <button class="stage_indicator">2</button>
                                </div>
                            </div>
                        </div> -->

                        ${StageOne}
                        ${StageTwo}
                        
                    </div>
                </div>
            </section>`;

export const AddCarSection = SectionContent;