"use strict";

const sliders = document.getElementsByClassName("slider__item");
const lengthList = sliders.length;
const arraySliders = Array.from(sliders);
const arrows = document.getElementsByClassName("slider__arrow");

for (let index = 0; index < arrows.length; index++) {
  const element = arrows[index];
  element.onclick = () => {
    let numberOfCurrentSlider = arraySliders.findIndex(item => {
      return item.classList.contains("slider__item_active");
    });
    numberOfCurrentSlider = (numberOfCurrentSlider === -1) ? 0 : numberOfCurrentSlider;

    let nextNumber =
      numberOfCurrentSlider === lengthList - 1 ? 0 : numberOfCurrentSlider + 1;
    let prevNumber =
      numberOfCurrentSlider === 0 ? lengthList - 1 : numberOfCurrentSlider - 1;

    arraySliders[numberOfCurrentSlider].classList.remove("slider__item_active");
    if (element.classList.contains("slider__arrow_next")) {
      arraySliders[nextNumber].classList.add("slider__item_active");
    } else {
      if (element.classList.contains("slider__arrow_prev")) {
        arraySliders[prevNumber].classList.add("slider__item_active");
      }
    }
  };
}