// cabcecera
$(window).on("scroll", function(){
    if($(this).scrollTop()>100){
        $("header").css({
            "position":"fixed",
            "width": "100%",
            "top":  "0",
            "z-index": "1000"
        });
    }else{
        $("header").css({
            "position":"relative",
            "opacity":"1",
            "z-index":"auto"
        });
        $("body").css("padding-top","1.5");
    }
});
$(function(){
    $(window).on("resize",function(){
        $("#hamburger").prop("checked",false);
    })
})

// hover sobre el boton de la imagen del index
$(function(){
    $('.imgCentral a').on('mouseenter',function(){
        $(this).css({
            'background-color': 'rgba(156, 120, 1, 0.91)'
        });
    });

    $('.imgCentral a').on('mouseleave', function(){
        $(this).css({
            'background-color': '#cc941a'
        });
    })
});


// aumenta dimensiones caja de articulos
$(function(){
    $('.articulo').on('mouseenter',function(){
        $(this).css({
            'transform': 'translateY(-10px)',
            'box-shadow': '0 15px 30px rgba(0,0,0,0.15)'
        });
    });

    $('.articulo').on('mouseleave',function(){
        $(this).css({
            'transform':'translateY(0)',
            'box-shadow': '0 5px 15px rgba(0,0,0,0.1)'
        });
    });
});

// abrir menu principal y menu usuario 
$(function(){

    // MENU PRINCIPAL
    $('#menu-principal label[for="hamburger"]').on("click",function(){
        if($('#menu').css('left')<'0px'){
            $('#menu').animate({left:'0vw'},'slow');
        }
    });
    $('#menu .cerrarMenu').on("click",function(){
        if($('#menu').css('left')=='0px'){
            $('#menu').animate({left:'-100vw'},'slow');
        }
    });

    //MENU USUARIO
    $('#menu-usuario label[for="userHamburger"]').on("click",function(){
        if($('#menu-user').css('left')<'0px'){
            $('#menu-user').animate({left:'0vw'},'slow');
        }
    })
    $('#menu-user .cerrarMenuUser').on("click",function(){
        if($('#menu-user').css('left')=='0px'){
            $('#menu-user').animate({left:'-100vw'},'slow');
        }
    });

});

//cerrar ambos menus si redimensionamos a escritorio
$(window).on("resize",function(){
    if($(window).width()>=768){
        $("#menu, #menu-user").css('left','-100vw');
    }
});

// boton volver arriba
$(function () {
    let $volverArriba = $("#volverarriba");

    $volverArriba.hide();

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) { // Aparece después de hacer scroll 100px
            $volverArriba.stop(true, true).fadeIn();
        } else {
            $volverArriba.stop(true, true).fadeOut();
        }
    });

    $volverArriba.on("click", function () {
        $("html, body").stop().animate({ scrollTop: 0 }, 500);
    });
}); 

// funcion para los inputs
$(function() {
    $('.inputForm input').each(function() {
        if ($(this).val().trim() !== '') {
            $(this).siblings('label').addClass('active');
        }
    });
    
    $('.inputForm input').on('focus', function() {
        $(this).siblings('label').addClass('active');
    });
    
    $('.inputForm input').on('blur', function() {
        if ($(this).val().trim() === '') {
            $(this).siblings('label').removeClass('active');
        }
    });
});

 $(function() {
    $('input[required], select[required], textarea[required]').focusin(function() {
      $(this).css('border-color', '#ccc');
      $(this).siblings('.mensaje-error').css('display', 'none');
    });

    $('input[required], select[required], textarea[required]').focusout(function() {
      if ($(this).val().trim() === '') {
        $(this).css('border-color', 'red');
        $(this).siblings('.mensaje-error').css('display', 'flex');
      }
    });
  });

$(function() {
    $('#fondo-negro, #caja-cookies').fadeIn();

    $('#btnAceptarCookies, #btnRechazarCookies').on("click", function() {
        $('#fondo-negro, #caja-cookies').fadeOut();
    });
});
