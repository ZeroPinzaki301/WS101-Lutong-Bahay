const sliderContainer = document.querySelector('.slider');

if (sliderContainer) {
  console.log("Slider initialized on index.html");

  let currentSlide = 1;
  const totalSlides = document.querySelectorAll('.slider .slide').length;
  const intervalTime = 3000;

  document.querySelectorAll('.nav-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); 
      currentSlide = parseInt(event.currentTarget.getAttribute('data-slide'), 10);
      updateSlide();
    });
  });

  function updateSlide() {
    const slide = document.querySelector(`.slide-${currentSlide}`); 

    if (slide) {
      const slidePosition = slide.offsetLeft; 
      sliderContainer.scrollTo({ left: slidePosition, behavior: 'smooth' });
    }
  }

  function autoSlide() {
    currentSlide = (currentSlide % totalSlides) + 1; 
    updateSlide();
  }

  let slideInterval = setInterval(autoSlide, intervalTime);

  sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
  sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, intervalTime);
  });
}

document.querySelector(".send-msg").addEventListener("click", () => {
  document.querySelector(".popup-container").classList.remove("hidden");

  document.querySelector(".contacts-body-container").classList.add("blurred");

});

document.querySelector(".close-popup").addEventListener("click", () => {
  document.querySelector(".popup-container").classList.add("hidden");

  document.querySelector(".contacts-body-container").classList.remove("blurred");
  
});

console.log("Js file is loaded");
