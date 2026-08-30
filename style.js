const likeBtn = document.querySelector('.like-btn');
const dislikeBtn = document.querySelector('.dislike-btn');

if (likeBtn && dislikeBtn) {
  const likeCounter = likeBtn.querySelector('.contador');
  const dislikeCounter = dislikeBtn.querySelector('.contador');

  let likeTotal = 0;
  let dislikeTotal = 0;
  let votoAtual = null;

  function atualizar() {
    likeCounter.textContent = likeTotal;
    dislikeCounter.textContent = dislikeTotal;
  }

  likeBtn.addEventListener('click', () => {
    if (votoAtual === 'like') {
      likeTotal--;
      votoAtual = null;
    } else {
      if (votoAtual === 'dislike') dislikeTotal--;
      likeTotal++;
      votoAtual = 'like';
    }
    atualizar();
  });

  dislikeBtn.addEventListener('click', () => {
    if (votoAtual === 'dislike') {
      dislikeTotal--;
      votoAtual = null;
    } else {
      if (votoAtual === 'like') likeTotal--;
      dislikeTotal++;
      votoAtual = 'dislike';
    }
    atualizar();
  });
}