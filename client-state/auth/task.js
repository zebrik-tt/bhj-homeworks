"use strict";

const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");

const userIdInStorage = localStorage.getItem("user_id");

function hideSignin() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
}

if (userIdInStorage) {
  hideSignin();
  welcome.querySelector("#user_id").textContent = userIdInStorage;

} else {

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    // Jтправим данные
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);

    // Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function () {
      if (JSON.parse(xhr.response).success) {
        hideSignin();
        const userId = JSON.parse(xhr.response).user_id;

        localStorage.setItem("user_id", userId);
        welcome.querySelector("#user_id").textContent = userId;

      } else {
        alert("Неверный логин/пароль");
      }
    };

    xhr.onerror = function () {
      alert("Запрос не удался");
    };
  });
}

