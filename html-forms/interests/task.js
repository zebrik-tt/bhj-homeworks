"use strict";

const uppeLevels = document.querySelectorAll("div > ul > li > label > .interest__check");

uppeLevels.forEach(element => {
  element.addEventListener("click", (e) => {
    if (element.closest(".interest") === e.target.closest(".interest")) {
      const nearItem = element.closest("label").nextElementSibling;
      const innerItems = nearItem?.querySelectorAll(".interest__check");
      innerItems?.forEach(item => {
        item.checked = element.checked;
      });
    }
  });
});