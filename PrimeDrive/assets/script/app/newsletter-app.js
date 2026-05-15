import { addAlert } from "../actions/global/alert.js";
import { db } from "./app.js";
import { ref, set, onValue, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const subsListRef = ref(db, `newsLetterSubs/`);

const emailsReg = [];

onChildAdded(subsListRef, (data)=>{
    emailsReg.push(data.val().email);
});

export async function addSubsNewletter(value) {
    if(value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
        const isTaken = emailsReg.includes(value.toLocaleString());
        if(isTaken){
            // window.alert(emailExistsAlert);
            addAlert('FM-E-0001');
        } else {
            console.log('is new');
            try {
                const newSubsRef = push(subsListRef);
                set(newSubsRef, {
                    email: value,
                    timeJoind: (new Date()).toLocaleString(),
                });
            } catch (err) {
                console.log(err);
            }
            console.log('email added');
            emailInput.value = '';
            // window.alert(emailSuccess);
            addAlert('FM-E-0002');
        }
    } else {
        // window.alert(emailNotValideAlert);
        addAlert('FM-E-0000');
    }
}