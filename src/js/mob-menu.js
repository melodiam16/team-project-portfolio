document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.hero-btn-mob');
    const closeMenuBtn = document.querySelector('.header-close-btn');
    const navMobile = document.querySelector('.mob-nav');
    const navMenu = document.querySelector('.header-menu-wrap span');


    menuBtn.addEventListener('click', () => {
        navMobile.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });

    document.querySelectorAll('.header-menu-link').forEach(anchor => {
        anchor.addEventListener('click', function() {
            navMobile.classList.remove('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    document.querySelectorAll('.header-order-btn').forEach(anchor => {
        anchor.addEventListener('click', function() {
            navMobile.classList.remove('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    navMenu.addEventListener('click', function() {
        const menu = this.closest('.header-menu-wrap');

        if ( menu ) {
            menu.classList.toggle('active');
        }
    });
});