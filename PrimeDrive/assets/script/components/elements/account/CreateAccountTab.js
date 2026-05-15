export function CreateAccountTab(tab){
    return (`<div class="accountSlide">
                <p class="small_section_title">${tab.title}</p>
                <div class="account_page_grid_col_2_opts">
                    ${tab.content}
                </div>
            </div>`);
}