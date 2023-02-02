// navbar
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
    body.classList.toggle("overflow");
  });

  body.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("burger") &&
      nav.classList.contains("nav-active")
    ) {
      nav.classList.toggle("nav-active");
      navLinks.forEach((link) => {
        link.style.animation = "";
      });
      burger.classList.toggle("toggle");
      body.classList.toggle("overflow");
    }
  });
};

navSlide();
