import { ProfileBody } from "./blocks/ProfileBody.js";
import { ProfileHeader } from "./blocks/ProfileHeader.js";

const SectionContent =
        `<div class="admin_profile_block">
            <div class="admin_home_container">
                <div class="admin_profile_content">
                    ${ProfileHeader}
                    ${ProfileBody}
                </div>
            </div>
        </div>`;

export const ProfileSection = SectionContent;