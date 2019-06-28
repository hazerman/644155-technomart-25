var mainWrapperPromo = document.querySelector(".promo-slider-wrapper");
var slidesPromo = mainWrapperPromo.querySelectorAll(".promo-slider");
var currentSlide = 0;
var prevBtn = mainWrapperPromo.querySelector(".btn-prev");
var nextBtn = mainWrapperPromo.querySelector(".btn-next");

var radioList = document.createElement("ul");
radioList.classList.add("radio-in-slider-wrapper");
mainWrapperPromo.appendChild(radioList);
var radioElement = [];
for (var i = 0; i < slidesPromo.length; i++) {
  radioElement[i] = document.createElement("li");
  radioElement[i].classList.add("radio-in-slider");
  radioList.appendChild(radioElement[i]);
}

radioElement[currentSlide].classList.add("show-current-slider");

var goToPrevSlide = function (current) {
  slidesPromo[current].classList.remove("slider-show");
  radioElement[current].classList.remove("show-current-slider");
  if (current === 0) {
    slidesPromo[slidesPromo.length - 1].classList.add("slider-show");
    radioElement[slidesPromo.length - 1].classList.add("show-current-slider");
    currentSlide = slidesPromo.length - 1;
  } else {
    slidesPromo[current - 1].classList.add("slider-show");
    radioElement[current - 1].classList.add("show-current-slider");
    currentSlide--;
  }
};

var goToNextSlide = function (current) {
  slidesPromo[current].classList.remove("slider-show");
  radioElement[current].classList.remove("show-current-slider");
  if (current === slidesPromo.length - 1) {
    slidesPromo[0].classList.add("slider-show");
    radioElement[0].classList.add("show-current-slider");
    currentSlide = 0;
  } else {
    slidesPromo[current + 1].classList.add("slider-show");
    radioElement[current + 1].classList.add("show-current-slider");
    currentSlide++;
  }
};

nextBtn.addEventListener("click", function () {
  goToNextSlide(currentSlide);
});

prevBtn.addEventListener("click", function () {
  goToPrevSlide(currentSlide);
});
