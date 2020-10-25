$(document).ready(function() {
	new WOW().init();
	
	try {	
	  $('.productslider__slider').each(function() {
		  $(this).slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
      /* autoplay: true,
        autoplaySpeed: 3000,*/
        arrows: true,
        dots: false,
       /* dotsClass: 'mainslider__dots_slick',*/
	   responsive: [
	    {
		  breakpoint: 1280,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4,

		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,

		  }
		}]
    });
	 });
	} catch(err) {
	
	}
	
	$(".productslider__right").click(function(e) { 
		$(this).parent().parent().find(".slick-slider").slick("slickNext"); 
	});
	
		$(".productslider__left").click(function(e) { 
		$(this).parent().parent().find(".slick-slider").slick("slickPrev"); 
	});
	
	
    $("input[type=tel]").mask("+7 (999) 999-99-99");
	
		if ($(window).width() < 1023) {
			
				
					$('.indextext').append('<span class="readmorespan">Читать далее <i class="fa fa-angle-down" aria-hidden="true"></i></span>');
				/* 	$('.indexblock .text p').append('<span class="readmorespan_hide">РЎРєСЂС‹С‚СЊ</span>');
					$('.readmorespan_hide').hide() */
				
		
			$('.readmorespan').on('click', function() {
				$(this).siblings('.indextext p').css({
					'height': 'initial',
					'padding-bottom': '20px'
				});
				$(this).hide();
				
			});
			/* $('.readmorespan_hide').on('click', function() {
				$(this).parents('.list-of-products__item-description').css({
					'height': '135px',
					'padding-bottom': '0'
				});
				$(this).hide();
				$(this).siblings($('.readmorespan')).show()
			}); */
				};
	
	if ($(window).width() > 991) {
		$(window).scroll(function() {
			scroll = $(window).scrollTop();
			if (scroll >= 700)  {
				$('#header').addClass('fixed');
				$('#header.fixed .header__menu').hide();
			}
			else 
			{
				$('#header').removeClass('fixed');
				$('.header__menu').show();
				$('#header.fixed .header__menu').hide();
			}
		});
	}
		

	$('.search__button').click(function(e) {
		e.preventDefault();
		$('.search__full').toggleClass('search__full_open');
		$('.search__button').toggleClass('search__button_open');
	});
	
	
	$('.accordeon-titlejs').click(function (event) {
		/* $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active'); */
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
        $('.topmenu').slideToggle();
    }); 
	$('.menufixed').click(function(event) {
        $('.header__menu').slideToggle();
    });
	$('.topmenumobile').click(function(event) {
        $('.topmenu').slideToggle();
    });
	
	$('.mainmenu ul > li .fa-angle-down').click(function(e) {
		if ($(window).width() < 1024) {
			e.preventDefault();		
			$(this).parent().parent().find('.mainmenu__child').stop(true, true).slideToggle(250).end().siblings().find('.mainmenu__child').slideUp(250);
		}
	});
});


function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.quantity').on('click', '.quantity-plus', function(e) {
  incrementValue(e);
});

$('.quantity').on('click', '.quantity-minus', function(e) {
  decrementValue(e);
});
