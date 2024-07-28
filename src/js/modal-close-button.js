document.addEventListener('DOMContentLoaded', function () {
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('[data-menu-close]');
  const backdrop = document.querySelector('.backdrop');

  function closeModal() {
    modalOverlay.classList.remove('is-open');
  }

  closeModalBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay || event.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
