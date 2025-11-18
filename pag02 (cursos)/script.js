const carrossel = document.querySelector(".carrossel-inner");
const cards = document.querySelectorAll(".card");

let index = 0;
let tamanhoCard = cards[0].offsetWidth + 25; // card + gap

document.querySelector(".seta.esquerda").addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    atualizar();
});

document.querySelector(".seta.direita").addEventListener("click", () => {
    index = Math.min(index + 1, cards.length - 1);
    atualizar();
});

function atualizar() {
    carrossel.style.transform = `translateX(-${index * tamanhoCard}px)`;
}

window.addEventListener("resize", () => {
    tamanhoCard = cards[0].offsetWidth + 25;
    atualizar();
});
