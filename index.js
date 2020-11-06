const modalElement = document.querySelector(".modal");
const openBtnElement = document.querySelector(".btn.add-user");
const popapElement = document.querySelector(".popap");
const inputs = document.querySelectorAll("input")

function openModal(event) {
  modalElement.classList.add("open");
  event.stopPropagation();
}

function closeModal() {
  modalElement.classList.remove("open");
  inputs.forEach(el => el.value = "")
}

function clickOutsideOfModal(event) {
  if (popapElement.contains(event.currentTarget)) {
    return;
  } else {
    closeModal();
  }
}

openBtnElement.onclick = openModal;

let closeBtnElements = document.querySelectorAll(".close");

closeBtnElements.forEach(function (closeBtnElement) {
  closeBtnElement.onclick = closeModal;
});

document.body.onclick = clickOutsideOfModal;

popapElement.onclick = function(event) {
    event.stopPropagation();
}

