const views =  document.querySelector('.views');
const price = document.querySelector('.price');
const slider = document.querySelector('.slider');
const toggle = document.querySelector('.toggle');

let pageViews = ['10K', '50K', '100K', '500K', '1M'];
let pricePerMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener('input', () => {
    updateValue();
    views.innerHTML = pageViews[slider.value];

    let value = slider.value * 25;

    slider.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`
});

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');

    if(isYearly == false){
        isYearly = true
    } else {
        isYearly = false;
    }
    updateValue();
});

function updateValue(){
    if(isYearly) {
        price.innerHTML = pricePerMonth[slider.value] * .75
    } else {
        price.innerHTML = pricePerMonth[slider.value]
    }
}
