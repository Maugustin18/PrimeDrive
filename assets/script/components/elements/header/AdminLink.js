import { setURLPath } from "../../../functions/global/URLPosition.js";

const sectionContent = 
    `<div class="admin_top_link_container">
        <div class="content_block">
            <div class="admin_top_link_content">
                <p>You are currently logged in as admin. Go to admin <a href="${setURLPath()}pages/admin/dashboard/general/home.html" class="orange_link">dashboard</a>.</p>
            </div>
        </div>
    </div>`;

export const AdminLink = sectionContent;