// Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const maxSlides = slides.length;

const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

function goToSlide(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}

btnRight.addEventListener("click", function () {

    if (currentSlide === maxSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    goToSlide(currentSlide);
})

btnLeft.addEventListener("click", function () {
    if (currentSlide === 0) {
        currentSlide = maxSlides - 1;
    } else {
        currentSlide--;
    }

    goToSlide(currentSlide);
})

// Transform translate all slides
goToSlide(0);
