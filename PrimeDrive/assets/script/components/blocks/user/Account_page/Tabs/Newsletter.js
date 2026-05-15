const SectioncContent = 
            `<div class="account_page_grid_col_2_opts_item">
                <p class="smaller_section_title">Abonează-te la newsletter-ul nostru</p>
                <form action="">
                    <div>
                        <input type="checkbox" class="checkbox" name="newsletterCheckbox" id="newsletterCheckbox">
                        <label for="newsletterCheckbox" id="newsletterCheckboxLabel">Ești abonat la newsletter-ul nostru</label>
                    </div>
                </form>
            </div>`;

const SectionObj = {
    key: 'newsletter',
    title: 'Newsletter',
    content: SectioncContent,
};

export const Newsletter = SectionObj;