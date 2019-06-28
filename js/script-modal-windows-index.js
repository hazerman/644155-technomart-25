var formLink = document.querySelector(".contacts .button");
var mapLink = document.querySelector(".map-button");

var buyLink = document.querySelectorAll(".btn-buy");
var tabsLink = document.querySelectorAll(".btn-tabs");

var formPopup = document.querySelector(".modal-form");
var mapPopup = document.querySelector(".modal-map");
var cartAddPopup = document.querySelector(".modal-cart-add");

var formClose = formPopup.querySelector(".close-button");
var mapClose = mapPopup.querySelector(".close-button");
var cartAddClose = cartAddPopup.querySelector(".close-button");
var continueLink = cartAddPopup.querySelector(".btn-continue");

var cartHeader = document.querySelector(".cart");
var tabsHeader = document.querySelector(".tabs");

var formName = formPopup.querySelector("[name=name]");
var formEmail = formPopup.querySelector("[name=email]");
var formTextarea = formPopup.querySelector("[name=appeal]");
var form = formPopup.querySelector(".appeal-form");

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("modal-form-show");
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-form-show");
  formPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!formName.value || !formEmail.value || !formTextarea.value) {
    if (!formName.value) {formName.focus();}
    else if (!formEmail.value) {formEmail.focus();}
    else {formTextarea.focus();}
    evt.preventDefault();
    formPopup.classList.remove("modal-error");
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add("modal-error");
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

for(var i = 0; i < buyLink.length; i++) {
    buyLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartAddPopup.classList.add("modal-cart-add-show");
      cartHeader.classList.add("link-change-bg-color");
    });
}

for(var i = 0; i < tabsLink.length; i++) {
    tabsLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      tabsHeader.classList.add("link-change-bg-color");
    });
}

cartAddClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartAddPopup.classList.remove("modal-cart-add-show");
});

continueLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartAddPopup.classList.remove("modal-cart-add-show");
});
