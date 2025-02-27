let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slider .slide').length;
const intervalTime = 3000; // Change the interval time as needed

document.querySelectorAll('.nav-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent any default behavior
    currentSlide = parseInt(event.currentTarget.getAttribute('data-slide'), 10);
    updateSlide();
  });
});

function updateSlide() {
  const slider = document.querySelector('.slider');
  const slide = document.querySelector(`.slide-${currentSlide}`); // Use class selector

  if (slide) {
    const slidePosition = slide.offsetLeft; // Get the horizontal position of the slide
    slider.scrollTo({ left: slidePosition, behavior: 'smooth' }); // Scroll to the slide
  }
}

function autoSlide() {
  currentSlide = (currentSlide % totalSlides) + 1; // Loop back to the first slide
  updateSlide();
}

// Start auto-sliding
let slideInterval = setInterval(autoSlide, intervalTime);

// Optional: Pause auto-slide on hover
const sliderContainer = document.querySelector('.slider');
sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
sliderContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(autoSlide, intervalTime);
});

// Export necessary functions and variables
export { updateSlide, autoSlide, slideInterval, intervalTime };
