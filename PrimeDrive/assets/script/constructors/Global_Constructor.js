import { setURLPath } from "../functions/global/URLPosition.js";

export function setGlobalStyle(){
    const head = document.querySelector('head');
    const globalStyleLink = document.createElement('link');
    globalStyleLink.rel = 'stylesheet';
    globalStyleLink.href = `${setURLPath()}assets/style/style.css`;
    head.appendChild(globalStyleLink);

    const globalStyleLinkMobile = document.createElement('link');
    globalStyleLinkMobile.rel = 'stylesheet';
    globalStyleLinkMobile.href = `${setURLPath()}assets/style/mobile-styles/mobile-style.css`;
    head.appendChild(globalStyleLinkMobile);
}

export function setGlobalScripts(){
    const loader = document.createElement('script');
    loader.src = `${setURLPath()}./assets/script/actions/global/loader.js`;
    loader.type = 'module';
    document.body.appendChild(loader);

    const authSessionController = document.createElement('script');
    authSessionController.src = `${setURLPath()}./assets/script/controller/C_authSession.js`;
    authSessionController.type = 'module';
    document.body.appendChild(authSessionController);
}

export function initGlobalPrep(){
    setGlobalStyle();
    setGlobalScripts();
}