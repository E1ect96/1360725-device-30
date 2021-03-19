const modalMapLink = document.querySelector(".main-bottom__map");
const modalMap = document.querySelector(".modal__map");
const modalMapClose = modalMap.querySelector(".modal__close-btn--map");
const modalFeedbackLink = document.querySelector(".button--feedback");
const modalFeedback = document.querySelector(".modal__feedback");
const modalFeedbackClose = modalFeedback.querySelector(".modal__close-btn--feedback");
const feedbackForm = modalFeedback.querySelector(".feedback-form");
const feedbackName = modalFeedback.querySelector(".feedback-form__field--name");
const feedbackEmail = modalFeedback.querySelector(".feedback-form__field--email");
const feedbackText = modalFeedback.querySelector(".feedback-form__field--text");

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
  feedbackName.focus();
})

/*Закрытие модального окна обратной связи*/
modalFeedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal--show")
  modalFeedback.classList.remove("modal-error");
})

/*Валидация формы*/
feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  }
})

/*Закрытие модального окна по нажатию esc*/
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal--show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal--show");
    }
    if (modalMap.classList.contains("modal--show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal--show");
    }
  }
});
