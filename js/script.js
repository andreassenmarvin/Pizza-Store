var navbar = document.getElementById("navbar");
var slides = document.getElementsByClassName("carousel-item");


$(function(){
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

    var slide1 = document.getElementById("carousel-item1");
    var slide2 = document.getElementById("carousel-item2");
    var slide3 = document.getElementById("carousel-item3");
    var click1 = document.getElementById("click1");
    var click2 = document.getElementById("click2");
    var click3 = document.getElementById("click3");

    $(click1).click(function(){
        $(slide2).fadeOut();
        $(slide3).fadeOut();
        $(slide1).fadeIn();
        $(click2).removeClass("active");
        $(click3).removeClass("active");
        $(click1).addClass("active");
    })

    $(click2).click(function(){
        $(slide1).fadeOut();
        $(slide2).fadeIn();
        $(slide3).fadeOut();
        $(click1).removeClass("active");
        $(click2).addClass("active");
        $(click3).removeClass("active");
    })

    $(click3).click(function(){
        $(slide1).fadeOut();
        $(slide2).fadeOut();
        $(slide3).fadeIn();
        $(click1).removeClass("active");
        $(click2).removeClass("active");
        $(click3).addClass("active");
    })
})
