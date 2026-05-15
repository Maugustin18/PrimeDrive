import { CarMonth } from "./PopularCars/CarMonth.js";
import { CarYear } from "./PopularCars/CarYear.js";

const SectionContent = 
        `<div class="popular_cars_block">
            <div class="popular_cars_container admin_home_container">
                <div class="popular_cars_content">
                    <div class="popular_cars_grid">
                        
                        ${CarMonth}
                        ${CarYear} 
                        
                    </div>
                </div>
            </div>
        </div>`;

export const PopularCarsSection = SectionContent;