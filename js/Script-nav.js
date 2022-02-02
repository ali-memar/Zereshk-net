$(document).ready(function () {
    $('.nav-fostrap li').click(function () {
        $('ul.dropdown').slideUp("fast");
        if ($(this).find('ul.dropdown').css('display') == 'none'){

            $(this).find('ul.dropdown').slideDown("fast");
        } else {
            $(this).find('ul.dropdown').slideUp("fast");
        }
        
        
    });


    $('.navbar-fostrap').click(function () {
        $('.nav-fostrap').toggleClass('visible');
        $('body').toggleClass('cover-bg');
    });
});