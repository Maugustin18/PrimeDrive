import { ArchiveSection } from "./blocks/Archive.js";
import { GraphSection } from "./blocks/Graph.js";
import { StatsSection } from "./blocks/Stats.js";

const SectionContent = 
        `${StatsSection}
        ${GraphSection}
        ${ArchiveSection}
        `;

export const NewsletterSection = SectionContent;