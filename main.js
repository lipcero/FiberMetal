$(document).ready(function(){
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
    });
});
//javascript  abrir,cerrar menú
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

//javascript efecto scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// carrusel
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        dist: -150,
    });
  });


    //   autoplay carrusel
    setInterval(function(){
        $('.carousel').carousel('next');
    },3000);

    // boton ir arriba flotante
    $(document).ready(function(){

        $('#ir-arriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('#ir-arriba').slideDown(300);
            } else {
                $('#ir-arriba').slideUp(600);
            }
        });
    
    });