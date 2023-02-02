const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#menu");
const fullBody = document.querySelector("body");
const btn = document.querySelector(".jsbtn");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  fullBody.classList.toggle("active");
  btn.classList.toggle("active");
}
