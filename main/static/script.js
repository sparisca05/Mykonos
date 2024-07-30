function toggleMenu(){
    var navLinks = document.getElementById('nav-items');
    navLinks.classList.toggle('hidden');
}
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    let index = 0;
    const slides = track.children;
    const totalSlides = slides.length;
    const slideWidth = track.getBoundingClientRect().width / 3; // Divide el ancho total por 3

    function nextSlide() {
        index += 1; // Aumenta el índice en 3 para mostrar 3 imágenes
        if (index >= totalSlides - 2) {
            index = 0; // Reinicia el índice si se excede
        }
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, 4000); // Cambia las imágenes cada 3 segundos (3000 ms)
});
