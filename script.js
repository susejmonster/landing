/* Inspired from Sebastian Petravic design -> https://dribbble.com/shots/3700168-Scotch-VHS

https://x.com/pavel_filchi

*/

let currentSlide = 0;
const slides = document.querySelectorAll('.scotch-container');
const totalSlides = slides.length;

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

function showSlide(index) {
    
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'grid' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}