document.addEventListener('DOMContentLoaded', () => {

    // Initialize Swiper
    const swiper = new Swiper('.mySwiper', {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 800,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

});
