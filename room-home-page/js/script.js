const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#menu");
const fullBody = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  fullBody.classList.toggle("active");
}

const hamburger2 = document.querySelector("#hamburger2");
const navMenu2 = document.querySelector("#menu2");
//const fullBody = document.querySelector("body");

hamburger2.addEventListener("click", mobileMenu2);
function mobileMenu2() {
  hamburger2.classList.toggle("active");
  navMenu2.classList.toggle("active");
  fullBody.classList.toggle("active");
}

const hamburger3 = document.querySelector("#hamburger3");
const navMenu3 = document.querySelector("#menu3");
//const fullBody = document.querySelector("body");

hamburger3.addEventListener("click", mobileMenu3);
function mobileMenu3() {
  hamburger3.classList.toggle("active");
  navMenu3.classList.toggle("active");
  fullBody.classList.toggle("active");
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  // nav: ture,
  dots: false,
  items: 1,
  // nav: false,
  // navText: [
  //  '<img src="./images/icon-angle-left.svg">',
  // '<img src="./images/icon-angle-right.svg">',
  //],
});

var selector = $(".owl-carousel");

$(".my-next-button").click(function () {
  selector.trigger("next.owl.carousel");
});

$(".my-prev-button").click(function () {
  selector.trigger("prev.owl.carousel");
});
