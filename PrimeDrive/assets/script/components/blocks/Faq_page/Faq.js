import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { FaqSection } from "./FaqSection.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";

const main = document.querySelector("main");
const pageType = document.querySelector("#pageType").value;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/local-styles/faq.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/mobile-styles/local-style/faq.css"> `;

document.querySelector('title').textContent += ` - FAQ`;

const AboutContent = 
            `${PageHead} 
            ${FaqSection}
            ${GetCarAdd}`;
        
const About = AboutContent;

main.innerHTML = About;