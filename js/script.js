
const menuButton = document.querySelector('.sp-header-btn-link');
const spMenu = document.querySelector('.sp-menu');
const headerBtn = document.querySelector('.sp-header-btn');

menuButton.addEventListener('click', function() {
    spMenu.classList.toggle('is-open');
    headerBtn.classList.toggle('is-open');
});