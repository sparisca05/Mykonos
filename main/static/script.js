function toggleMenu(){
    var navLinks = document.getElementById('nav-items');
    navLinks.classList.toggle('hidden');
}
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    let index = 0;
    const slides = track.children;
    const totalSlides = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width;

    function nextSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos (3000 ms)
});
