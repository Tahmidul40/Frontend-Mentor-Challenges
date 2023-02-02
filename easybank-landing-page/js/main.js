const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");
const navbarCta = document.getElementById("cta-nav");

// Responsive Navbar Toggle
burgerMenu.addEventListener("click", function () {
	navbarMenu.classList.toggle("active");
	burgerMenu.classList.toggle("active");
	navbarCta.classList.toggle("active")
});
