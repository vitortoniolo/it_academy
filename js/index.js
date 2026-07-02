/* carrossel do banner (biblioteca Swiper) */

$(function () {
  if (window.Swiper) {
    new Swiper(".carrossel", {
      loop: true,
      speed: 650,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: ".carrossel .swiper-pagination", clickable: true },
      grabCursor: true
    });
  }
});
