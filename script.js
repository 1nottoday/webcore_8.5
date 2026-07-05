const grid = document.getElementById("brandsGrid");
const button = document.getElementById("hiddencontent")

button. addEventListener("click", () => {
    grid.classList.toggle("open");
});

const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});