function toggleMenu(){
    var navLinks = document.getElementById('nav-items');
    navLinks.classList.toggle('hidden');
}
function displayInfoApto(idTitle, idInfo){
    var title = document.getElementById(idTitle);
    var info = document.getElementById(idInfo);
    info.style.display = 'flex';
    title.style.display = 'none';
}
function hideInfoApto(idTitle, idInfo){
    var title = document.getElementById(idTitle);
    var info = document.getElementById(idInfo);
    info.style.display = 'none';
    title.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    let index = 0;
    const slides = track.children;
    const totalSlides = slides.length;
    let windowWidth;
    let slideWidth;
    
    function setSlideWidth() {
        windowWidth = track.getBoundingClientRect().width
        if (windowWidth > 768) {
            slideWidth = windowWidth / 3; // Divide el ancho total por 3
        } else {
            slideWidth = windowWidth / 2; // Divide el ancho total por 2
        }
    }
    setSlideWidth();

    function nextSlide() {
        
        index += 1; // Aumenta el índice en 3 para mostrar 3 imágenes
        
        if (windowWidth > 768) {
            if (index >= totalSlides - 2) {
                index = 0; // Reinicia el índice si se excede
            }
        } else {
            if (index >= totalSlides - 1) {
                index = 0; // Reinicia el índice si se excede
            }
        }
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    window.addEventListener('resize', function() {
        setSlideWidth();
        updateCarousel();
    });
    
    setInterval(nextSlide, 4000); // Cambia las imágenes cada 3 segundos (3000 ms)
});
