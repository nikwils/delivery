"use strict";
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");

const closeS = document.querySelector(".close");

const toggleModal = () => {
    modal.classList.toggle("is-open");
};

cartButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);
