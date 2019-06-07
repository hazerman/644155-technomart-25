var link = document.querySelector(".contacts .button");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".close-button");
var focusName = popup.querySelector("[name=name]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-form-show");
  focusName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-form-show");
});
