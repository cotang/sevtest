$(document).ready(function(){

    /* Hamburger */
    $('.hamburger').click(function(e){
        e.preventDefault();
        $('.nav__wrapper').toggle();
    });
    $(window).resize(function(){
      if ($(window).width() > 768) {
        $('.nav__wrapper').show();
      } else {
        $('.nav__wrapper').hide();
      }
    });

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

    /* три кнопки в футере */
  // $( window ).resize(function() {
    var buttons = $('.footer-buttons');
    var footerHeight = $('.page-footer').outerHeight();
    var buttonsHeight = $(buttons).outerHeight();
    var documentBottom = $(document).height() - $(window).height() - footerHeight + buttonsHeight;
    $(window).scroll(function () {
      console.log($(this).scrollTop()) 
      if ($(window).width() > 1024) {
        if ($(this).scrollTop() >= documentBottom ) {
          $(buttons).removeClass('footer-buttons--sticky');
          $(buttons).addClass('footer-buttons--static');        
        } else if ($(this).scrollTop() > 0 ) {
          $(buttons).removeClass('footer-buttons--static footer-buttons--hidden');
          $(buttons).addClass('footer-buttons--sticky');
        } else {
          $(buttons).removeClass('footer-buttons--sticky');
          $(buttons).addClass('footer-buttons--hidden');
        }
      }
    });
  // });

});

