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
