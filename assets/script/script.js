// Animação de entrada suave dos elementos
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com classe fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Função para ativar a animação
    function activateFadeIn() {
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
    }
    
    // Pequeno delay para garantir que a página carregou completamente
    setTimeout(activateFadeIn, 100);
});

// Animação adicional para elementos que entram no viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observa elementos com fade-in que ainda não estão visíveis
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}); 