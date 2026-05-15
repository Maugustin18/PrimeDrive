import { getAllUsers } from "../../../app/admin/data/users/users-app.js";
import { preventAccess } from "../../../app/auth/account-app.js";
import { CreateUserRow } from "../../../components/elements/admin/tables/CreateUserRow.js";

preventAccess();

const users = await getAllUsers();
// console.log(users);
// USER STATS
const totalUsersSpan = document.querySelector('#totalUsersSpan');
totalUsersSpan.textContent = users.length;

// USERS SEARCH
const searchUserInput = document.querySelector('#searchUserInput');
searchUserInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchTermId = e.target.value;
    const filteredUsers = users.filter(user => {
        const userName = `${user.fName} ${user.lName}`.toLowerCase();
        return userName.includes(searchTerm) || user.id.toString().includes(searchTermId);
    });
    updateUsersGrid(filteredUsers);
});

function updateUsersGrid(filteredUsers) {
    usersGrid.innerHTML = 
        `<div class="admin_users_grid_header_row admin_users_grid_row">
            <div class="admin_users_grid_header_row_cell">
                <p>Nume</p>
            </div>
            <div class="admin_users_grid_header_row_cell">
                <p>Email</p>
            </div>
            <div class="admin_users_grid_header_row_cell">
                <p>Telefon</p>
            </div>
            <div class="admin_users_grid_header_row_cell">
                <p>Acțiuni</p>
            </div>
        </div>`;
    filteredUsers.forEach(user => {
        const userDiv = document.createElement('div');
        const userName = `${user.fName} ${user.lName}`;
        userDiv.innerHTML = CreateUserRow(user.id, userName, user.email, user.phone);
        usersGrid.appendChild(userDiv);
    });
}


// USERS GRID
const usersGrid = document.querySelector('#usersGrid');
users.forEach(user => {
    const userRow = document.createElement('div');

    const userName = `${user.fName} ${user.lName}`;
    userRow.innerHTML = CreateUserRow(user.id, userName, user.email, user.phone);
    usersGrid.appendChild(userRow);
});