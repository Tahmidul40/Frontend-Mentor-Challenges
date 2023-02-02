// aos animation
AOS.init({
  duration: 1200,

  disable: function () {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
  },
});

// nav menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navbarMenu");

hamburger.addEventListener("click", () => {
  //Animate Links
  navMenu.classList.toggle("open");

  //Hamburger Animation
  hamburger.classList.toggle("active");
});

// nav drop down
const drop = document.querySelector("#dropDown");
const dropItem = document.querySelector("#dropItem");

drop.addEventListener("click", () => {
  // drop item
  dropItem.classList.toggle("dropItem");
  // open drop
  drop.classList.toggle("drop");
});

// nav drop down
const drop2 = document.querySelector("#dropDown2");
const dropItem2 = document.querySelector("#dropItem2");

drop2.addEventListener("click", () => {
  // drop item
  dropItem2.classList.toggle("dropItem");
  // open drop
  drop.classList.toggle("drop");
});

// nav drop down
const drop3 = document.querySelector("#dropDown3");
const dropItem3 = document.querySelector("#dropItem3");

drop3.addEventListener("click", () => {
  // drop item
  dropItem3.classList.toggle("dropItem");
  // open drop
  drop.classList.toggle("drop");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    let dropItem = document.getElementById("dropItem");
    if (dropItem.classList.contains("dropItem")) {
      dropItem.classList.remove("dropItem");
    }

    let dropItem2 = document.getElementById("dropItem2");
    if (dropItem2.classList.contains("dropItem")) {
      dropItem2.classList.remove("dropItem");
    }

    let dropItem3 = document.getElementById("dropItem3");
    if (dropItem3.classList.contains("dropItem")) {
      dropItem3.classList.remove("dropItem");
    }
  }
};
