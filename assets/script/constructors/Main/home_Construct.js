import { initGlobalPrep } from "../Global_Constructor.js";
import { MainConstruct } from "./Main_Construct.js";

// initGlobalPrep();
setHomeContent();

function setHomeContent() {
    const body = document.body;
    body.innerHTML = 
       `<div id="loader" class="loader">
            <div class="loader_wrapper">
                <div class="loader_content">
                    <div class="loader_outer_c">
                        <div class="loader_inner_c"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="body_container">
            <div class="admin_top_link_block"></div>
            <div class="header_mobile_container header_mobile"></div>
            <header id="header"></header>
            <header id="fixedHeader"></header>
            <main id="main">
                <!-- <div class="some_block" style="height: 60vh; background-color: black; margin-top: -163px;"></div> -->
            </main>
            <div id="alert_block">
                <div class="alert_container">
                    <div class="alert_list">  
                    </div>
                </div>
            </div>
            <footer id="footer"></footer>
        </div>
        <input type="hidden" value="index" id="pageType">`;
}

// MainConstruct();

