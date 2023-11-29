// abrir e fechar botão hamburguer:
const menuButton = document.querySelector('.header-button');
const menu = document.querySelector('.header-menu');

let menuOpen = false;
menuButton.addEventListener('click', () => {
    if (!menuOpen) {
        menuButton.classList.add('open');
        menu.style.display = 'block';
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menu.style.display = 'none';
        menuOpen = false;
    }
});
