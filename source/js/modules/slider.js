import Swiper from '../vendor/swiper';

export const initProgramsSwiper = () => {
  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.programs__slider', {
    loop: false,

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 30,
        dragSize: 324,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 32,
        dragSize: 392,
      },
    },

    navigation: {
      nextEl: '.programs__swiper-button--next',
      prevEl: '.programs__swiper-button--prev',
    },

    scrollbar: {
      el: '.programs__scrollbar',
    },
  });
  swiper.init();
};

export const initNewsSwiper = () => {
  const swiper = new Swiper('.news__slider', {
    loop: false,

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },

    navigation: {
      nextEl: '.news__swiper-button--next',
      prevEl: '.news__swiper-button--prev',
    },

    pagination: {
      el: '.news__swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<button class="news__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`;
      },
    },
  });
  swiper.init();
};

export const initReviewsSwiper = () => {
  const swiper = new Swiper('.reviews__slider', {
    loop: false,

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },

    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
    },

    scrollbar: {
      el: '.reviews__scrollbar',
    },
  });
  swiper.init();
};
