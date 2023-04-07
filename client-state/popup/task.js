"use strict";

function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=');
    acc[name] = value;
    return acc;
  }, {});
}

const cookie = getCookie();

if (!cookie.doNotShowSubscribeWindow) {

  const subscribeModal = document.getElementById("subscribe-modal");
  subscribeModal.classList.add("modal_active");

  const closingElement = document.querySelector(".modal .modal__close");

  closingElement.addEventListener("click", (event) => {
    event.target.closest("#subscribe-modal").classList.remove("modal_active");
    document.cookie = "doNotShowSubscribeWindow=yes";
  });
}
