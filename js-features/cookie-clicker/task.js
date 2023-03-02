"use strict";

const image = document.getElementById("cookie");
function changeSizes() {
  let counter = Number(document.getElementById("clicker__counter").textContent);
  if (counter % 2) {
    image.width = 200;
  } else {
    image.width = 250;
  }
  counter += 1;
  document.getElementById("clicker__counter").textContent = counter;
}

image.onclick = changeSizes;
