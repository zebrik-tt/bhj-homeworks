"use strict";

const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

const closingElements = document.querySelectorAll(".modal__close");
const modalSuccess = document.getElementById("modal_success");

for (let index = 0; index < closingElements.length; index++) {
  const element = closingElements[index];
  element.onclick = () => {
    element.closest(".modal_active").classList.remove("modal_active");
    let arr = Array.from(element.classList);
    if (arr.includes("show-success")) {
      modalSuccess.classList.add("modal_active");
    }
  };
}
