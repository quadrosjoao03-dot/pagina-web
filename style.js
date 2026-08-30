const likeBtn = document.querySelector('.like-btn');
const dislikeBtn = document.querySelector('.dislike-btn');

if (likeBtn && dislikeBtn) {
  const likeCounter = likeBtn.querySelector('.contador');
  const dislikeCounter = dislikeBtn.querySelector('.contador');

  let likeTotal = 0;
  let dislikeTotal = 0;

  likeBtn.addEventListener('click', () => {
    likeTotal += 1;
    likeCounter.textContent = likeTotal;
  });

  dislikeBtn.addEventListener('click', () => {
    dislikeTotal += 1;
    dislikeCounter.textContent = dislikeTotal;
  });
}