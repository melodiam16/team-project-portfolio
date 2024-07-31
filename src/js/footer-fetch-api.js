document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.footer-form');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('[data-menu-close]');
  const backdrop = document.querySelector('.backdrop');

  function closeModal() {
    modalOverlay.classList.remove('is-open');
    closeModalBtn.removeEventListener('click', closeHandler);
    document.removeEventListener('keydown', keyHandler);
    modalOverlay.removeEventListener('click', overlayClickHandler);
  }

  function closeHandler(event) {
    closeModal();
  }

  function keyHandler(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  function overlayClickHandler(event) {
    if (event.target === modalOverlay || event.target === backdrop) {
      closeModal();
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = event.target.email.value;
    const comment = event.target.comment.value;

    fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, comment }),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            throw new Error('Please try again.');
          });
        }
        return response.json();
      })
      .then(data => {
        form.reset();

        modalOverlay.classList.add('is-open');
        closeModalBtn.addEventListener('click', closeHandler);
        document.addEventListener('keydown', keyHandler);
        modalOverlay.addEventListener('click', overlayClickHandler);
      })
      .catch(error => {
        window.alert(error.message);
      });
  });

  closeModalBtn.addEventListener('click', closeHandler);
});
