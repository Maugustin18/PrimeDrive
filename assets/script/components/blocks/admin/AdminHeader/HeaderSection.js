import { setURLPath } from "../../../../functions/global/URLPosition.js";

const SectionContent = 
            `<header id="adminHeader">
                <div class="admin_d_header_block">
                    <div class="admin_d_header_container">
                        <div class="admin_d_header_content">
                            <div class="admin_d_header_logo">
                                <a href="${setURLPath()}index.html">
                                    <img src="${setURLPath()}assets/media/img/logo/prime1.png" alt="">
                                </a>
                            </div>
                            <div class="admin_d_header_account">
                                <div class="admin_d_header_account_icon">
                                    <a href="${setURLPath()}pages/admin/dashboard/account/profile.html">
                                        <img id="adminProfileImage" alt="">
                                    </a>
                                </div>
                                <div class="admin_d_header_account_data">
                                    <div class="admin_d_header_account_name">
                                        <a href="${setURLPath()}pages/admin/dashboard/account/profile.html">
                                            <p id="adminName">Daniel Hondo</p>
                                        </a>
                                    </div>
                                    <div class="admin_d_header_account_role">
                                        <a href="${setURLPath()}pages/admin/dashboard/account/profile.html">
                                            <p>Admin</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>`;


export const AdminHeaderSection = SectionContent;