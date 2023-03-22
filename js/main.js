// Galerry slider start
const sliderImages = document.querySelectorAll('.gallery_slider_img');
const sliderLine = document.querySelector('.gallery_slider_line');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.gallery_slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();


function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
}


function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;

    rollSlider();
}


function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}


setInterval(() => {
    nextSlide()
}, 3000);
// Galerry slider end