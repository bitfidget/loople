$(document).ready(function(){

	$("#sign-in").on("click", function() {
		$("#sign-in").closest('li').addClass("current-forms");
		$("#sign-up").closest('li').removeClass("current-forms");
  //   $('.sign-in').addClass("toggle-visible");
		// $('.sign-up').removeClass("toggle-visible");
		$('.sign-up').fadeOut();
		$('.sign-in').fadeIn();
	})

	$("#sign-up").on("click", function() {
    $("#sign-up").closest('li').addClass("current-forms");
    $("#sign-in").closest('li').removeClass("current-forms");
		// $('.sign-up').addClass("toggle-visible");
		// $('.sign-in').removeClass("toggle-visible");
		$('.sign-in').fadeOut();
		$('.sign-up').fadeIn();

	})

});