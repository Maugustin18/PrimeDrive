import { sendContactMessage } from "../app/contacts-app.js";

const contactForm = document.querySelector('#contactForm');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const subjectInput = document.querySelector('#subjectInput');
const contentInput = document.querySelector('#contentInput');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', ()=>{
    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const content = contentInput.value;

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(content);
        
    sendContactMessage({name, email, subject, content});
});