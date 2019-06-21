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

for(var i = 0; i < buyLink.length; i++) {
    buyLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartAddPopup.classList.add("modal-cart-add-show");
      cartHeader.classList.add("link-change-bg-color");
    });
};

for(var i = 0; i < tabsLink.length; i++) {
    tabsLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      tabsHeader.classList.add("link-change-bg-color");
    });
};

cartAddClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartAddPopup.classList.remove("modal-cart-add-show");
});

continueLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartAddPopup.classList.remove("modal-cart-add-show");
});
