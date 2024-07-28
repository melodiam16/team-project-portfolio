document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.footer-form');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('[data-menu-close]');

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

        closeModalBtn.addEventListener('click', function () {
          modalOverlay.classList.remove('is-open');
        });
      })
      .catch(error => {
        window.alert(error.message);
      });
  });
});
