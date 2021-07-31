// Navbar transition on window scroll
$(function(){
    var navbar = document.getElementById("navbar");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(navbar).css("background-color", "white").css("top", 0);
            $(navbar).addClass("navbar-animate");
            $("#nav-title").show();
            $(".navbar-brand").removeClass("brand-auto");
            $(".navbar-brand").addClass("brand-left");
        }

        else {
            $(navbar).css("background-color", "transparent").css("top", 0);
            $("#nav-title").hide();
            $(".navbar-brand").removeClass("brand-left");
            $(".navbar-brand").addClass("brand-auto");
        }
    })
})

// Slideshow images
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Slideshow controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("carousel-item");
        var indicators = document.getElementsByClassName("indicators");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < indicators.length; i++) {
            indicators[i].className = indicators[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        indicators[slideIndex-1].className += " active";
      }