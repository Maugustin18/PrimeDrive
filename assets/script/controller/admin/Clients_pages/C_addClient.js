import { addClient } from "../../../app/admin/data/clients/add-client-app.js";
import { addAlert } from "../../../actions/global/alert.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";
import { viewClient } from "../../../app/admin/data/clients/view-client-app.js";
import { editClient } from "../../../app/admin/data/clients/edit-client-app.js";



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const clientId = urlParams.get('id');
const edit = urlParams.get('edit');



const fNameInput = document.querySelector("#fNameInput");
const lNameInput = document.querySelector("#lNameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");

const addClientBtn = document.querySelector("#addClientBtn");

if(edit === "true") {
    const clientDataOld = await viewClient(clientId);
    console.log(clientDataOld);
    fNameInput.value = clientDataOld.fName;
    lNameInput.value = clientDataOld.lName;
    emailInput.value = clientDataOld.email;
    phoneInput.value = clientDataOld.phone;


    addClientBtn.addEventListener("click", async (e) => {
    e.preventDefault();
        const clientData = {
            fName: fNameInput.value,
            lName: lNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            timeCreated: new Date().toISOString(),
        };

        if( clientData.fName === "" || clientData.lName === "" || clientData.email === "" || clientData.phone === "") {
            addAlert('FM-D-0000')
        } else {
            try {
                await editClient(clientId, clientData);
                if(clientId == false){
                    addAlert('AD-A-0004');
                    
                } else {
                    addAlert('AD-A-0003');
                    window.location.href = `${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}`;
                }
            } catch (err) {
                console.log(err);
            }
        }
    });

    
} else {
    addClientBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const clientData = {
        fName: fNameInput.value,
        lName: lNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        timeCreated: new Date().toISOString(),
    };

    console.log(clientData);

    if( clientData.fName === "" || clientData.lName === "" || clientData.email === "" || clientData.phone === "") {
        addAlert('FM-D-0000')
    } else {
        try {
            const clientId = await addClient(clientData);
            if(clientId == false){
                addAlert('AD-A-0004');
                
            } else {
                addAlert('AD-A-0003');
                window.location.href = `${setURLPath()}pages/admin/dashboard/data/clients/view-client.html?id=${clientId}`;
            }
        } catch (err) {
            console.log(err);
        }
    }
    
});
}

