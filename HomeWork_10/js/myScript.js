$(document).ready(function(){

/*	$('.menu ul>li>a').mouseenter(function(){
			var submenu = $(this).next('.submenu');

			if(submenu.length > 0) {
				submenu.show();
			}
	});

	$('.menu ul>li').mouseleave(function(){
		var submenu = $('.submenu');

		if(submenu.length > 0) {
			setTimeout(function() {
				submenu.hide();
			}, 500);
		}
	});*/

//в Этом (верхнем) случае выходит, что если курсор переходит на один из элементов списка, то этот список благодаря mouse leave - все равно исчезнет.


	$('.menu>ul>li>a').click(function(){
		var submenu = $(this).next('.submenu');

		if(submenu.length > 0) {
			submenu.toggle();
/*			setTimeout(function() {
			submenu.toggle();
			}, 1000);*/
		};
	});

	$(".submenu>li").click(function(){
		var nanomenu = $(this).find('.nanomenu');
		nanomenu.toggle().animate(
			{height:300},
			600,
			slideOf);
	})

	function slideOf () {
		$('.nanomenu').animate(
			{height: 140},
			500,
			function(){
				$('.nanomenu').css('color', 'red');
			});
	};

/*	function turn() {
		$('.nanomenu').each('li', function(){
			$(this).deg(30);
		})
	}*/




});
