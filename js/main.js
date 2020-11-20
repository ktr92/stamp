$(document).ready(function() {
	/* new WOW().init(); */
	
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
	
	try {	
	  $('.productdetail__slider').each(function() {
		  $(this).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      /* autoplay: true,
        autoplaySpeed: 3000,*/
        arrows: true,
        dots: false,
       /* dotsClass: 'mainslider__dots_slick',*/
	   
    });
	 });
	} catch(err) {
	
	}
	
	

	   $('.productdetail__slidernav').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,		  
		  asNavFor: '.productdetail__navitems'
		});
		$('.productdetail__navitems').slick({
		  slidesToShow: 0,
		  slidesToScroll: 1,
		  asNavFor: '.productdetail__slidernav',
		  dots: false,
		  centerMode: false,
		  focusOnSelect: true
		});

	
	
	
	
	
	$(".productslider__right").click(function(e) { 
		$(this).parent().parent().find(".slick-slider").slick("slickNext"); 
	});
	
		$(".productslider__left").click(function(e) { 
		$(this).parent().parent().find(".slick-slider").slick("slickPrev"); 
	});
	
	
	
	$(".productdetail__arrright").click(function(e) { 
		$(this).parent().parent().find(".slick-slider").slick("slickNext"); 
	});
	
		$(".productdetail__arrleft").click(function(e) { 
		$(this).parent().parent().find(".slick-slider").slick("slickPrev"); 
	});
	
	
	
	
	
    $("input[type=tel]").mask("+7 (999) 999-99-99");
	
		if ($(window).width() < 767) {
			
				
					$('.indextext').append('<span class="readmorespan readmorespan_show"><span>Читать далее</span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>');
					$('.indextext').append('<span class="readmorespan readmorespan_hide"><span>Скрыть текст</span></span>');
					$('.readmorespan_hide').hide() 
				
		
			$('.readmorespan_show').on('click', function() {
				$(this).siblings('.indextext p').css({
					'height': 'initial',
					'padding-bottom': '0px'
				});
				$(this).siblings($('.readmorespan_hide')).show()
				$(this).hide();
				
			});
			 $('.readmorespan_hide').on('click', function() {
				$(this).siblings('.indextext p').css({
					'height': '30px',
					'padding-bottom': '0px'
				});
				$(this).hide();
				$(this).siblings($('.readmorespan_show')).show()
			}); 
				};
	
	if ($(window).width() > 767) {
		$(window).scroll(function() {
			scroll = $(window).scrollTop();
			if (scroll >= 250)  {
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
	else {
		$(window).scroll(function() {
			scroll = $(window).scrollTop();
			if (scroll >= 104)  {
				$('.header__menu').addClass('fixed');
				$('#header').addClass('body_scroll');
			}
			else 
			{
				$('.header__menu').removeClass('fixed');
				$('#header').removeClass('body_scroll');
				
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
	
	if ($(window).width() > 767) {
		$('.productdetail__showmore_show').on('click', function() {
			 $(".productdetail__navitems").toggleClass('expand');
			 $(".productdetail__navitems").animate({
				height : $(".productdetail__navitems")[0].scrollHeight
			},500);
			
			
			$(this).toggleClass('active');
			$('.productdetail__showmore_hide').toggleClass('active');		
			
		});
		$('.productdetail__showmore_hide').on('click', function() {
			$(".productdetail__navitems").toggleClass('expand');
			 $(".productdetail__navitems").animate({
				height : '374px'
			},500);
			
			$(this).toggleClass('active');	
			$('.productdetail__showmore_show').toggleClass('active');
		});
		
		

	
	} else {
			$('.productdetail__showmore_show').on('click', function() {
			 $(".productdetail__navitems").toggleClass('expand2');
			 			 $(".productdetail__navitems").toggleClass('expand');

			 $(".productdetail__navitems").animate({
				height : $(".productdetail__navitems")[0].scrollHeight
			},500);

			
			
			$(this).toggleClass('active');
			$('.productdetail__showmore_hide').toggleClass('active');		
			
		});
		$('.productdetail__showmore_hide').on('click', function() {
			
			 $(".productdetail__navitems").toggleClass('expand2');
			 $(".productdetail__navitems").toggleClass('expand');
			 $(".productdetail__navitems").animate({
				height : '0'
			},500);
			

			
			$(this).toggleClass('active');	
			$('.productdetail__showmore_show').toggleClass('active');
		});
		}

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

$(document).ready( function() {
    $(".fileupload input[type=file]").change(function()	{		
		if (this.files[0]) {
			var filename = $(this).val().replace(/.*\\/, ""); 
			/* $(this).siblings('span').empty(); */
			$(this).siblings('.filenames').find('.filenamedef').append('<span class="filename"> ' + filename + ' ' + ' </span>');
			$('.file-error').html("");
			$('.file-upload span').css('text-transform', 'none');
			$('.changefile').css('display', 'block');
		}
    });
});




















