import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const openMenuBtn = document.getElementById("open-burger");
const closeMenuBtn = document.getElementById("close-burger");
const navLinks = document.getElementById("nav-links");

openMenuBtn.addEventListener("click", () => {
  navLinks.classList.add("show");
});

closeMenuBtn.addEventListener("click", () => {
  navLinks.classList.remove("show");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  autoplay: true,
});

var swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
