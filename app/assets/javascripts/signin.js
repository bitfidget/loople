$(document).ready(function(){

	$("#sign-in").on("click", function() {
		$('.sign-in').addClass("toggle-visible")
		$('.sign-up').removeClass("toggle-visible")
	})

	$("#sign-up").on("click", function() {
		$('.sign-up').addClass("toggle-visible")
		$('.sign-in').removeClass("toggle-visible")
	})

});