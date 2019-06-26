var mainWrapper = document.querySelector('.services-slider-wrapper');
var links = mainWrapper.querySelectorAll('.services-list a');
var slides = mainWrapper.querySelectorAll('.services-slider');

var findCurrentLinkAndSlide = function () {
  var curLink = 0;
  for (var i = 0; i < links.length; i++) {
    if (links[i].className === 'current-in-services') {
      curLink = i;
    }
  }
  return curLink;
}

var changeSlide = function (link, slide) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    var currentLinkAndSlide = findCurrentLinkAndSlide();

    links[currentLinkAndSlide].classList.remove("current-in-services");
    slides[currentLinkAndSlide].classList.remove("show-services-slider");

    link.classList.add("current-in-services");
    slide.classList.add("show-services-slider");
  })
}

for(var i = 0; i < links.length; i++) {
  changeSlide(links[i], slides[i]);
}
