import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

// створив новий екземпляр accordion цієї біліотеки-класу
const accordion = new Accordion('.accordion-container-first', {

    duration: 600,
    showMultiple: true,
  }
  );
  // створив новий екземпляр swiper цієї біліотеки-класу
  const swipers = document.querySelector('.swiper').swiper;
  // Now you can use all slider methods like
  //swipers.slideNext();

  // const swiper = new Swiper('.swiper', {
  //   modules: [Navigation],
  //    speed: 500,
  //    navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  export {accordion};
  export {swiper};

