"use strict";

const arrRotators = Array.from(document.querySelectorAll(".card .rotator__case"));

const imtervalId = setInterval(() => {
  const index = arrRotators.findIndex(item => {
    return item.classList.contains("rotator__case_active");
  });

  const numberOfCurrentRotator = (index === -1) ? 0 : index;
  arrRotators[numberOfCurrentRotator].classList.toggle("rotator__case_active");
  const nextNumber = (numberOfCurrentRotator === arrRotators.length - 1) ? 0 : numberOfCurrentRotator + 1;
  arrRotators[nextNumber].classList.toggle("rotator__case_active");
}, 1000);