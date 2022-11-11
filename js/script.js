$(document).ready(function(){
    $('.topslide').bxSlider({
        pager: false,   
        controls: false,
        auto: true,
        mode: "fade",
        speed: 1000,
    });

    $('.scroler').slick({
        autoplay: true,
        autoplaySpeed: 0, 
        speed: 5000, 
        arrows: false, 
        swipe: false,
        slidesToShow: 4, 
        cssEase: 'linear', 
        pauseOnFoucus: false,
        pauseOnHover: false,
    });

    $(".scroler img").hover(
        function(){
         $(this).animate({ translate:(-40), zoom: "150%", });
        },
         function (){
          $(this).animate({ translate:(0), zoom: "100%", });
         });
});