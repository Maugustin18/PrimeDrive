import { setURLPath } from "../../../../functions/global/URLPosition.js";
import { SignupSection } from "./SignupSection.js";

const main = document.querySelector("main");

document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/local-styles/login.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/mobile-styles/local-style/login.css"> `;

document.querySelector('title').textContent += ` - Sign up`;

const SignupContent = SignupSection;

main.innerHTML = SignupContent;