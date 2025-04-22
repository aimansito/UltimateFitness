$(function () {

    var boton = $("div#volverarriba");

    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {

            boton.fadeIn("slow");
            $("nav#menu-principal > ul#menu").slideUp();
            $("ul#menu > li").children("ul").slideUp();

        } else {

            boton.fadeOut("slow");
        }

        if ($(this).scrollTop() > 0) {

            $("header#top").css({
                "position": "fixed",
                "width": "100%",
            });

            $("header#top > p#promo").slideUp();

        } else {

            $("header#top").css({
                "position": "relative",
                "width": "100%",
            });

            $("header#top > p#promo").slideDown();
        }
    });

    boton.on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 'slow');
    });

    $("nav#menu-principal > ul#menu").hide();

    $("nav#menu-principal > span").click(function (event) {
        event.preventDefault();
        if ($("html, body").scrollTop() == 0) {
            if ($("nav#menu-principal > ul#menu").css("display") == "none") {
                $("nav#menu-principal > ul#menu").slideDown();
            } else {
                $("nav#menu-principal > ul#menu").slideUp();
                $("ul#menu > li").children("ul").slideUp();
            }
        }
    });

    $("ul#menu > li").click(function () {
        if ($(this).children("ul").css("display") == "none") {
            $(this).children("ul").slideDown();
            $(this).siblings().children("ul").slideUp();
            $(this).find("i").attr("class", "fa fa-angle-up");
        } else {
            $(this).children("ul").slideUp();
            $(this).find("i").attr("class", "fa fa-angle-down");
        }
    });

    $("article > a > picture").hover(function(){
        console.log($(this).children().attr("src"));
        if($(this).children().attr("src") == "img/zapato1.jpg"){
            $(this).children().attr("src", "img/zapato1-1.jpg");
        }else if($(this).children().attr("src") == "img/zapato2.jpg"){
            $(this).children().attr("src", "img/zapato2-1.jpg");
        }else{
            $(this).children().attr("src", "img/zapato3-1.jpg");
        }
    }, function(){
        if($(this).children().attr("src") == "img/zapato1-1.jpg"){
            $(this).children().attr("src", "img/zapato1.jpg");
        }else if($(this).children().attr("src") == "img/zapato2-1.jpg"){
            $(this).children().attr("src", "img/zapato2.jpg");
        }else{
            $(this).children().attr("src", "img/zapato3.jpg");
        }
    });

    var SliderModule = (function () {
        var pb = {};
        pb.elslider = $("#slider");
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li'),
        }

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        pb.init = function (settings) {
            this.settings = settings || {duration:5000};
            var loscontroles = "";
            SliderInit();

            for(var i = 0; i < lengthSlider; i++){
                loscontroles += `<li${i === 0 ? " class='active'" : ""}></li>`;
            }

            $("#control-buttons").html(loscontroles);

            $("#control-buttons li").click(function () {
                if(currentSlider !== $(this).index()){
                    cambiarPanel($(this).index());
                }
            });
        }

        var SliderInit = function () {
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        pb.startSlider = function () {
            var paneles = pb.items.panels;
            var controles = $("#control-buttons li");

            if(nextSlider >= lengthSlider){
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controles.removeClass("active");
            controles.eq(nextSlider).addClass("active");
            
            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(nextSlider).fadeIn("slow");

            currentSlider = nextSlider;
            nextSlider += 1;
        }

        var cambiarPanel = function (indice) {
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $("#control-buttons li");
            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            controles.removeClass("active");
            controles.eq(indice).addClass("active");

            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(indice).fadeIn("slow");

            currentSlider = indice;
            nextSlider = indice + 1;
            SliderInit();
        }

        return pb;
    }());

    SliderModule.init();

});
