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

  document
    .querySelectorAll('.header-menu-link, .header-order-btn')
    .forEach(anchor => {
      anchor.addEventListener('click', function () {
        navMobile.classList.remove('active');
      });
    });

  navMenu.addEventListener('click', function () {
    const menu = this.closest('.header-menu-wrap');

    if (menu) {
      menu.classList.toggle('active');
    }
  });
});
