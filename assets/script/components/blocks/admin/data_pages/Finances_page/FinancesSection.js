import { AllTimeGraph } from "./blocks/AllTimeGraph.js";
import { FinancesCarTableGraph } from "./blocks/FinancesCarTableGraph.js";
import { FinancesStats } from "./blocks/FinancesStats.js";
import { MonthGraph } from "./blocks/MonthGraph.js";

const SectionContent = 
        `${FinancesStats}
        ${MonthGraph}
        ${AllTimeGraph}
        ${FinancesCarTableGraph}`;

export const FinancesSection = SectionContent;