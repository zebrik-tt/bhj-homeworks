"use strict";

const sendnBtn = document.getElementById("send");
const progress = document.getElementById("progress");
const form = document.getElementById("form");
sendnBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  // Jтправим данные
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(formData);

  // Uенерируется периодически во время отправки на сервер
  xhr.upload.onprogress = function (event) {
    // console.log(`Файл... Отправлено ${event.loaded} из ${event.total} байт`);
    progress.value = event.loaded / event.total;
  };

  xhr.upload.onerror = function () {
    console.log("Произошла ошибка при загрузке данных на сервер!");
  };

  // Этот код сработает после того, как мы получим ответ сервера
  xhr.onload = function () {
    alert(JSON.parse(xhr.response).message);
  };
});