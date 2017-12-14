$(document).ready(function(){


	$('input').on('keyup', function() {
	    var keyword = $(this).val().toLowerCase();
	    $('.cars > li').each( function() {
	        $(this).toggle( keyword.length < 1 || $(this).attr('data-models').indexOf(keyword) > -1 );
	    });
	});

});