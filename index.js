//Image Slider

const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
    console.log(intervalId);
  }
}

function showSlide() {}

function prevSlide() {}

function nextSlide() {}
