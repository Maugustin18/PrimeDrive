import { getUsersWithRoleOne } from "../../../app/admin/account/admins/admins-app.js";
import { CreateAdminRow } from "../../../components/elements/admin/tables/CreateAdminRow.js";


const admins = await getUsersWithRoleOne();

const adminsNr = admins.length;
const totalAdminsSpan = document.getElementById('totalAdminsSpan');
totalAdminsSpan.textContent = adminsNr;

const adminsGrid = document.getElementById('adminsGrid');
admins.forEach(admin => {
    const adminDiv = document.createElement('div');
    const adminName = `${admin.fName} ${admin.lName}`;
    const createdDate = admin.timeCreated.toDate ? admin.timeCreated.toDate().toLocaleDateString() : new Date(admin.timeCreated).toLocaleDateString();
    const createdTime = admin.timeCreated.toDate ? admin.timeCreated.toDate().toLocaleTimeString() : new Date(admin.timeCreated).toLocaleTimeString();
    const email = admin.email;
    const phone = admin.phone;
    adminDiv.innerHTML = CreateAdminRow(adminName, createdDate, createdTime, email, phone);

    adminsGrid.appendChild(adminDiv);
});