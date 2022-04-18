import "../Css/Sass/main.scss";
import "../Css/Vendors/normalize.css";
import "../Images/header-image-01.webp";
import "../Images/header-image-02.webp";
import "../Images/header-image-03.webp";
import "../Images/header-image-04.webp";
import "../Images/header-image-05.webp";
import "../Images/product-1.jpg";
import "../Images/product-2.jpg";
import "../Images/product-3.jpg";
import "../Images/product-4.jpg";
import "../Images/product-5.jpg";
import "../Images/product-6.jpg";
import "../Images/product-7.jpg";
import "../Images/product-8.jpg";

const btnNavMobile = document.querySelector(".nav-mobile"),
  navbar_moible = document.querySelector(".nav"),
  dropdown_links = document.querySelectorAll(".dropdown"),
  descriptions = Array.from(
    document.querySelectorAll(".desc-container .description")
  ),
  products_images = Array.from(document.querySelectorAll(".product .image")),
  showProductsSpan = Array.from(document.querySelectorAll(".show-product"));

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

// Add the background Images to the descriptions
for (let i = 0; i < descriptions.length; i++) {
  descriptions[i].style.backgroundImage = `url("./Images/header-image-0${
    i + 1
  }.webp")`;
}

// Add the Background images to products
for (let i = 0; i < products_images.length; i++) {
  products_images[i].style.backgroundImage = `url("./Images/product-${
    i + 1
  }.jpg")`;
}

// Show the image when click on the span
showProductsSpan.forEach((show) => {
  let showImageContainer = document.createElement("div");
  let image = document.createElement("img");

  show.addEventListener("click", () => {
    let number = show.dataset.number;
    showImageContainer.classList.add("show-product-image");
    image.setAttribute("src", `./Images/product-${number}.jpg`);

    showImageContainer.appendChild(image);
    document.body.prepend(showImageContainer);
    document.body.classList.add("open");
  });
  // Remove the modal when i clicked out of image
  showImageContainer.addEventListener("click", (event) => {
    if (event.target.nodeName !== "img".toUpperCase()) {
      image.remove();
      showImageContainer.remove();
      document.body.classList.remove("open");
    } else {
      event.preventDefault();
    }
  });
});
