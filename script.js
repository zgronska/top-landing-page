// Sticky navbar
const navbar = document.querySelector("nav");
const main = document.querySelector("main");

const mainPos = main.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos >= mainPos) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Responsive menu
const toggleButton = document.querySelector("#btn-toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("active");
  toggleButton.classList.toggle("fa-xmark");
}

toggleButton.addEventListener("click", toggleMenu);

window.addEventListener("click", function (event) {
  if (event.target !== navbar && event.target !== toggleButton) {
    menu.classList.remove("active");
    toggleButton.classList.remove("fa-xmark");
  }
});

// Update links on scroll
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const makeActive = (link) =>
      navLinks[link].classList.add("underline-active");
    const removeActive = (link) =>
      navLinks[link].classList.remove("underline-active");
    const removeAllActive = () =>
      [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 200;
    let currentActive = 0;

    window.addEventListener("scroll", () => {
      const current =
        sections.length -
        [...sections]
          .reverse()
          .findIndex(
            (section) => window.scrollY >= section.offsetTop - sectionMargin
          ) -
        1;

      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
  },
  false
);
