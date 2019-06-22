var mainWrapper = document.querySelector('.promo-slider-wrapper');
var slides = mainWrapper.querySelectorAll('.promo-slider');
var currentSlide = 0;
var prevBtn = mainWrapper.querySelector('.btn-prev');
var nextBtn = mainWrapper.querySelector('.btn-next');

var radioList = document.createElement('ul');
radioList.classList.add("radio-in-slider-wrapper");
mainWrapper.appendChild(radioList);
var radioElement = [];
for (var i = 0; i < slides.length; i++) {
  radioElement[i] = document.createElement('li');
  radioElement[i].classList.add('radio-in-slider');
  radioList.appendChild(radioElement[i]);
};

radioElement[currentSlide].classList.add('show-current-slider');

var goToPrevSlide = function (current) {
  slides[current].classList.remove('slider-show');
  radioElement[current].classList.remove('show-current-slider');
  if (current === 0) {
    slides[slides.length - 1].classList.add('slider-show');
    radioElement[slides.length - 1].classList.add('show-current-slider');
    currentSlide = slides.length - 1;
  } else {
    slides[current - 1].classList.add('slider-show');
    radioElement[current - 1].classList.add('show-current-slider');
    currentSlide--;
  }
};

var goToNextSlide = function (current) {
  slides[current].classList.remove('slider-show');
  radioElement[current].classList.remove('show-current-slider');
  if (current === slides.length - 1) {
    slides[0].classList.add('slider-show');
    radioElement[0].classList.add('show-current-slider');
    currentSlide = 0;
  } else {
    slides[current + 1].classList.add('slider-show');
    radioElement[current + 1].classList.add('show-current-slider');
    currentSlide++;
  }
};

nextBtn.addEventListener('click', function () {
  goToNextSlide(currentSlide);
});

prevBtn.addEventListener('click', function () {
  goToPrevSlide(currentSlide);
});






