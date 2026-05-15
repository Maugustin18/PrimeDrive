import { TestimonialsGroups } from "./TestimonialsSection/TestimonialsGroupes.js";
// console.log(TestimonialsGroups);

let TestimonialsControl = ``;
TestimonialsGroups.forEach((e, index)=>{
    TestimonialsControl += `<div class="testimonials_control_btn ${index == 0 ? 'testimonials_active' : ''}"></div>`;
});


const SectionContent = 
            `<section id="testionials_section">
                <div class="testionials_block">
                    <div class="testionials_container">
                        <div class="section_head testinonials_sec_head content_block">
                            <div class="orange_subtitle">Recenziile clienților</div>
                            <div class="section_title extra_big_p">Ce zic clienții noștrii</div>
                        </div>
                        <div class="testimonials_wrapper">
                            <div class="testimonials_content">
                                <div class="testimonials_row" id="testimonialsRow">
                                    ${TestimonialsGroups[0]}
                                </div>
                                <div class="testimonials_control">
                                    ${TestimonialsControl}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const TestimonialSection = SectionContent;