import { Alerts } from "../../../data/json/Alerts.data.js";
import { CreateAlert } from "../../components/elements/alerts/CreateAlert.js";

const alertList = document.querySelector('.alert_list');
const alertBlock = document.querySelector('#alert_block');

export function addAlert(code){
    let selectedAlert = {};
    Alerts.forEach((e)=>{
        e.code==code ? selectedAlert = e : null;
    });
    
    const {type, content} = selectedAlert;
    
    const newAlert = document.createElement('div');
    newAlert.innerHTML = CreateAlert(type, content)
    alertList.appendChild(newAlert.firstChild);

    const alertInterval = 5 * 1000;

    const alertItems = alertList.querySelectorAll('.alert_item');
    alertItems.forEach((e, index) => {
        if (e.dataset.marked) {
            return;
        }
        e.setAttribute('data-marked', '1');
        console.log("set timeouts")
        let fadeTimeout = setTimeout(()=>{
            e.classList.add('fadeOutAlert');
        }, alertInterval);
        let hideTimeout = setTimeout(()=>{
            console.log("removing child")
            e?.parentElement?.removeChild(e);
        }, (alertInterval+500));

        e.addEventListener('mouseover', ()=>{
            clearTimeout(fadeTimeout);
            clearTimeout(hideTimeout);
            fadeTimeout = setTimeout(()=>{
                e.classList.add('fadeOutAlert');
            }, alertInterval);
            hideTimeout = setTimeout(()=>{
                e?.parentElement?.removeChild(e);
            }, (alertInterval+500));
            // console.log('sdfdsf');
        });

        e.querySelector('.alert_item_close').addEventListener('click', ()=>{
            clearTimeout(fadeTimeout);
            clearTimeout(hideTimeout);
                e?.parentElement?.removeChild(e);
            // console.log('sdfdsf');
        });
    });
}

// addAlert('FM-E-0000');
// addAlert('FM-E-0001');
// addAlert('FM-E-0002');
// addAlert('CR-R-0000');

