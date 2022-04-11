import "../Css/Sass/main.scss";
import "../Css/Vendors/normalize.css";
import imageOne from "../Images/header-image-01.webp";
import imageTwo from "../Images/header-image-02.webp";
import imageThree from "../Images/header-image-03.webp";
import imageFour from "../Images/header-image-04.webp";
import imageFive from "../Images/header-image-05.webp";

const btnNavMobile = document.querySelector(".nav-mobile"),
  navbar_moible = document.querySelector(".nav"),
  dropdown_links = document.querySelectorAll(".dropdown"),
  descriptions = Array.from(
    document.querySelectorAll(".desc-container .description")
  );

for (let i = 0; i < descriptions.length; i++) {
  descriptions[i].style.backgroundImage = `url("./Images/header-image-0${
    i + 1
  }.webp")`;
}

// Check the width of window
function checkWidth() {
  if (window.innerWidth < 992) {
    return true;
  } else {
    return false;
  }
}

//Show the nav mobile when click the button
btnNavMobile.addEventListener("click", () => {
  navbar_moible.classList.toggle("show");
});

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
