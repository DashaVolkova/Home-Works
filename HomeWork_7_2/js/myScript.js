$(document).ready(function(){

/*    $('.panel').click(function() {
 		$('.submenu').slideToggle("slow");
	});*/

/*	$('ul li:has("ul")').append('<span></span>');*/
	$('ul li a').click(function() {
		var checkElement = $(this).next();

		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('ul ul:visible').stop().animate({'height':'toggle'}, 500);
			checkElement.stop().animate({'height':'toggle'}, 500);
			return false;
        }
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			return false;
		}
	});


});


