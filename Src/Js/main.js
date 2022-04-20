import "../Css/Sass/main.scss";
import "../Css/Vendors/normalize.css";

import { descriptionsArr } from "./image";
import { productsArr } from "./image";

const btnNavMobile = document.querySelector(".nav-mobile"),
  navbar_moible = document.querySelector(".nav"),
  dropdown_links = document.querySelectorAll(".dropdown"),
  descriptions = Array.from(
    document.querySelectorAll(".desc-container .description")
  ),
  products_images = Array.from(document.querySelectorAll(".product .image")),
  showProductsSpan = Array.from(document.querySelectorAll(".show-product")),
  collectionHolder = document.querySelector(".collection-holder"),
  collectionBullets = Array.from(
    document.querySelectorAll(".banner-container .bullets span")
  );

// Check the width of window
function checkWidth() {
  if (window.innerWidth < 992) {
    return true;
  } else {
    return false;
  }
}

// Function to change collection bullets color
const changeBulletColor = (index = 0) => {
  collectionBullets.forEach((bullet) => {
    if (bullet.classList.contains("active")) {
      bullet.classList.remove("active");
    }
  });
  collectionBullets[index].classList.add("active");
};

changeBulletColor();
// Function to general sliding Automatic
const sliding = (parent, width, duration, direction, sign) => {
  if (direction.toUpperCase() !== "X" && direction.toUpperCase() !== "Y") {
    console.error("Direction doesn't exict! should be X or Y");
  } else if (sign !== "-" && sign !== "+") {
    console.error("Sign doesn't exict! should be - or +");
  } else {
    let slide = setInterval(() => {
      parent.style.transform = `translate${direction.toUpperCase()}(${sign}${width}%)`;
    }, duration);

    // Remove the first element & append it at the last & return to position 0
    parent.addEventListener("transitionend", () => {
      let firstElement = parent.firstElementChild;
      parent.firstElementChild.remove();
      parent.appendChild(firstElement);
      parent.style.transition = "none";
      parent.style.transform = `translate${direction.toUpperCase()}(0)`;
      setTimeout(() => {
        parent.style.transition = getComputedStyle(
          document.documentElement
        ).getPropertyValue("$movementTransition");
      });
      let index = parent.firstElementChild.dataset.index;
      changeBulletColor(index);
    });
  }
};

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
  descriptions[i].style.backgroundImage = `url(${descriptionsArr[i]})`;
}

// Add the Background images to products
for (let i = 0; i < products_images.length; i++) {
  products_images[i].style.backgroundImage = `url(${productsArr[i]})`;
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

sliding(collectionHolder, 100 / 3, 3000, "X", "-");
