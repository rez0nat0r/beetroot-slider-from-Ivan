'use strict';

function slidesPlugin(activeSlide) {
    let slides = document.querySelectorAll('.slide');

    activeSlide = Math.floor(Math.random() * ((slides.length) - 0) + 0);
    slides[activeSlide].classList.add('active');

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        })
    })

    let clearActiveClasses = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

slidesPlugin();

