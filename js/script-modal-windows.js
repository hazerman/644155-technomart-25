var formLink = document.querySelector(".contacts .button");
var mapLink = document.querySelector(".map-button");
var formPopup = document.querySelector(".modal-form");
var mapPopup = document.querySelector(".modal-map");
var formClose = formPopup.querySelector(".close-button");
var mapClose = mapPopup.querySelector(".close-button");
var focusName = mapPopup.querySelector("[name=name]");

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("modal-form-show");
  focusName.focus();
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-form-show");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});
