$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scrolled');
            $('.section').addClass('scrolled');
            $('.footer').addClass('scrolled');
            $('body').css('background', '#f5f5f5');
        } else {
            $('.header').removeClass('scrolled');
            $('.section').removeClass('scrolled');
            $('.footer').removeClass('scrolled');
            $('body').css('background', '#fff');
        }
    });
});
