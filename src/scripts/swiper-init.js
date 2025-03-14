import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});