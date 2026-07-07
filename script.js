// ================================
// DOCE INTERVALO
// Script Principal
// ================================

// Animação do botão
const botao = document.querySelector(".botao");

if (botao) {

    botao.addEventListener("mouseenter", () => {
        botao.style.boxShadow = "0 10px 25px rgba(234,29,44,.35)";
    });

    botao.addEventListener("mouseleave", () => {
        botao.style.boxShadow = "none";
    });

}

// Animação da página
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = ".5s";
        document.body.style.opacity = "1";
    }, 100);

});
