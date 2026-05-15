import { PendingReservations } from "./Reservations/PendingReservations.js";
import { StartingSoonReservations } from "./Reservations/StartingSoonReservations.js";
import { TodayReturns } from "./Reservations/TodayReturns.js";


const SectionContent = 
        `${PendingReservations}
        ${StartingSoonReservations}
        ${TodayReturns}`;

export const ReservationsSection = SectionContent;