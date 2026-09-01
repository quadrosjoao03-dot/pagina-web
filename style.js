const votos = { like: 0, dislike: 0 };
let votoAtual = null;

// Seleciona os contadores visíveis na página
const like = document.querySelector('.like-btn .contador');
const dislike = document.querySelector('.dislike-btn .contador');

const atualizar = () => {
  like.textContent = votos.like;
  dislike.textContent = votos.dislike;
};

document.querySelectorAll('.btn-voto').forEach((botao) => {
  botao.addEventListener('click', () => {
    const tipo = botao.dataset.voto;

    // Se o mesmo botão for clicado de novo, remove o voto atual
    if (votoAtual === tipo) {
      votos[tipo]--;
      votoAtual = null;
    } else {
      // Se já houver um voto anterior, ele é removido antes de contar o novo
      if (votoAtual) votos[votoAtual]--;
      votos[tipo]++;
      votoAtual = tipo;
    }

    atualizar();
  });
});

atualizar();
