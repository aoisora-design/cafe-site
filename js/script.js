
const menuButton = document.querySelector('.sp-header-btn-link');
const spMenu = document.querySelector('.sp-menu');

menuButton.addEventListener('click', function() {
    spMenu.classList.toggle('is-open');
});
