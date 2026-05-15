import { brandsArrData, carsArrData, transArrData } from "../app/our-cars-app.js";
import { CreateCarCard } from "../components/elements/car/CarCard.js";

const main = document.querySelector('main');

const range = 10;



// LOAD CONTENT

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams.get('brands'));

const selectedURLBrand = urlParams.get('brands');
const selectedURLTrans = urlParams.get('transmission');
const selectedURLAirCond = urlParams.get('airConditioning');
const selectedURLgroupNr = urlParams.get('groupNr');

function loadSelectedCars(){
    let groupNr = 0;
    const selectedBrand = selectedURLBrand;
    const selectedTrans = selectedURLTrans;
    const selectedAirCond = selectedURLAirCond;

    let List = ``;
    const selectedCars = [];
    
    carsArrData.forEach((car)=>{
        // if(car.airCond == selectedAirCond) console.info("Got it");

        if((!selectedBrand) || (selectedBrand == null)){
            if((!selectedTrans) || (selectedTrans == null)){
                if((parseInt(selectedAirCond) == -1) || !selectedAirCond){
                    selectedCars.push(car);
                } else if(car.airCond.toString() == selectedAirCond){
                    selectedCars.push(car);
                }
            } else if(car.transmission == selectedTrans) {
                if((parseInt(selectedAirCond) == -1) || !selectedAirCond){
                    selectedCars.push(car);
                } else if(car.airCond.toString() == selectedAirCond){
                    selectedCars.push(car);
                }
            }
            
        } else if(car.brand == selectedBrand){
            if((!selectedTrans) || (selectedTrans == null)){
                if((parseInt(selectedAirCond) == -1) || !selectedAirCond){
                    selectedCars.push(car);
                } else if(car.airCond.toString() == selectedAirCond){
                    selectedCars.push(car);
                }
            } else if(car.transmission == selectedTrans) {
                if((parseInt(selectedAirCond) == -1) || !selectedAirCond){
                    selectedCars.push(car);
                } else if(car.airCond.toString() == selectedAirCond){
                    selectedCars.push(car);
                }
            }
        }
    });

    function updateList(){
        List = ``;
        const limitedCars = selectedCars.slice(groupNr * range, (groupNr + 1) * range);
        limitedCars.forEach((car)=>{
                List += CreateCarCard(car);
            }
        );
        
        if(List.length == 0){
            document.querySelector('.cars_content_block').innerHTML = `<p class="smaller_section_title" style="text-align: center;">Cars not found</p>`;
            document.querySelector("#prev").style.display = 'none';
            document.querySelector("#next").style.display = 'none';
        } else {
            document.querySelector('.cars_content_block').innerHTML = 
                `<div class="cars_content">
                    ${List}
                </div>`;
        }
    }

    function updateNr(){
        const nrs = document.querySelectorAll('.nr_btn');
        nrs.forEach(n=>{
            n.removeAttribute('id');
            if(n.innerHTML - 1 == groupNr){
                n.setAttribute('id', 'active');
            };
        });

        groupNr > 0 ?
            (document.querySelector("#prev").style.display = 'block',
            console.log('fsdfsdfsdfsdf'))
            :
            document.querySelector("#prev").style.display = 'none';

        groupNr < (Math.ceil(selectedCars.length / range))-1 ? 
            document.querySelector("#next").style.display = 'block' 
            : 
            document.querySelector("#next").style.display = 'none';
    }

    const groupNrs = document.querySelector("#groupNrs");
    for(let i = 0; i < Math.ceil(selectedCars.length / range); i++){
        groupNrs.innerHTML += `<a href="#top"><button class="round_btn orange_btn nr_btn">${i+1}</button></a>`;
    }

    const prevGroup = document.querySelector("#prev");
    const nextGroup = document.querySelector("#next");

    console.log(groupNr)

    

    prevGroup.addEventListener('click', e=>{
        groupNr > 0 ? groupNr-- : null;
        console.log(groupNr);
        updateList();
        updateNr();
    })

    nextGroup.addEventListener('click', e=>{
        groupNr < (Math.ceil(selectedCars.length / range))-1 ? groupNr++ : null;
        console.log(groupNr);
        updateList();
        updateNr();
    });

    const nrs = document.querySelectorAll('.nr_btn');
    nrs.forEach(n=>{
        n.addEventListener('click', ()=>{
            console.log(n.innerHTML);
            groupNr = n.innerHTML - 1;
            updateList();
            updateNr();
        });
    });

    updateList();
    updateNr();
}

loadSelectedCars();



// SORT AND FILTER FUNCTION
const brand = document.querySelector('#brand');
const trans = document.querySelector('#trans');
const airCond = document.querySelector('#airCond');
const sort = document.querySelector('#sort');
brand.addEventListener('change', e=>{
    apply();
});

trans.addEventListener('change', e=>{
    apply();
});

airCond.addEventListener('change', e=>{
    apply();
});

sort.addEventListener('change', e=>{
    apply();
});

function apply(){
    let groupNr = 0;
    const brandInput = document.querySelector('#brand');
    const transInput = document.querySelector('#trans');
    const airCondInput = document.querySelector('#airCond');
    const sortInput = document.querySelector('#sort');

    // console.log(brandInput.value);
    const selectedBrand = brandsArrData[(parseInt(brandInput.value) - 1)];
    const selectedTrans = transArrData[(parseInt(transInput.value) - 1)];

    let List = ``;
    const selectedCars = [];
    
    carsArrData.forEach((car)=>{
        if(!selectedBrand){
            if(!selectedTrans){
                if(parseInt(airCondInput.value) == -1){
                    selectedCars.push(car);
                } else if(car.airCond == airCondInput.value){
                    selectedCars.push(car);
                }
            } else if(car.transmission == selectedTrans) {
                if(parseInt(airCondInput.value) == -1){
                    selectedCars.push(car);
                } else if(car.airCond == airCondInput.value){
                    selectedCars.push(car);
                }
            }
        } else if(car.brand == selectedBrand.name){
            if(!selectedTrans){
                if(parseInt(airCondInput.value) == -1){
                    selectedCars.push(car);
                } else if(car.airCond == airCondInput.value){
                    selectedCars.push(car);
                }
            } else if(car.transmission == selectedTrans) {
                if(parseInt(airCondInput.value) == -1){
                    selectedCars.push(car);
                } else if(car.airCond == airCondInput.value){
                    selectedCars.push(car);
                }
            }
        }
        // console.log(parseInt(airCondInput.value) == -1);
    });

    switch(parseInt(sortInput.value)){
        case 1: 
            console.log('case nr 1');
            selectedCars.sort(
                (p1, p2) => (p1.brand > p2.brand) ? 1 : (p1.brand < p2.brand) ? -1 : 0);
            break;
        case 2: 
            console.log('case nr 2');
            selectedCars.sort(
                (p1, p2) => (p1.brand < p2.brand) ? 1 : (p1.brand > p2.brand) ? -1 : 0);
            break;

        case 3: 
            console.log('case nr 3');
            selectedCars.sort(
                (p1, p2) => (p1.rating > p2.rating) ? 1 : (p1.rating < p2.rating) ? -1 : 0);
            break;
        case 4: 
            console.log('case nr 4');
            selectedCars.sort(
                (p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0);
            break;

        case 5: 
            console.log('case nr 5');
            selectedCars.sort(
                (p1, p2) => (p1.taxPerKm > p2.taxPerKm) ? 1 : (p1.taxPerKm < p2.taxPerKm) ? -1 : 0);
            break;
        case 6: 
            console.log('case nr 6');
            selectedCars.sort(
                (p1, p2) => (p1.taxPerKm < p2.taxPerKm) ? 1 : (p1.taxPerKm > p2.taxPerKm) ? -1 : 0);
            break;
    }

    function updateList(){
        List = ``;
        const limitedCars = selectedCars.slice(groupNr * range, (groupNr + 1) * range);
        limitedCars.forEach((car)=>{
                List += CreateCarCard(car);
            }
        );
        
        if(List.length == 0){
            document.querySelector('.cars_content_block').innerHTML = `<p class="smaller_section_title" style="text-align: center;">Cars not found</p>`;
        } else {
            document.querySelector('.cars_content_block').innerHTML = 
                `<div class="cars_content">
                    ${List}
                </div>`;
        }
    }

    function updateNr(){
        const nrs = document.querySelectorAll('.nr_btn');
        nrs.forEach(n=>{
            n.removeAttribute('id');
            if(n.innerHTML - 1 == groupNr){
                n.setAttribute('id', 'active');
            };
        });
        groupNr > 0 ?
            (document.querySelector("#prev").style.display = 'block',
            console.log('fsdfsdfsdfsdf'))
            :
            document.querySelector("#prev").style.display = 'none';

        groupNr < (Math.ceil(selectedCars.length / range))-1 ? 
            document.querySelector("#next").style.display = 'block' 
            : 
            document.querySelector("#next").style.display = 'none';
    }


    const groupNrs = document.querySelector("#groupNrs");
    groupNrs.innerHTML = ``;
    for(let i = 0; i < Math.ceil(selectedCars.length / range); i++){
        groupNrs.innerHTML += `<a href="#top"><button class="round_btn orange_btn nr_btn">${i+1}</button></a>`;
    }

    const prevGroup = document.querySelector("#prev");
    const nextGroup = document.querySelector("#next");

    

    prevGroup.addEventListener('click', e=>{
        groupNr > 0 ? groupNr-- : null;
        console.log(groupNr);
        updateList();
        updateNr();
    });

    nextGroup.addEventListener('click', e=>{
        groupNr < (Math.ceil(selectedCars.length / range))-1 ? groupNr++ : null;
        console.log(groupNr);
        updateList();
        updateNr();
    });

    const nrs = document.querySelectorAll('.nr_btn');
    nrs.forEach(n=>{
        n.addEventListener('click', ()=>{
            console.log(n.innerHTML);
            groupNr = n.innerHTML - 1;
            updateList();
            updateNr();
        });
    });

    updateList();
    updateNr();
    
    if(List.length == 0){
        document.querySelector('.cars_content_block').innerHTML = `<p class="smaller_section_title" style="text-align: center;">Cars not found</p>`;
        document.querySelector("#prev").style.display = 'none';
        document.querySelector("#next").style.display = 'none';
    } else {
        document.querySelector('.cars_content_block').innerHTML = 
                `<div class="cars_content">
                    ${List}
                </div>`;
    }

}
