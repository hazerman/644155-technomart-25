/*нерабочий код*/
var mainWrapper = document.querySelector('.services-slider-wrapper');
var links = mainWrapper.querySelectorAll('.services-list a');
console.log(links);
var sliders = mainWrapper.querySelectorAll('.services-slider');



var currentLink = 0;

var changeSlide = function (link, slide, lastLink, lastSlide, i) {

  link.addEventListener('click', function (evt) {
    console.log(currentLink + " in the start of function");
    evt.preventDefault();
    lastLink.classList.remove("current-in-services");
    console.log(lastLink);
    lastSlide.classList.remove("show-services-slider");
    console.log(lastSlide);
    link.classList.add("current-in-services");
    console.log(link);
    slide.classList.add("show-services-slider");
    console.log(slide);
    currentLink = i;
    console.log(currentLink + " in the end of function");
    return currentLink;
  })
}

for(var i = 0; i < links.length; i++) {

  changeSlide(links[i],sliders[i], links[currentLink], sliders[currentLink], i);
  console.log(i + " in cycle");
}
