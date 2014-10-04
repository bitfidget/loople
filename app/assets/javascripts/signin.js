$(document).ready(function(){
	//This is very expensive you are constantly pulling elements out of the DOM; 
	//AH this is a start, have a go a refactoring further;
	var toggleForm = function(){
		$('.login').removeClass('current-forms');
		$(this).closest('li').addClass('current-forms');
	}

	$('#sign-in').on('click', toggleForm);
	$('#sign-up').on('click', toggleForm);

});