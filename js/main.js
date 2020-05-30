$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true});
    $(document).ready(function(){
    $('select').formSelect();
    });
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('body,html').animate({ scrollTop: destination}, 2000);
        return false;
    });

});