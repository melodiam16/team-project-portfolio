import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const reviewsList = document.getElementById('reviews-list');
  const notFound = document.getElementById('not-found');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');

  let swiper;

  function updateButtonState() {
    if (!swiper) return;

    if (swiper.isBeginning) {
      leftBtn.classList.add('swiper-button-disabled');
      leftBtn.disabled = true;
    } else {
      leftBtn.classList.remove('swiper-button-disabled');
      leftBtn.disabled = false;
    }

    if (swiper.isEnd) {
      rightBtn.classList.add('swiper-button-disabled');
      rightBtn.disabled = true;
    } else {
      rightBtn.classList.remove('swiper-button-disabled');
      rightBtn.disabled = false;
    }
  }
});