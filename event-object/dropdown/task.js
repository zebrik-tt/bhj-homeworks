"use strict";

const dropdownButtons = Array.from(document.querySelectorAll(".dropdown__value"));
dropdownButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const dropdownList = btn.nextElementSibling;
    dropdownList.classList.toggle("dropdown__list_active");
  });
});

const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));
dropdownItems.forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const currentdropdownList = item.closest(".dropdown__list");
    currentdropdownList.classList.remove("dropdown__list_active");
    currentdropdownList.previousElementSibling.textContent = item.textContent;
  });
});



