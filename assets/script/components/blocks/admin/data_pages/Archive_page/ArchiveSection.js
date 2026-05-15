import { ArchiveFilter } from "./blocks/ArchiveFilter.js";
import { ArchiveSearch } from "./blocks/ArchiveSearch.js";
import { ArchiveStats } from "./blocks/ArchiveStats.js";
import { ArchiveTable } from "./blocks/ArchiveTable.js";

const SectionContent =  
        `${ArchiveStats}
        ${ArchiveFilter}
        ${ArchiveSearch}
        ${ArchiveTable}
        `;
export const ArchiveSection = SectionContent;