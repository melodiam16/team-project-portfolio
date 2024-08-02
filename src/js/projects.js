import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


export const projectsSwiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: '.right-btn-next',
    prevEl: '.left-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    4400: {
      slidesPerView: 3,
    },
  },
});