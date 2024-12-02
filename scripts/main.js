var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});