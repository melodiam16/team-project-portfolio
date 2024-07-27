fetch('https://portfolio-js.b.goit.study/api/reviews')
.then(response => response.json())
.then(data => {
  if (!data || data.length === 0) {
    notFound.style.display = 'block';
    return;
  }

  data.forEach(review => {
    const reviewItem = document.createElement('li');
    reviewItem.classList.add('swiper-slide');

    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');

    const avatar = document.createElement('img');
    avatar.src = review.avatar_url;
    avatar.alt = `${review.author}'s avatar`;

    const author = document.createElement('h3');
    author.textContent = review.author;

    const reviewText = document.createElement('p');
    reviewText.classList.add('review-text');
    reviewText.textContent = review.review;

    reviewCard.appendChild(avatar);
    reviewCard.appendChild(author);
    reviewCard.appendChild(reviewText);
    reviewItem.appendChild(reviewCard);
    reviewsList.appendChild(reviewItem);
  });
});