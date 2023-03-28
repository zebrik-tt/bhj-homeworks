"use strict";

const inputField = document.getElementById("task__input");
const taskForm = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");

function addTask(event) {
  if (inputField.value.trim()) {

    const textHtml = `
      <div class="task">
        <div class="task__title">
        ${inputField?.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;
    tasksList.insertAdjacentHTML("beforeend", textHtml);
    inputField.value = "";

    const currentTask = tasksList?.lastElementChild;
    currentTask?.querySelector(".task__remove").addEventListener("click", () => {
      currentTask.remove();
    });
  }
}

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(event);
});