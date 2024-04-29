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

// Slider tabs
const tabsButtonsContainer = document.getElementById("tabs-buttons");
const tabsButtons = Array.from(
  tabsButtonsContainer.getElementsByClassName("btn")
);
const swiperContainer = document.getElementById("swiper");

const showSlidersTypes = (tabName) => {
  const swiperSliders = Array.from(
    swiperContainer.querySelectorAll(`.swiper-slide`)
  );

  const swiperSlidersOnType = Array.from(
    swiperContainer.querySelectorAll(`[data-tab-type='${tabName}']`)
  );
  swiperSliders.forEach((element) => {
    element.classList.remove("active");
  });
  swiperSlidersOnType.forEach((element) => {
    element.classList.add("active");
  });
};

tabsButtons.forEach((element) => {
  element.addEventListener("click", () => {
    const tabName = element.attributes["data-tab-id"].value;

    showSlidersTypes(tabName);

    tabsButtons.forEach((element) => {
      element.classList.remove("active");
    });

    element.classList.add("active");
  });
});

showSlidersTypes("operating");
