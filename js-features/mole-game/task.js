"use strict";

let dead = 0;
let lost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}
function checkResult(params) {}

function updateGameData() {
  let gameOver = false;

  if (this.classList.contains("hole_has-mole")) {
    dead += 1;
    document.getElementById("dead").textContent = dead;
  } else {
    lost += 1;
    document.getElementById("lost").textContent = lost;
  }

  if (lost === 5) {
    gameOver = true;
    alert("Вы проиграли");
  } else if (dead === 10) {
    gameOver = true;
    alert("Победа!");
  }

  if (gameOver) {
    dead = 0;
    lost = 0;
    document.getElementById("dead").textContent = dead;
    document.getElementById("lost").textContent = lost;
  }
}

for (let index = 1; index <= 9; index++) {
  const element = getHole(index);
  element.onclick = updateGameData;
}
