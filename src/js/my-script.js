$(document).ready(function(){

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


    /* списки в форме application */
  var appCountryInput = $('.form-application__country input');
  var appCountryList = $('.form-application__country-list');
    $(appCountryInput).click(function() { 
        $(appCountryList).show();   
    });  
    $(appCountryList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var appCountryText = $(this).text();
            $(appCountryInput).val(appCountryText);
            $(this).closest(appCountryList).mouseleave();
    });  

  var appRegionInput = $('.form-application__region input');
  var appRegionList = $('.form-application__region-list');    
    $(appRegionInput).click(function() { 
        $(appRegionList).show();   
    });  
    $(appRegionList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var appRegionText = $(this).text();
            $(appRegionInput).val(appRegionText);
            $(this).closest(appRegionList).mouseleave();
    });

    /* списки в форме question */
  var qCountryInput = $('.form-question__country input');
  var qCountryList = $('.form-question__country-list'); 
    $(qCountryInput).on('click', function(e) { 
        e.preventDefault(); 
        $(qCountryList).show();   
    });  
    $(qCountryList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var qCountryText = $(this).text();
            $(qCountryInput).val(qCountryText);
            $(this).closest(qCountryList).mouseleave();
    });  

  var qRegionInput = $('.form-question__region input');
  var qRegionList = $('.form-question__region-list');
    $(qRegionInput).on('click', function(e) { 
        e.preventDefault(); 
        $(qRegionList).show();   
    });  
    $(qRegionList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var qRegionText = $(this).text();
            $(qRegionInput).val(qRegionText);
            $(this).closest(qRegionList).mouseleave();
    });

    /* списки в форме call */
  var callCountryInput = $('.form-call__country input');
  var callCountryList = $('.form-call__country-list'); 
    $(callCountryInput).on('click', function(e) { 
        e.preventDefault(); 
        $(callCountryList).show();   
    });  
    $(callCountryList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var callCountryText = $(this).text();
            $(callCountryInput).val(callCountryText);
            $(this).closest(callCountryList).mouseleave();
    });  

  var callRegionInput = $('.form-call__region input');
  var callRegionList = $('.form-call__region-list');
    $(callRegionInput).on('click', function(e) { 
        e.preventDefault(); 
        $(callRegionList).show();   
    });  
    $(callRegionList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var callRegionText = $(this).text();
            $(callRegionInput).val(callRegionText);
            $(this).closest(callRegionList).mouseleave();
    });

});
