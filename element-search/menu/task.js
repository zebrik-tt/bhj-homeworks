"use strict";

const menuLink = document.querySelectorAll(".menu__link");
const menuSub = document.querySelectorAll(".menu_sub");

for (let index = 0; index < menuLink.length; index++) {
  const element = menuLink[index];
  const currentMenuSub = element.nextElementSibling;

  if (currentMenuSub) {
    element.onclick = () => {
      for (let index = 0; index < menuSub.length; index++) {
        const elementSub = menuSub[index];

        if (elementSub.classList.contains("menu_active")) {
          elementSub.classList.remove("menu_active");
        } else {
          elementSub.classList.add("menu_active");
        }

        if (elementSub.previousElementSibling != element) {
          elementSub.classList.remove("menu_active");
        }
      };
      return false;
    };
  }
}