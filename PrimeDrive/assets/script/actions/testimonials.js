import { TestimonialsGroups } from "../components/blocks/About_page/TestimonialsSection/TestimonialsGroupes.js";

const controlBtns = document.querySelectorAll(".testimonials_control_btn");
const tRow = document.querySelector('#testimonialsRow');

let currentTGroupIndex = 0;

controlBtns.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        controlBtns.forEach((e, eIndex)=>{
            // console.log(eIndex);
            // console.log(index);
            if(eIndex == index){
                console.log(index);
                e.setAttribute('class', 'testimonials_control_btn testimonials_active');
                tRow.querySelector('.testimonials_card_group').setAttribute('class', 'testimonials_card_group testimonials_card_group_fade_out');
                setTimeout(()=>{
                    tRow.querySelector('.testimonials_card_group').setAttribute('class', 'testimonials_card_group');
                    tRow.innerHTML = TestimonialsGroups[index];
                }, 200);
                
            } else {
                e.setAttribute('class', 'testimonials_control_btn');
            }
        });
    });
});