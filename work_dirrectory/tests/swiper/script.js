const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 15,
  breakpoints: {
    10: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 15
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
