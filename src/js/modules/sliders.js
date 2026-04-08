import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function initSliders() {
  if (document.querySelector(".testimonials__swiper")) {
    new Swiper(".testimonials__swiper", {
      modules: [Navigation, Pagination],
      watchSlidesProgress: true,
      centeredSlides: true,
      navigation: {
        prevEl: ".testimonials__swiper-btn-prev",
        nextEl: ".testimonials__swiper-btn-next",
      },
      pagination: {
        el: ".testimonials__swiper-pagination",
        clickable: true,
      },
    });
  }

  if (document.querySelector(".cases-studies-section__swiper")) {
    new Swiper(".cases-studies-section__swiper", {
      modules: [Navigation, Pagination],
      watchSlidesProgress: true,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 },
        700: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2 },
        1220: { slidesPerView: 3, spaceBetween: 30, slidesPerGroup: 3 },
      },
      navigation: {
        prevEl: ".cases-studies-section__swiper-btn-prev",
        nextEl: ".cases-studies-section__swiper-btn-next",
      },
      pagination: {
        el: ".cases-studies-section__swiper-pagination",
        clickable: true,
      },
    });
  }
}
