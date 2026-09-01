const votos = { like: 0, dislike: 0 };
let votoAtual = null;

// Seleciona os elementos de contador dentro dos botões
const like = document.querySelector('.like-btn .contador');
const dislike = document.querySelector('.dislike-btn .contador');

// Atualiza os números exibidos na tela
const atualizar = () => {
  like.textContent = votos.like;
  dislike.textContent = votos.dislike;
};

// Para cada botão, escuta o clique e decide se vai votar ou cancelar
document.querySelectorAll('.btn-voto').forEach((botao) => {
  botao.addEventListener('click', () => {
    const tipo = botao.dataset.voto;

    // Se clicar no mesmo botão de novo, cancela o voto atual
    if (votoAtual === tipo) {
      votos[tipo]--;
      votoAtual = null;
    } else {
      // Se já havia outro voto, remove o anterior antes de contar o novo
      if (votoAtual) votos[votoAtual]--;
      votos[tipo]++;
      votoAtual = tipo;
    }

    atualizar();
  });
});

atualizar();