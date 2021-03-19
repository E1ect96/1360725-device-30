const modalMapLink = document.querySelector(".main-bottom__map");
const modalMap = document.querySelector(".modal__map");
const modalMapClose = modalMap.querySelector(".modal__close-btn--map");
const modalFeedbackLink = document.querySelector(".button--feedback");
const modalFeedback = document.querySelector(".modal__feedback");
const modalFeedbackClose = modalFeedback.querySelector(".modal__close-btn--feedback");

/*Открытие модального окна карты*/
modalMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal--show");
});

/*Закрытие модального окна карты*/
modalMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal--show");
});

/*Открытие модального окна обратной связи*/
modalFeedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal--show");
})

/*Закрытие модального окна обратной связи*/
modalFeedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal--show")
})
