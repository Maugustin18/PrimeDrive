import { getAllClients } from "../../../app/admin/data/clients/clients-app.js";
import { CreateClientRow } from "../../../components/elements/admin/tables/CreateClientRow.js";


const clients = await getAllClients();
console.log(clients);

// CLIENTS STATS
const totalClientsSpan = document.querySelector('#totalClientsSpan');
totalClientsSpan.textContent = clients.length;

// SEARCH CLIENTS
const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchTermId = e.target.value;
    const filteredClients = clients.filter(client => {
        const clientName = `${client.fName} ${client.lName}`.toLowerCase();
        return clientName.includes(searchTerm) || client.id.toString().includes(searchTermId);
    });
    updateClientsGrid(filteredClients);
});

function updateClientsGrid(filteredClients) {
    clientsGrid.innerHTML = 
        `<div class="admin_clients_grid_header_row admin_clients_grid_row">
            <div class="admin_clients_grid_header_row_cell">
                <p>Nume</p>
            </div>
            <div class="admin_clients_grid_header_row_cell">
                <p>Email</p>
            </div>
            <div class="admin_clients_grid_header_row_cell">
                <p>Telefon</p>
            </div>
            <div class="admin_clients_grid_header_row_cell">
                <p>Acțiuni</p>
            </div>
        </div>`;
    filteredClients.forEach(client => {
        const clientDiv = document.createElement('div');
        const clientName = `${client.fName} ${client.lName}`;
        clientDiv.innerHTML = CreateClientRow(client.id, clientName, client.email, client.phone);
        clientsGrid.appendChild(clientDiv);
    });
}

// CLIENTS GRID
const clientsGrid = document.querySelector('#clientsGrid');
clients.forEach(client => {
    const clientDiv = document.createElement('div');

    const clientName = `${client.fName} ${client.lName}`;
    clientDiv.innerHTML = CreateClientRow(client.id, clientName, client.email, client.phone);

    clientsGrid.appendChild(clientDiv);
});