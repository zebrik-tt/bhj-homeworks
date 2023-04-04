"use strict";

const pollTitle = document.querySelector("#poll__title");
const pollAnswers = document.querySelector("#poll__answers");

function getPoll() {

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

  xhr.send();

  // Этот код сработает после того, как мы получим ответ сервера
  xhr.onload = function () {
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат, response - это ответ 
      const responseObj = JSON.parse(xhr.response).data;
      const textHtmlTitle = `
      <p>${responseObj.title}</p>
      `;
      pollTitle.insertAdjacentHTML("beforeend", textHtmlTitle);
      const arrAnswers = responseObj.answers;
      arrAnswers.forEach(element => {
        const textHtmlTitleAnswers = `
      <button class="poll__answer">
        ${element}
      </button>
      `;
        pollAnswers.insertAdjacentHTML("beforeend", textHtmlTitleAnswers);
      });

      const btnAnswer = pollAnswers?.querySelectorAll(".poll__answer");

      btnAnswer.forEach(element => {
        element.addEventListener("click", () => {
          alert("Спасибо, ваш голос засчитан!");

          element.parentElement.innerHTML = "";
          pollTitle.innerHTML = "";
          getPoll();
        });
      });
    }
  };

  xhr.onerror = function () {
    alert("Запрос не удался");
  };
}

getPoll();
