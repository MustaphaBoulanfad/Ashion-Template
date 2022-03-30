import "../Css/Sass/main.scss";
import "../Css/Vendors/normalize.css";

const btnNavMobile = document.querySelector(".nav-mobile"),
  navbar_moible = document.querySelector(".nav"),
  dropdown_links = document.querySelectorAll(".dropdown");

//Show the nav mobile when click the button
btnNavMobile.addEventListener("click", () => {
  navbar_moible.classList.toggle("show");
});

// Check the width of window
function checkWidth() {
  if (window.innerWidth < 992) {
    return true;
  } else {
    return false;
  }
}

//Show the sub menu in the navbar
dropdown_links.forEach((link) => {
  // To show the menu
  if (checkWidth()) {
    link.addEventListener("click", () => {
      link.querySelector(".dropdown-menu").classList.toggle("open");
      link.querySelector("i").classList.toggle("open");
    });
  } else {
    link.addEventListener("mouseenter", () => {
      link.querySelector(".dropdown-menu").classList.add("show");
    });
    link.addEventListener("mouseleave", () => {
      link.querySelector(".dropdown-menu").classList.remove("show");
    });
  }
});

document.addEventListener("click", () => {
  // Close the nav in mobile screen when click outside it
  if (
    !navbar_moible.contains(event.target) &&
    !btnNavMobile.contains(event.target)
  ) {
    navbar_moible.classList.remove("show");
  }
});
