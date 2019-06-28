var mainWrapperServices = document.querySelector(".services-slider-wrapper");
var linksServices = mainWrapperServices.querySelectorAll(".services-list a");
var slidesServices = mainWrapperServices.querySelectorAll(".services-slider");

var findCurrentLinkAndSlide = function () {
  var curLink = 0;
  for (var i = 0; i < linksServices.length; i++) {
    if (linksServices[i].className === "current-in-services") {
      curLink = i;
    }
  }
  return curLink;
}

var changeSlide = function (link, slide) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    var currentLinkAndSlide = findCurrentLinkAndSlide();

    linksServices[currentLinkAndSlide].classList.remove("current-in-services");
    slidesServices[currentLinkAndSlide].classList.remove("show-services-slider");

    link.classList.add("current-in-services");
    slide.classList.add("show-services-slider");
  })
}

for(var i = 0; i < linksServices.length; i++) {
  changeSlide(linksServices[i], slidesServices[i]);
}
