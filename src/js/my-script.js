$(document).ready(function(){

    var up = $('.page-footer__up');
    $('.page-footer__up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0},500);
        return false;
    });



    var buttons = $('.footer-buttons');
    function scroll() {
        if ($(window).scrollTop() > x) {
            buttons.css("bottom", "0");
        } else if ($(window).scrollTop() > x) {
            buttons.css("bottom", "20px");
        } else {
            buttons.css("bottom", "125px");
        }
    }
    document.onscroll = scroll;


});