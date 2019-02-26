//select DOM item
const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const manuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-items');

// status of menu - false = close
let showMenu = false;
menuBtn.addEventListener('click', tuggleMenu);

function tuggleMenu() {
    // if the show menu is open
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        manuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach((item) =>
            item.classList.add('show'));
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        manuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach((item) =>
            item.classList.remove('show'));
        showMenu = false;
    }
}
