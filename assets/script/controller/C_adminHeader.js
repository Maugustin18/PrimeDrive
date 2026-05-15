import { checkIfAdmin } from "../app/auth/global/isAdmin-app.js";
import { getUserData } from "../app/auth/global/userData-app.js";
import { AdminLink } from "../components/elements/header/AdminLink.js";


const AdminLinkBlock = document.querySelectorAll('.admin_top_link_block');

async function setAdminHeader(){
    try {
        console.log(await checkIfAdmin())
        if(await checkIfAdmin()) {
            AdminLinkBlock.forEach(b=>{
                b.innerHTML = AdminLink;
            })
        }
    } catch (err) {
        console.log(err)
    } 
}

setAdminHeader();

