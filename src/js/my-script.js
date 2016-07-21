$(document).ready(function(){

    $('.services__label').click(function() {
        $(this).children('.fa').toggleClass('fa-chevron-up fa-chevron-down');
        $(this).siblings('.services__content').slideToggle('slow');      
   });


    $('.page-footer__up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0},500);
        return false;
    });


    var lastScreen = $(document).height() - $(window).height();
    var buttonsPosition = lastScreen - (20 + 42);
    var buttons = $('.footer-buttons');
    function scroll() {
        if ($(window).scrollTop() >= buttonsPosition) {
              if ($(window).width() < 769) {
                buttons.animate({"bottom": "310px"}, 100);
              } else {
                buttons.animate({"bottom": "175px"}, 100);
              };
        } else if ($(window).scrollTop() >= 50) {
            buttons.animate({"bottom": "20px"}, 100);
        } else {
            buttons.css("bottom", "auto");
        }
    }
    document.onscroll = scroll;


    //console.log(lastScreen);
    //console.log(buttonsPosition);

  // if ($(window).width() < 769) {
  //   buttons.animate({"bottom": "310px"}, 100);
  // } else {
  //   buttons.animate({"bottom": "175px"}, 100);
  // }

});

