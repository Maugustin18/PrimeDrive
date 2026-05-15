import { AdminDashboardNav } from "../../../data/json/AdminDashboardNav.data.js";
import { getUser } from "../../app/admin/data/users/view-user-app.js";
import { getUserData, preventAccess } from "../../app/auth/account-app.js";
import { setURLPath } from "../../functions/global/URLPosition.js";

const url = window.location.href;
let adminCategoryIndex = null;
let adminPageIndex = null;

preventAccess();

const adminName = document.querySelector('#adminName');
const adminProfileImage = document.querySelector('#adminProfileImage');

const adminData = await getUserData();
adminName.innerText = `${adminData.fName} ${adminData.lName}`;
adminProfileImage.src = adminData.photo ? adminData.photo : `https://bwidehzltapvmubhedpe.supabase.co/storage/v1/object/public/user-profile//user2.png`;

AdminDashboardNav.forEach((item, index) => {
    if (url.includes(item.root)) {
        console.log(`Admin root found: ${item.root}`);
        adminCategoryIndex = index;

        item.links.forEach((link, linkIndex) => {
            if (url.includes(link.name.toLowerCase()) || url.includes(link.link.toLowerCase().slice(0, link.link.length - 5))) {
                console.log(`Admin link found: ${link.name} at index ${linkIndex}`);
                console.log(`Admin page found: ${link.link}`);
                adminPageIndex = linkIndex;
            }
        });
    }
});

// console.log(url);
// console.log(adminCategoryIndex);

const navIcons = document.querySelectorAll('.admin_d_icon_side_menu_item');
const navLists = document.querySelectorAll('.admin_d_link_side_menu_list');




navLists.forEach(list => {
    list.style.display = 'none';
});

navIcons[adminCategoryIndex].classList.add('admin_d_icon_side_menu_item_active');
navLists[adminCategoryIndex].style.display = 'grid';

const navListsItems = navLists[adminCategoryIndex].querySelectorAll('.admin_d_link_side_menu_item');

console.log(navListsItems);

console.log(navLists[adminCategoryIndex]);
navListsItems[adminPageIndex].classList.add('admin_d_link_side_menu_item_active');

