let swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            mousewheel: true,
            on: {
                slideChange: function () {
         
                    let nextButton = document.querySelector('.swiper-button-next');
                    let prevButton = document.querySelector('.swiper-button-prev');
                    nextButton.classList.toggle('swiper-button-disabled', !swiper.isEnd);
                    prevButton.classList.toggle('swiper-button-disabled', !swiper.isBeginning);
                },
                init: function () {
                    
                    let nextButton = document.querySelector('.swiper-button-next');
                    let prevButton = document.querySelector('.swiper-button-prev');
                    nextButton.classList.toggle('swiper-button-disabled', !swiper.isEnd);
                    prevButton.classList.toggle('swiper-button-disabled', !swiper.isBeginning);
                }
            }
        });


