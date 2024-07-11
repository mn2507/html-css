document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    const updateCarousel = () => {
        carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: {
            display: [
                "close",
            ],
        },
        loop: true,
        transitionEffect: "slide",
        protect: true,
        afterClose: function(instance, slide) {
            $('body').focus();
        }
    });

    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
    });
});
