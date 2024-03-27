document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navbarMenu = document.querySelector('.navbar-menu');

  hamburger.addEventListener('click', function () {
      navbarMenu.classList.toggle('show');
      hamburger.classList.toggle('open');
  });
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}




var container = document.querySelector('.container');

// Define images and their corresponding text
var images = [
  'https://shedrackolisa.github.io/tewa/image1.jpg',
  'https://shedrackolisa.github.io/tewa/image2.jpg',
  'https://shedrackolisa.github.io/tewa/image3.jpg',
  'https://shedrackolisa.github.io/tewa/image4.jpg',
  'https://shedrackolisa.github.io/tewa/image5.jpg'
];
var texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5'];

// Load and draw images with text
function loadImages() {
  images.forEach(function(image, index) {
    var canvas = document.createElement('canvas');
    canvas.width = 300; // Set canvas width
    canvas.height = 200; // Set canvas height
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(texts[index], canvas.width / 2, canvas.height - 20);
    };
    img.src = image;
    container.appendChild(canvas);
  });
}

// Start loading images
loadImages();

