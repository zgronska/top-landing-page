// Sticky navbar
let navbar = document.querySelector("nav");
let main = document.querySelector("main");

let navPos = main.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos - 1) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
