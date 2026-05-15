import { setURLPath } from "./../../../../functions/global/URLPosition.js"
import { AccountSection } from "./AccountSection.js";

const main = document.querySelector("main");

document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/local-styles/user-account.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/mobile-styles/local-style/user-account.css"> `;

document.querySelector('title').textContent += ` - Account`;

const AccountContent = AccountSection;

main.innerHTML = AccountContent;