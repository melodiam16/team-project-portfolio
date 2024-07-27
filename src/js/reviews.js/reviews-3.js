swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.right-btn',
      prevEl: '.left-btn',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1000,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    on: {
      slideChange: updateButtonState,
      init: updateButtonState,
    },
  });

  leftBtn.addEventListener('click', () => {
    if (!leftBtn.classList.contains('swiper-button-disabled')) {
      swiper.slidePrev();
    }
  });

  rightBtn.addEventListener('click', () => {
    if (!rightBtn.classList.contains('swiper-button-disabled')) {
      swiper.slideNext();
    }
  })

.catch(error => {
  alert('Error loading reviews');
  notFound.style.display = 'block';
});
