"use strict";

const quantityControls = document.querySelectorAll(".product__quantity-control");
quantityControls.forEach(element => {
  element.addEventListener("click", () => {
    let productQuantity = element.parentElement?.querySelector(".product__quantity-value");
    const currentQuantity = Number(productQuantity?.textContent);
    if (element.classList.contains("product__quantity-control_dec")) {
      // уменьшаем
      productQuantity.textContent = Math.max(0, currentQuantity - 1);
    } else {
      productQuantity.textContent = currentQuantity + 1;
    }
  });
});

const productAdd = document.querySelectorAll(".product__add");
productAdd.forEach(element => {
  element.addEventListener("click", (event) => {
    const product = element.closest(".product");
    const productId = product.dataset.id;
    const productImgUrl = product?.querySelector(".product__image")?.getAttribute("src");
    const productQuantityValue = Number(product?.querySelector(".product__quantity-value")?.textContent);
    const cartProducts = document.querySelector(".cart__products");
    const productInCart = Array.from(cartProducts?.querySelectorAll(".cart__product")).find(item => {
      return item.dataset.id === productId;
    });
    if (productInCart) {
      const cartProductCount = productInCart?.querySelector(".cart__product-count");
      cartProductCount.textContent = +cartProductCount.textContent + productQuantityValue;
    } else if (productQuantityValue > 0) {
      const textHtml = `
      <div class="cart__product" data-id=${productId}>
        <img class="cart__product-image" src=${productImgUrl}>
        <div class="cart__product-count">${productQuantityValue}</div>
      </div>
      `;
      cartProducts.insertAdjacentHTML("beforeend", textHtml);
    }
  });
});