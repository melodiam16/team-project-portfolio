import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const btnNextEl = document.querySelector('.right-btn-next ');
// btnNextEl.style.color = '#FAFAFA';
// btnNextEl.style.position = 'static';
// btnNextEl.style.width = '68px';
// btnNextEl.style.height = '68px';
// btnNextEl.style.margin = '0';
const btnPrevEl = document.querySelector('.left-btn-prev ');
// btnPrevEl.style.position = 'static';
// btnPrevEl.style.width = '68px';
// btnPrevEl.style.height = '68px';
// btnPrevEl.style.color = '#FAFAFA';
// btnPrevEl.style.margin = '0';

function upSwiperSlideDisplay() {
  const swiperSlides = document.querySelectorAll('.swiper-slide');
  if (window.innerWidth > 1440) {
    swiperSlides.forEach(slide => {
      slide.style.display = 'flex';
    });
  } else {
    swiperSlides.forEach(slide => {
      slide.style.display = 'block';
    });
  }
}
upSwiperSlideDisplay();
window.addEventListener('resize', upSwiperSlideDisplay);

export const mySwiper = new Swiper('.swiper', {
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
