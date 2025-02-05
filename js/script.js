let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let headerHeight = header.offsetHeight; // Obtém a altura real do header

    if (prevScrollPos > currentScrollPos) {
        header.classList.remove("hidden");
    } else {
        header.classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;

    // Adiciona classe 'scrolled' quando rola para baixo
    if (currentScrollPos > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".zoomable");

    images.forEach(img => {
        img.addEventListener("click", function () {
            this.classList.add("zoomed");
        });

        img.addEventListener("mouseleave", function () {
            this.classList.remove("zoomed");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links do WhatsApp
    const botoesWhatsApp = document.querySelectorAll(".whatsapp-link");

    botoesWhatsApp.forEach(botao => {
        botao.addEventListener("click", function (event) {
            event.preventDefault(); // Evita o redirecionamento direto

            // Pega o nome do produto (o texto dentro do <h3> mais próximo)
            const produtoNome = botao.closest(".produto").querySelector(".produto-nome").textContent.trim();

            // Pega o número do WhatsApp do atributo data-numero
            const numeroWhatsApp = botao.getAttribute("data-numero");

            // Cria a mensagem personalizada
            const mensagem = encodeURIComponent(`Olá! Quero mais informações sobre o produto: ${produtoNome}.`);

            // Gera o link do WhatsApp com a mensagem personalizada
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

            // Abre o WhatsApp
            window.open(linkWhatsApp, "_blank");
        });
    });
});
