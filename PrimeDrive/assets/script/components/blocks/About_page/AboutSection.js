import { AboutSectionColOne } from "./AboutSection/AboutSectionColOne.js";
import { AboutSectionColTwo } from "./AboutSection/AboutSectionColTwo.js";

const SectionContent = 
            `<section id="about_section">
                <div class="about_section_block">
                    <div class="about_section_container">
                        <div class="content_block about_section_content">
                            ${AboutSectionColOne}
                            ${AboutSectionColTwo}
                        </div>
                    </div>
                </div>
            </section>`;

export const AboutSection = SectionContent;