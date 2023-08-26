const swiper2 = new Swiper('.swiper2', {

    direction: 'horizontal',
    loop: false,
    speed: 400,
    slidesPerView: 1.48,
    spaceBetween: 24,
    effect: 'slide',
    centeredSlides: true,
    centeredSlidesBounds: true,

    breakpoints: {
        // when window width is >= 540px
        1440: {
        direction: 'horizontal',
        loop: false,
        speed: 400,
        slidesPerView: 4,
        spaceBetween: 22,
        effect: 'slide',
        },

        1280: {
        direction: 'horizontal',
        loop: false,
        speed: 400,
        slidesPerView: 3.02,
        spaceBetween: 22,
        effect: 'slide',
        },

        540: {
        direction: 'horizontal',
        loop: false,
        speed: 400,
        slidesPerView: 4,
        spaceBetween: 22,
        effect: 'slide',
        },
    },

    navigation: {
      nextEl: '.button-next2',
      prevEl: '.button-prev2',
    },

});