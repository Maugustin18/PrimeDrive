// window.addEventListener('load', ()=>{
//     document.querySelector('#loader').style.display = 'none';
// });

// setTimeout(()=>{
//     document.querySelector('#loader').style.display = 'none';
// }, 1000 * 2)

window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('.body_container').style.display = 'block';
    }, 1000 * .5);
}