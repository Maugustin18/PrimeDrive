import { CarFleetSection } from "./blocks/CarFleet.js";
import { RevenueGraphSection } from "./blocks/RevenueGraph.js";
import { PopularCarsSection } from "./blocks/PopularCars.js";
import { ReservationsSection } from "./blocks/Reservations.js";
import { UserStatsSection } from "./blocks/UserStats.js";

const SectionContent = `
            ${CarFleetSection}
            ${PopularCarsSection}        
            ${RevenueGraphSection}   
            ${ReservationsSection}
            ${UserStatsSection}  
`;

export const HomeSection = SectionContent;
