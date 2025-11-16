// Elementos do DOM
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselCursos = document.getElementById('carouselCursos');
const carouselDots = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Configuração
const cardWidth = 280;
const gap = 20;
const cardSize = cardWidth + gap;
let currentIndex = 0;

// Função para criar os dots
function createDots() {
    const totalCards = carouselCursos.children.length;
    carouselDots.innerHTML = '';
    
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => scrollToCard(i));
        carouselDots.appendChild(dot);
    }
}

// Função para atualizar dots ativos
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

// Função para rolar até um card específico
function scrollToCard(index) {
    currentIndex = index;
    const scrollPosition = index * cardSize;
    carouselWrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
    updateDots();
}

// Botão anterior
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
    }
});

// Botão próximo
nextBtn.addEventListener('click', () => {
    const totalCards = carouselCursos.children.length;
    if (currentIndex < totalCards - 1) {
        scrollToCard(currentIndex + 1);
    }
});

// Detectar scroll manual
carouselWrapper.addEventListener('scroll', () => {
    const scrollLeft = carouselWrapper.scrollLeft;
    const closestIndex = Math.round(scrollLeft / cardSize);
    currentIndex = closestIndex;
    updateDots();
});

// Inicializar
createDots();
