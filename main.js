var range = document.querySelector ('input');
var leimage = document.querySelector('.leimage');
var rangetext = document.querySelector ('.slider__text');

function handleSlider () {
    leimage.style.opacity = range.value / 100;
    rangetext.innerText = range.value + '%';
}
range.addEventListener('input', handleSlider);