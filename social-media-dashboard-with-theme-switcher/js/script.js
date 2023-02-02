const toggleIt = document.querySelector("#toggle-it");
const Body = document.querySelector("body");

toggleIt.addEventListener("click", darkMode);
function darkMode() {
  Body.classList.toggle("active");
}
