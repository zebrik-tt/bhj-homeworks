"use strict";

const sliders = document.getElementsByClassName("slider__item");
const lengthList = sliders.length;
const arraySliders = Array.from(sliders);
let numberOfCurrentSlider = 0;
for (let index = 0; index < arraySliders.length; index++) {
  const element = arraySliders[index];
  if (element.classList.contains("slider__item_active")) {
    numberOfCurrentSlider = index;
  }
}
const arrows = document.getElementsByClassName("slider__arrow");
for (let index = 0; index < arrows.length; index++) {
  const element = arrows[index];
  element.onclick = () => {
    let nextNumber =
      numberOfCurrentSlider === lengthList - 1 ? 0 : numberOfCurrentSlider + 1;
    let prevNumber =
      numberOfCurrentSlider === 0 ? lengthList - 1 : numberOfCurrentSlider - 1;

    arraySliders[numberOfCurrentSlider].classList.remove("slider__item_active");
    if (element.classList.contains("slider__arrow_next")) {
      arraySliders[nextNumber].classList.add("slider__item_active");
      numberOfCurrentSlider = nextNumber;
    } else {
      if (element.classList.contains("slider__arrow_prev")) {
        arraySliders[prevNumber].classList.add("slider__item_active");
        numberOfCurrentSlider = prevNumber;
      }
    }
  };
}
