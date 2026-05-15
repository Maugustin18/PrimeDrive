import { CarSearch } from "./blocks/CarSearch.js";
import { CarsStats } from "./blocks/CarsStats.js";
import { CarsTable } from "./blocks/CarsTable.js";
import { FilterCars } from "./blocks/FilterCars.js";

const SectionContent = 
        `${CarsStats}
        ${FilterCars}
        ${CarSearch}
        ${CarsTable}`;

export const CarsSection = SectionContent;