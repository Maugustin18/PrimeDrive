import { ClientSearch } from "./blocks/ClientSearch.js";
import { ClientStats } from "./blocks/ClientStats.js";
import { ClientTable } from "./blocks/ClientTable.js";

const SectionContent =
        `${ClientStats}
        ${ClientSearch}
        ${ClientTable}
        `;

export const ClientsSections = SectionContent;