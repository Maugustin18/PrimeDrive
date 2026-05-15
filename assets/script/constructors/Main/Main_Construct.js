import { setURLPath } from "../../functions/global/URLPosition.js";

export function MainConstruct() {
    const body = document.body;

    const headerComponent = document.createElement('script');
    headerComponent.src = `${setURLPath()}assets/script/components/Header.js`;
    headerComponent.type = 'module';
    body.appendChild(headerComponent);

    const footerComponent = document.createElement('script');
    footerComponent.src = `${setURLPath()}assets/script/components/Footer.js`;
    footerComponent.type = 'module';
    body.appendChild(footerComponent);

}