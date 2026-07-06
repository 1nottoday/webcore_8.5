const grid = document.getElementById("brandsGrid");
const button = document.getElementById("hiddencontent")
const img = button.querySelector("img"); 

button. addEventListener("click", () => {
    grid.classList.toggle("open");

  if (grid.classList.contains("open")) {
    img.src = "./images/up.svg";
  } else {
    img.src = "./images/down.svg";
  }
});

const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});