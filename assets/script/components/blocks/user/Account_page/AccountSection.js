import { CreateAccountTab } from "../../../elements/account/CreateAccountTab.js";
import { History } from "./Tabs/History.js";
import { LogOut } from "./Tabs/LogOut.js";
import { Newsletter } from "./Tabs/Newsletter.js";
import { Profile } from "./Tabs/Profile.js";
import { Reservations } from "./Tabs/Reservations.js";
import { Security } from "./Tabs/Security.js";


export const menu = [Profile, Security, Reservations, History, Newsletter, LogOut];

let Menu = ``;
menu.forEach((e, index)=>{
    Menu+=
        `<div class="account_page_grid_col_1_menu_item account_menu_item capitalise ${index == 0 ? 'active' : null}">
            <p>${e.title}</p>
            <p>></p>
        </div>`
});

let CurrentTab = ``;
menu.forEach((e)=>{
    CurrentTab += CreateAccountTab(e);
})

const SectioncContent = 
            `<section id="account_page_sec">
                <div class="account_page_block content_block">
                    <div class="account_page_grid">
                        <div class="account_page_grid_col_1">
                            <div class="account_page_grid_col_1_wrapper">
                                <div class="account_page_grid_col_1_content">
                                    <div class="account_page_grid_col_1_menu" id="accountMenu">
                                        ${Menu}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="account_page_grid_col_2">
                            <div class="account_page_grid_col_2_wrapper">
                                <div class="account_page_grid_col_2_content" id="accountContent">
                                    ${CurrentTab}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;

export const AccountSection = SectioncContent;