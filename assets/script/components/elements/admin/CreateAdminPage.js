import { AdminHeaderSection } from "../../blocks/admin/AdminHeader/HeaderSection.js";
import { SideBarSection } from "../../blocks/admin/AdminSideBar/SiderBarSection.js";
import { FooterRowThree } from "../../blocks/footer/FooterRowThree.js";
import { CreateAdminDSubHeader } from "./CreateAdminDSubHeader.js";

export function CreateAdminPage(title, button, content) {
    return `
        <section id="admin_dashboard">
            <div class="admin_d_block">
                <div class="admin_d_container">
                    <div class="admin_d_grid">    
                        ${SideBarSection}
                        <div class="admin_d_main_block">      
                            ${AdminHeaderSection}

                            <div class="admin_d_flex_block"> 
                                <div id="admin_d_content">


                                    <div id="adminSec">
                                        ${CreateAdminDSubHeader(title, button)}

                                        <div id="admin_d_body">
                                            ${content}

                                        </div>
                                            
                                    </div>
                                        
                                </div>
                                <div class="admin_d_footer_block">
                                    ${FooterRowThree}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </section>`;
}