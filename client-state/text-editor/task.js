"use strict";

const textEditor = document.getElementById("editor");

document.addEventListener("DOMContentLoaded", () => {
  textEditor.value = localStorage.getItem("editor");
});

textEditor.addEventListener("input", () => {
  localStorage.setItem("editor", textEditor.value);
});