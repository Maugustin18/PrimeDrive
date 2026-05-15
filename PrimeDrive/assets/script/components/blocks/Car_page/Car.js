import { setURLPath } from "../../../functions/global/URLPosition.js";
import { CarPageBody } from "./CarPageBody.js";
import { CarRezervationPopUp } from "./CarPageBody/CarRezervationPopUp.js";
import { CarPageFooter } from "./CarPageFooter.js";
import { CarPageHeader } from "./CarPageHeader.js";


const main = document.querySelector("main");
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/local-styles/car.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/mobile-styles/local-style/car.css"> `;

const AboutContent = 
        `${CarPageHeader}
        ${CarPageBody}
        ${CarPageFooter}
        ${CarRezervationPopUp}`;
        
const About = AboutContent;

main.innerHTML = About;