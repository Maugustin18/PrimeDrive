const modelInput = document.querySelector('#modelSelect');

modelInput.addEventListener('change', (event) => {
    const selectedModel = event.target.value;
    if(selectedModel === '-1') {
        document.querySelector('#hidden_brand_opts').style.display = 'block';
    } else {
        document.querySelector('#hidden_brand_opts').style.display = 'none';
    }
});