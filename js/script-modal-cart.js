var buyLink = document.querySelector(".btn-buy");
var tabsLink = document.querySelector(".btn-tabs");
var cartAddPopup = document.querySelector(".modal-cart-add");
var cartAddClose = cartAddPopup.querySelector(".close-button");
var continueLink = cartAddPopup.querySelector(".btn-continue");
var cartHeader = document.querySelector(".cart");
var tabsHeader = document.querySelector(".tabs");

buyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartAddPopup.classList.add("modal-cart-add-show");
  cartHeader.classList.add("link-change-bg-color");
});

tabsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  tabsHeader.classList.add("link-change-bg-color");
});

cartAddClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartAddPopup.classList.remove("modal-cart-add-show");
});

continueLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartAddPopup.classList.remove("modal-cart-add-show");
});
