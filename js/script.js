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
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
}


var price, crust_price, topping_price;
let total = 0;

function myPizza(size, crust, topping, total) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}


// Navbar transition on window scroll
$(function () {
    var navbar = document.getElementById("navbar");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(navbar).css("background-color", "white").css("top", 0);
            $(navbar).addClass("navbar-animate");
            $("#nav-title").show();
            $(".navbar-brand").removeClass("brand-auto");
            $(".navbar-brand").addClass("brand-left");
        } else {
            $(navbar).css("background-color", "transparent").css("top", 0);
            $("#nav-title").hide();
            $(".navbar-brand").removeClass("brand-left");
            $(".navbar-brand").addClass("brand-auto");
        }
    })

    // proceed to checkout
    $("#checkout-btn").click(function (event) {
        var mySize = $("#pizzaSizes input:checked").val();
        var myCrust = $(".crusts input:checked").val();
        var myTopping = [];
        $.each($("input[name='toppings']:checked"), function () {
            myTopping.push($(this).val());
        });

        switch (mySize) {
            case "0":
                price = 0;
                break;
            case "Large sized pizza(1250/=)":
                price = 1250;
                console.log(price);
                break;
            case "Medium sized pizza(850/=)":
                price = 850;
                console.log(price);
                break;
            case "Small sized pizza(650/=)":
                price = 650;
                console.log(price);
            default:
                console.log("error");
        }
        switch (myCrust) {
            case "0":
                crust_price = 0;
                break;
            case "Crispy Crust(250/=)":
                crust_price = 250;
                break;
            case "Stuffed Crust(150/=)":
                crust_price = 150;
                break;
            case "Glutten Crust(200/=)":
                crust_price = 200;
                break;
            default:
                console.log("No price");
        }
        var topping_value = myTopping.length * 50;

        if ((mySize == null) || (myCrust == null)) {
            $("#select-error").show();
        } else {
            $(".cart").fadeIn()
            $(".menu-bg").removeAttr("id");
            $(".menu-bg").addClass("menu-cart-bg");
            $(".menu-overlay").removeAttr("id");
            $(".menu-overlay").addClass("menu-cart-overlay");
            $("#checkout-btn").fadeOut();
            $("#select-error").hide();
        }

        total = price + crust_price + topping_value;
        var checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#order-size").append(mySize);
        $("#order-crust").append(myCrust);
        $("#order-toppings").append(myTopping).val();

       
        // Proceed button
        $("#submit-order").click(function () {
            $("#total-cost").append(checkoutTotal);
        });

        // home delivery button
        $("#yes").click(function () {
            var deliveryAmount = checkoutTotal + 250;
            $("#total-cost").append(deliveryAmount);
        });

        // when one clicks place order button
        $("button#final-order").click(function (event) {
            event.preventDefault();
            let deliveryAmount = checkoutTotal + 250;
            console.log("Final Bill is: " + deliveryAmount);
        });
        event.preventDefault();
    });
})

