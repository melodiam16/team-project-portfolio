import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-accordion', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

new Swiper('.about-swiper', {
  slidesPerView: 2,
  spaceBetween: 1,
  speed: 500,
  allowSlidePrev: false,
  loop: true,
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.button-next',
  },
  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },
  mousewheel: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      width: 600,
      loop: true,
    },
    1440: {
      slidesPerView: 6,
      width: 1200,
      loop: true,
    },
  },


});

const slides = document.querySelectorAll('.about-swiper-slide');
let currentIndex = 0;

function updateAccentColor() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('accent-color', index === currentIndex);
  });
}

document.querySelector('.button-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateAccentColor();
});

updateAccentColor();

