import { CompanyInfoData } from '../../data/json/CompanyInfo.data.js';
import { setURLPath } from '../functions/global/URLPosition.js';
import {RelativeHeader} from './blocks/header/RelativeHeader.js';
import { StickyHeader } from './blocks/header/StickyHeader.js';

const header = document.querySelector("#header");
const fixedHeader = document.querySelector("#fixedHeader");
const stickyHeader = document.querySelector("#stickyHeader");
const headerScript = document.querySelector("#headerScript");

const pageType = document.querySelector("#pageType").value;

document.querySelector('title').textContent = CompanyInfoData.name;

document.querySelector('head').innerHTML += `<meta name="description" content="${CompanyInfoData.shortDesc}">`;
document.querySelector('head').innerHTML += `<meta name="keywords" content="${CompanyInfoData.keyWords}">`;

document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/header.css"> `;
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${setURLPath()}assets/style/mobile-styles/header.css"> `;

console.log(setURLPath())

export const checkPoint = 170;
export let onPlace = 0;
let headerContent = RelativeHeader;
header ? header.innerHTML = headerContent : null;
fixedHeader ? fixedHeader.innerHTML = StickyHeader : null;
stickyHeader ? 
    (
        stickyHeader.innerHTML = StickyHeader,
        document.querySelector('#sticky_header_container').style.height = "auto",
        document.querySelector('#sticky_header_container').style.opacity = "1"
    ) 
    : 
    null;


fixedHeader ? window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    //console.log(currentScroll);
    // console.info(onPlace);
    if(currentScroll > checkPoint && !onPlace){
        onPlace = 1;
        fixedHeader.style.display = 'block';
        document.querySelector('#sticky_header_container').style.height = "auto";
        document.querySelector('#sticky_header_container').style.opacity = "1";
        
    } else if(currentScroll < checkPoint){
        onPlace = 0;
        fixedHeader.style.display = 'none';

    }
}) : null;


