"use strict";

const menuLink = document.querySelectorAll(".menu__link");
const menuSub = document.querySelectorAll(".menu_sub");

for (let index = 0; index < menuLink.length; index++) {
  const element = menuLink[index];
  const currentMenuSub = element.nextElementSibling;

  if (currentMenuSub) {
    element.onclick = () => {
      for (let index = 0; index < menuSub.length; index++) {
        const element = menuSub[index];
        element.classList.remove("menu_active");
      }

      currentMenuSub.classList.add("menu_active");
      return false;
    };
  }
}
