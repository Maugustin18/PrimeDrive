import { setURLPath } from "../../../../functions/global/URLPosition.js";
import { SecondStepSection } from "./SecondStepSection.js";

const main = document.querySelector("main");

document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/local-styles/login.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/mobile-styles/local-style/login.css"> `;

document.querySelector('title').textContent += ` - Log in`;

const SecondStepContent = SecondStepSection;

main.innerHTML = SecondStepContent;