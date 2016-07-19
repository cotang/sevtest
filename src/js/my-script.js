$(document).ready(function(){

    var up = $('.page-footer__up');
    $('.page-footer__up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0},500);
        return false;
    });


    // var changeStyle = $('.page-header');
    // var top = $('.btn--top');
    // function scroll() {
    //     if ($(window).scrollTop() > 700) {
    //         changeStyle.addClass('page-header--narrow');
    //         top.addClass('show-top');
    //     } else {
    //         changeStyle.removeClass('page-header--narrow');
    //         top.removeClass('show-top');
    //     }
    // }
    // document.onscroll = scroll;


});