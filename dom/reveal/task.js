"use strict";

const reveal = document.querySelector(".reveal");
function changeVisibleReveal() {
  const windowHeight = window.innerHeight;

  const revealPosition = reveal.getBoundingClientRect();
  if ((revealPosition.top > 0 && revealPosition.top < windowHeight) ||
    (revealPosition.bottom > 0 && revealPosition.bottom < windowHeight)) {
    reveal?.classList.add("reveal_active");
  } else {
    reveal?.classList.remove("reveal_active");
  }
};

document.addEventListener("scroll", () => {
  changeVisibleReveal();
});

changeVisibleReveal();