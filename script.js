// Sticky navbar
const navbar = document.querySelector("nav");
const main = document.querySelector("main");

const mainPos = main.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > mainPos - 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Responsive menu
const toggleButton = document.querySelector("#btn-toggle");
const menu = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".nav-link a");

function toggleMenu() {
  menu.classList.toggle("active");
  toggleButton.classList.toggle("fa-xmark");
}

toggleButton.addEventListener("click", toggleMenu);

window.addEventListener("click", function (event) {
  if (event.target !== menu && event.target !== toggleButton) {
    menu.classList.remove("active");
  }
});
