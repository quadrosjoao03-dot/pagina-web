const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');

let likeCount = 0;
let dislikeCount = 0;
let selectedVote = null;

function renderVotes() {
  likeBtn.textContent = `👍 Like (${likeCount})`;
  dislikeBtn.textContent = `👎 Dislike (${dislikeCount})`;

  likeBtn.classList.toggle('active', selectedVote === 'like');
  dislikeBtn.classList.toggle('active', selectedVote === 'dislike');
}

likeBtn.addEventListener('click', () => {
  if (selectedVote === 'like') {
    likeCount--;
    selectedVote = null;
  } else {
    if (selectedVote === 'dislike') {
      dislikeCount--;
    }

    likeCount++;
    selectedVote = 'like';
  }

  renderVotes();
});

dislikeBtn.addEventListener('click', () => {
  if (selectedVote === 'dislike') {
    dislikeCount--;
    selectedVote = null;
  } else {
    if (selectedVote === 'like') {
      likeCount--;
    }

    dislikeCount++;
    selectedVote = 'dislike';
  }

  renderVotes();
});

renderVotes();
