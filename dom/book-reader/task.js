"use strict";

const book = document.getElementById("book");

const arrFontSizeControl = Array.from(document.querySelectorAll(".font-size"));

arrFontSizeControl.forEach(btn => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    arrFontSizeControl.forEach((btn) => {
      btn.classList.remove("font-size_active");
    });
    event.target.classList.add("font-size_active");
    book?.classList.remove("book_fs-big", "book_fs-small");
    if (btn.classList.contains("font-size_big")) {
      book?.classList.add("book_fs-big");
    } else if (btn.classList.contains("font-size_small")) {
      book?.classList.add("book_fs-small");
    }
  });
});