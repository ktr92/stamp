$(document).ready(function() {
	new WOW().init();
    $("input[type=tel]").mask("+7 (999) 999-99-99");
	
	if ($(window).width() > 991) {
		$(window).scroll(function() {
			scroll = $(window).scrollTop();
			if (scroll >= 700) $('#header').addClass('fixed');
			else $('#header').removeClass('fixed');
		});
	}
		

	$('.search__button').click(function(e) {
		e.preventDefault();
		$('.search__full').toggleClass('search__full_open');
		$('.search__button').toggleClass('search__button_open');
	});
	
	
	$('.accordeon-titlejs').click(function (event) {
		$(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active');
		$(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$(this).next('.accordeon-contentjs').slideToggle();
	});


});



$(function() {
    $('.menumobile').click(function(event) {
        $(this).toggleClass('active');
        $('.mainmenu').slideToggle();
    });
    $('.closemenu').click(function(event) {
        $('.menumobile').toggleClass('active');
        $('.mainmenu').slideToggle();
    });
});
