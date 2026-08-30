function botaoClicado() {
console.log("fui clicado");
let texto = botao.querySelector("span");

if (curtiu === false) {
texto.textContent++;
curtiu = true;
} else {
texto.textContent--;
curtiu = false;
}
}