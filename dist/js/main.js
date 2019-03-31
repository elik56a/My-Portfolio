//select DOM item
// const menuBtn = document.querySelector('.btn-menu');
// const menu = document.querySelector('.menu');
// const menuBranding = document.querySelector('.menu-branding');
// const manuNav = document.querySelector('.menu-nav');
// const navItems = document.querySelectorAll('.nav-items');

// // status of menu - false = close
// let showMenu = false;
// menuBtn.addEventListener('click', tuggleMenu);

// function tuggleMenu() {
//     // if the show menu is open
//     if (!showMenu) {
//         menuBtn.classList.add('close');
//         menu.classList.add('show');
//         manuNav.classList.add('show');
//         menuBranding.classList.add('show');
//         navItems.forEach((item) =>
//             item.classList.add('show'));
//         showMenu = true;

//     } else {
//         menuBtn.classList.remove('close');
//         menu.classList.remove('show');
//         manuNav.classList.remove('show');
//         menuBranding.classList.remove('show');
//         navItems.forEach((item) =>
//             item.classList.remove('show'));
//         showMenu = false;
//     }
// }
// const clicko = document.getElementById('abus').accessKeyLabel('click', function (e) {
//     console.log(e);
// })


const scroll = new SmoothScroll('.navbar, .colored a[href*="#"]', {
    speed: 1000
});
window.sr = ScrollReveal();

// Custom Settings
sr.reveal('#home', { origin: 'right', duration: 2500 });
sr.reveal('#about', { origin: 'right', duration: 2500 });
sr.reveal('#work', { origin: 'right', duration: 2500 });
sr.reveal('#contact', { origin: 'right', duration: 2500 });
sr.reveal('.skills', { origin: 'right', duration: 2500 });

// functions for slide menu, open and close, at small sizes only
function openSlideMenu() {
    document.getElementById('side-nav').style.width = '250px';
    document.getElementById('bg-img').style.marginLeft = '250px';
    document.getElementsByClassName('open-bar')[0].style.display = 'none'
}
function closeSlideMenu() {

    document.getElementById('side-nav').style.width = '0';
    document.getElementById('bg-img').style.marginLeft = '0';
    document.getElementsByClassName('open-bar')[0].style.display = 'block'
}
console.log(screen.width)
// fixed navbar change color on scroll
window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (screen.width >= 800) {
        if (this.scrollY <= 10) {
            nav.classList.remove('colored');
            nav.classList.add('navbar');
        }
        else {
            nav.classList.remove('navbar');
            nav.classList.add('colored');
        }
    } else {
        console.log('smart')
    }
};