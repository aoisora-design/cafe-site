
const menuButton = document.querySelector('.sp-header-btn-link');
const spMenu = document.querySelector('.sp-menu');
const headerBtn = document.querySelector('.sp-header-btn');

function setMenuOpen(isOpen) {
    // setMenuOpenという関数を作る。
    // isOpenにはtrue（開く）かfalse（閉じる）が入る。
    // メニューを閉じる前に、フォーカスがメニュー内にあればボタンへ戻す。
    // 非表示になるメニュー内にフォーカスが残るのを防ぐため。
    if (!isOpen && spMenu.contains(document.activeElement)) {
        // メニューを閉じる場合で、かつ、
        // 現在フォーカスが当たっている要素がスマホメニュー内にあれば、
        menuButton.focus({ preventScroll: true });
        // 画面を自動スクロールさせずに、
        // ハンバーガーボタンへフォーカスを戻す。
    }

    spMenu.inert = !isOpen;
    // メニューを開くときは、メニュー内を操作できるようにする。
    // メニューを閉じるときは、操作できないようにする。
    spMenu.classList.toggle('is-open', isOpen);
    // メニューを開くときは、spMenuにis-openクラスを付ける。
    // 閉じるときは、is-openクラスを外す。
    headerBtn.classList.toggle('is-open', isOpen);
    // メニューを開くときは、headerBtnにis-openクラスを付ける（×印）。
    // 閉じるときは、is-openクラスを外す（三本線）。
    menuButton.setAttribute('aria-expanded', String(isOpen));
    // ボタンのaria-expanded属性を書き換える。
    // 開くときは"true"、閉じるときは"false"にする。
    // String()はtrue/falseを文字列に変換する。
    menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    // メニューを開くときは、ボタンの説明を「メニューを閉じる」にする。
    // メニューを閉じるときは、ボタンの説明を「メニューを開く」にする。
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
