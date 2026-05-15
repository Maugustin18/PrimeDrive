import { CreateNewsletter } from "../../../../../elements/admin/CreateNewsletterCard.js";

const SectionContent = `
            <div class="inbox_block">
                <div class="inbox_container admin_home_container">
                    <div class="inbox_content">
                        <p class="add_car_stage_name">Arhivă newsletter</p>
                        <div class="inbox_grid">
                            ${CreateNewsletter(1, "utilizatorii abonați", "Promoții noi în perioada de vară", "2025-06-01", "Acum 2 ore", "Marius Țurcan")}
                            ${CreateNewsletter(2, "clienții abonați", "Aceasta este secțiunea de arhivă newsletter.", "2025-06-01", "Acum 2 ore", "Marius Țurcan")}
                        </div>
                    </div>
                </div>
            </div>
`;

export const ArchiveSection = SectionContent;