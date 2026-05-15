const nextBtn = document.querySelector('#nextStageBtn');
const prevBtn = document.querySelector('#prevStageBtn');
const firstStage = document.querySelector('#add_car_first_stage');
const secondStage = document.querySelector('#add_car_second_stage');

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    firstStage.style.display = 'none';
    secondStage.style.display = 'block';
});

prevBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    secondStage.style.display = 'none';
    firstStage.style.display = 'block';
});