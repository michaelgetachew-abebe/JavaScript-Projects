"use strict";

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const openModalBtns = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener("click", openModal);
}
closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
