import { PageHead } from "../../elements/main/PageHead.js";
import { GetCarAdd } from "../../elements/main/GetCarAdd.js";
import { StepsSection } from "../About_page/StepsSection.js";
import { CarsSection } from "./CarsSection.js";
import { CarsDisplayOpts } from "./CarsDisplayOpts.js";
import { CarsBlockNumber } from "./CarsBlockNumber.js";
import { setURLPath } from "../../../functions/global/URLPosition.js";

const main = document.querySelector("main");
const head = document.querySelector("head");

const aboutCss = document.createElement('link');
aboutCss.rel = 'stylesheet';
aboutCss.href = `${setURLPath()}assets/style/local-styles/about.css`;

const aboutCssMobile = document.createElement('link');
aboutCssMobile.rel = 'stylesheet';
aboutCssMobile.href = `${setURLPath()}assets/style/mobile-styles/local-style/about.css`;

const carsCss = document.createElement('link');
carsCss.rel = 'stylesheet';
carsCss.href = `${setURLPath()}assets/style/local-styles/cars.css`;

const carsCssMobile = document.createElement('link');
carsCssMobile.rel = 'stylesheet';
carsCssMobile.href = `${setURLPath()}assets/style/mobile-styles/local-style/cars.css`;

head.appendChild(carsCss);
head.appendChild(carsCssMobile);
head.appendChild(aboutCss);
head.appendChild(aboutCssMobile);




document.querySelector('title').textContent += ` - Mașinile noastre`;

const CarsContent = 
            `${PageHead} 
            ${CarsDisplayOpts}
            ${CarsSection}
            ${CarsBlockNumber}
            ${StepsSection}
            ${GetCarAdd}`;
        
const CarsPage = CarsContent;

main.innerHTML = CarsPage;