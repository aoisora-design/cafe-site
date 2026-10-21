
const menuButton = document.querySelector('.sp-header-btn-link');
const spMenu = document.querySelector('.sp-menu');
const headerBtn = document.querySelector('.sp-header-btn');

function setMenuOpen(isOpen) {
    // Move focus before making the menu inert.
    if (!isOpen && spMenu.contains(document.activeElement)) {
        menuButton.focus({ preventScroll: true });
    }

    spMenu.inert = !isOpen;
    spMenu.classList.toggle('is-open', isOpen);
    headerBtn.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
}

menuButton.addEventListener('click', function() {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

spMenu.addEventListener('click', function(event) {
    if (event.target.closest('a[href]')) {
        setMenuOpen(false);
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuButton.focus({ preventScroll: true });
    }
});

// Reset the mobile menu when switching to the desktop layout.
window.matchMedia('(max-width: 900px)').addEventListener('change', function(event) {
    if (!event.matches) {
        setMenuOpen(false);
    }
});
