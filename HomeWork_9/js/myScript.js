$(document).ready(function(){

	var input = $('input.user-password');
	var conteiner = $('.form-conteiner');
/*
	$(input).blur(function(){
	    if(input.val().length < 6) {
	      input.css('background','#FF0000').after("<span style=color:red>Password must be at least 6 characters long</span>");
	      return false;
	    }
	    else {
	      input.css('background','#FFFFFF');
	      return true;
	    }
	  });*/

	var rePassword = $('.repete-user-password');

	$(rePassword).blur(function(){
		if(rePassword.val() !== input.val()) {
			rePassword.css('background','red').after("<span style='color:red'>Your passwords don't match</span>");
			return false;
		}
		else {
			rePassword.remove("<span style='color:red'>Your passwords don't match</span>");
			return true;
		}
	});

var correct = true;
var password = $('input.user-password');
var regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
var validEmail = regExp.test(($('input.user-email').val()))

function validation() {
	$('input').each(function() {
		if($(this).val() == '') {
			$(this).after("<span style=color:red>This field is required</span>");
			return correct = false;
		}
		return correct;
	})

	if(password.val().length < 6) {
	      password.css('background','#FF0000').after("<span style=color:red>Password must be at least 6 characters long</span>");
	      return correct = false;
	    }
	    else {
	      password.css('background','#FFFFFF');
	      return correct;
	    };

	if (validEmail == true) {
		return true;
	}
	else {
		$('input.user-email').css('background','#FF0000');
		return correct = false;
	};
	return correct;
}

	$('button').click(function() {
		$('form span').remove();
		$('input.user-email').css('background','#FFFFFF');
		validation();
	});

});

