"use strict";

let timer = Number(document.getElementById("timer").textContent);
let intervalId = setInterval(() => {
  timer = timer - 1;
  document.getElementById("timer").textContent = timer;
  if (timer === 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}, 1000);
