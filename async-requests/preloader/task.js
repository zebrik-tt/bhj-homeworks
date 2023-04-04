"use strict";

const loaderImg = document.querySelector("#loader");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.send();

// Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function () {
  loaderImg?.classList.remove("loader_active");
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат, response - это ответ 
    const responseObj = (JSON.parse(xhr.response)).response.Valute;
    const itemRate = document.querySelector("#items");

    for (const key in responseObj) {
      if (Object.hasOwnProperty.call(responseObj, key)) {
        const element = responseObj[key];
        const textHtml = `
          <div class="item">
            <div class="item__code">
            ${element.CharCode}
            </div>
            <div class="item__value">
            ${element.Value}
            </div>
            <div class="item__currency">
            руб.
            </div>
          </div>
        `;
        itemRate.insertAdjacentHTML("beforeend", textHtml);
      }
    }
  }
};

xhr.onerror = function () {
  alert("Запрос не удался");
};
