function toggleMenu(){
    var menu = document.getElementById('menu');
    menu.style.display = 'flex';
    var navLinks = document.getElementById('nav-items');
    navLinks.classList.toggle('navbar-nav-active');
}
