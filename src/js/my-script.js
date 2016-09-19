$(document).ready(function(){

    /* Hamburger */
    if ($(window).width() < 767) {
        $('.nav__hamburger').show();
        $('.nav__list').hide(); 
        $('.hamburger').click(function(e){
            e.preventDefault();
            $('.nav__list').toggle();
        });               
    }

    /* галерея благодарственных отзывов */
    $('#mails__gallery').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '60px',      
      variableWidth: true
    });

    /* header раскрытие списка городов */
    $('.other-cities').click(function() {
        $(this).find('.fa').toggleClass('fa-chevron-up fa-chevron-down');       
        $(this).find($('.other-cities__list')).toggle();   
    });
    /* sidebar раскрытие списка меню */
    $('.services__label').click(function() {
        $(this).children('.fa').toggleClass('fa-chevron-up fa-chevron-down');
        $(this).siblings('.services__content').slideToggle('slow');      
   });

    /* кнопка "наверх" */
    $('.page-footer__up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0},500);
        return false;
    });

    /* три красные кнопки, прилипание - скорректировать! */
    var lastScreen = $(document).height() - $(window).height();
    var buttonsPosition = lastScreen - (20 + 42);
    var buttons = $('.footer-buttons');
    function scroll() {
        if ($(window).scrollTop() >= buttonsPosition) {
              if ($(window).width() <= 768) {
                buttons.animate({"bottom": "390px"}, 100);
              } else if ($(window).width() <= 1024) {                
                buttons.animate({"bottom": "210px"}, 100);
              } else {
                buttons.animate({"bottom": "140px"}, 100);
              };
        } else if ($(window).scrollTop() >= 50) {
            buttons.animate({"bottom": "0"}, 100);
        } else {
            buttons.css("bottom", "auto");
        }
    }
    document.onscroll = scroll;

});

