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
});
// створив новий екземпляр swiper цієї біліотеки-класу

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// експорт моїх екземплярів бібліотек до кореневої папки main.js
export { accordion };
export { swiper };
