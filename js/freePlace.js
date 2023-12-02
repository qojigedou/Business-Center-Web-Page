import ScrollTo from './scrollTo.js'

class Slider {
  #slideIndex = 0;
  #slides = null;
  #cardElements = null;
  #cardContainer = null;


  constructor() {
      this.#slides = document.getElementsByClassName("mySlides");
      this.#cardElements = document.querySelectorAll('.card');
      this.#cardContainer = document.querySelector('.card-container');

      this.showSlides();
      this.setupCardClickHandlers();

  }

  showSlides() {
      for (let i = 0; i < this.#slides.length; i++) {
          this.#slides[i].style.display = "none";
      }

      this.#slideIndex++;
      if (this.#slideIndex > this.#slides.length) {
          this.#slideIndex = 1;
      }

      this.#slides[this.#slideIndex - 1].style.display = "block";
      setTimeout(() => this.showSlides(), 2000); // Change image every 2 seconds
  }

  setupCardClickHandlers() {
      this.#cardElements.forEach((cardElement, index) => {
          cardElement.addEventListener('click', () => {
              const scrollLeft = index * this.#cardElements[0].offsetWidth;
              this.#cardContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
          });
      });
  }
}

const slider = new Slider();
const scroll = new ScrollTo("arrow-down-navigation", "slideshow-container");