// Header

genHeaderDropdownTrucks();
// header end

// Overlay 
const ovrl = document.querySelector('#receipt .issues');
const faq = document.querySelector('#receipt');
const close = document.querySelector('#receipt .overlay');

ovrl.addEventListener('click', function () {
    return faq.classList.add('showOverlay');
});

document.addEventListener('keypress', () => {
    return faq.classList.remove('showOverlay');
});

close.addEventListener('click', () => {
    faq.classList.remove('showOverlay');
});

//render

renderAll();