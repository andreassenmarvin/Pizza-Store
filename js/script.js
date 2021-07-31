var navbar = document.getElementById("navbar")




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
})