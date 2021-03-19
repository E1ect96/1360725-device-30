const modalMapLink = document.querySelector(".main-bottom__map");
const modalMap = document.querySelector(".modal__map");
const modalMapClose = modalMap.querySelector(".modal__close-btn--map");
const modalFeedbackLink = document.querySelector(".button--feedback");
const modalFeedback = document.querySelector(".modal__feedback");
const modalFeedbackClose = modalFeedback.querySelector(".modal__close-btn--feedback");

modalMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal--show");
});

modalMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal--show");
});

modalFeedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal--show");
})

modalFeedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal--show")
})
