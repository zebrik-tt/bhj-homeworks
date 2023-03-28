"use strict";

const arrHasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

arrHasTooltip.forEach(element => {
  const windowHeight = window.innerHeight;

  const textHtml = `
  <div class="tooltip">
  ${element.title}
  </div>
  `;
  element.insertAdjacentHTML("afterend", textHtml);

  element.addEventListener("click", (event) => {
    event.preventDefault();
    const tooltip = element.nextElementSibling;
    const elementPosition = element.getBoundingClientRect();
    const correction = (elementPosition.top >= windowHeight / 2) ? - elementPosition.height * 1.5 : elementPosition.height;
    tooltip.style.top = `${elementPosition.top + correction}px`;
    tooltip.style.left = `${elementPosition.left}px`;
    tooltip.classList.toggle("tooltip_active");

    arrHasTooltip.filter(item => (item !== event.target)).map(item => (item.nextElementSibling.classList.remove("tooltip_active")));
  });
});
