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
	var correct = true;
	var password = $('input.user-password');
	var regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
	var validEmail = regExp.test(($('input.user-email').val()))

	function validation() {
		$('input').each(function() {
			if($(this).val() == '') {
				$(this).after("<span style='color:red;'>This field is required</span>");
				return correct = false;
			}
			return correct;
		})

		if(password.val().length < 6) {
		      password.css('background','#FF0000').after("<span style='color:red;'>Your passwords is too short</span>");
		      return correct = false;
		    }
		    else {
		      password.css('background','#FFFFFF');
		      $('span').remove();
		      return correct = true;
		    };
		return correct;

		if(rePassword.val() !== input.val()) {
			rePassword.css('background','red').after("<span style='color:red;'>Your passwords don't match</span>");
			return correct = false;
		}
		else {
			rePassword.css('background','#FFFFFF');
			$('span').remove();
			return correct = true;
		};

		return correct;

		if (validEmail == true) {
			return correct = true;
		}
		else {
			$('input.user-email').css('background','#FF0000');
			return correct = false;
		};
		return correct;
	}

	$('.form-login').show();


	$('[href=registration]').click(function(e){
	    e.preventDefault();

	    $('.form-login').hide();
	    $('.form-registration').show();
	});

	$('[href=login]').click(function(e){
	    e.preventDefault();

	    $('.form-login').show();
	    $('.form-registration').hide();
	});

	function registration() {
    $.ajax({
        url: 'http://restapi.fintegro.com/registration',
        method: 'POST',
        dataType: 'json',
        data: {
            login: $('.form-registration [name="login"]').val(),
            email: $('.form-registration [name="email"]').val(),
            password: $('.form-registration [name="password"]').val(),
            firstname: $('.form-registration [name="login"]').val(),
        },
        success: function(data){
            $('.form-registration').hide();
            $('.form-login').show();
        },
        error: function(xhr, status, error){
            console.log('ERROR!!!', xhr, status, error);
            alert('Что-то пошло не так!..');
        }
    	});
	}

	function login() {
	    $.ajax({
	        url: 'http://restapi.fintegro.com/login',
	        method: 'POST',
	        dataType: 'json',
	        data: {
	            username: $('.form-login [name="username"]').val(),
	            password: $('.form-login [name="password"]').val()
	        },
	        beforeSend: function(){
	            $('[name=login-button]').html('<img src="img/Disk.svg">');
	        },
	        success: function(data){
	            sessionStorage.sessionToken = data.token;
	            console.log(data);

	            window.location.reload();
	        },
	        error: function(xhr, status, error){
	            console.log('ERROR!!!', xhr, status, error);
	            alert('Что-то пошло не так!..');
	        },
	        complete: function(){
	            $('[name=login-button]').html('Login');
	        }
    	});
	}

	function showProfile(){
	    $.ajax({
	        url: 'http://restapi.fintegro.com/profiles',
	        method: 'GET',
	        dataType: 'json',
	        headers: {
	            bearer: sessionStorage.sessionToken
	        },
	        success: function(data){
	            console.log(data)
	            $('.profile-name').html(data.profile.firstname);
	            $('.form-registration').hide();
	    		$('.form-login').hide();
	            $('.profile').show();
	        },
	        error: function(xhr, status, error){
	            console.log('ERROR!!!', xhr, status, error);
	        }
	    });
	}

	function showLogin(){
		$('.form-registration').hide();
	    $('.form-login').show();
	}

	function initPage(){
	    if(sessionStorage.sessionToken) {
	        showProfile();
	    } else {
	        showLogin();
	    }
	}

	$(function(){
    	initPage();
	});

	$('[name=register]').click(function(){
		$('span').remove();
		$('input').css('background','#FFFFFF');
		validation();
	    registration();
	});

	$('[name=login-button]').click(function(){
	    login();
	});

	function logout() {
	    if(sessionStorage.sessionToken) {
	        delete sessionStorage.sessionToken;
	        window.location.reload();
	    }
	}

	$('[name=logout]').click(function(){
	    logout();
	});

});

