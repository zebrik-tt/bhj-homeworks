"use strict";

const arrTabs = Array.from(document.querySelectorAll(".tab"));
const arrTabContents = Array.from(document.querySelectorAll(".tab__content"));

arrTabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    // Сделайте акцент на том, что таких механизмов переключения может быть несколько на странице
    arrTabs.forEach(element => {
      if (element.closest(".tabs") === e.target.closest(".tabs")) {
        element.classList.remove("tab_active");
      }
    });

    e.target.classList.add("tab_active");

    arrTabContents.forEach(element => {
      if (element.closest(".tabs") === e.target.closest(".tabs")) {
        element.classList.remove("tab__content_active");
      }
    });

    const indexTab = arrTabs.indexOf(tab);
    arrTabContents[indexTab].classList.add("tab__content_active");
  });
});
