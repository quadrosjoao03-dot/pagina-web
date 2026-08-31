const votos = { like: 0, dislike: 0 };
let votoAtual = null;

const like = document.querySelector('.like-btn .contador');
const dislike = document.querySelector('.dislike-btn .contador');

const atualizar = () => {
  like.textContent = votos.like;
  dislike.textContent = votos.dislike;
};

document.querySelectorAll('.btn-voto').forEach((botao) => {
  botao.addEventListener('click', () => {
    const tipo = botao.dataset.voto;

    if (votoAtual === tipo) {
      votos[tipo]--;
      votoAtual = null;
    } else {
      if (votoAtual) votos[votoAtual]--;
      votos[tipo]++;
      votoAtual = tipo;
    }

    atualizar();
  });
});

atualizar();