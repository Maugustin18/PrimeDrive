import { addAlert } from "../actions/global/alert.js";
import { db } from "./app.js";
import { ref, set, onValue, push, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";




const contactsListRef = ref(db, `contacts/`);

let isDisabled = false;

const waitSecs = 60;

export async function sendContactMessage(messageContent) {
    const {name, email, subject, content} = messageContent;

    if(email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        if(name != '' && subject != '' && content != ''){
            try {
                const newContactsRef = push(contactsListRef);
                set(newContactsRef, {
                    name: name,
                    email: email,
                    subject: subject,
                    content: content,
                    time: (new Date()).toLocaleString(),
                });
            } catch (err) {
                console.log(err);
            }
            console.log('sent');
            contactForm.reset();
            addAlert('FM-S-0000');
        } else {
            addAlert('FM-D-0000');
        }
        
    } else {
        addAlert('FM-E-0000');
    }
    // isDisabled = true;
    // const disableTimeout = setTimeout(()=>{
    //     isDisabled = false;
    //     console.log(disableTimeout);
    // }, waitSecs * 1000);
// }
}

