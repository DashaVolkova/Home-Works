$(document).ready(function(){

	$('.submit').click(function() {
		$.ajax({
			url:'http://restapi.fintegro.com/data.json',
			dataType: 'json',
			success: function(data){
				console.log(data);
			},
		});
		/*var value = $('input[type=text]').val;
		if (value !== '') {

		};*/
	});

});
