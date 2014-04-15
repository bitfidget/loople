$(document).ready(function(){
	console.log($(".signh3"));

	$(".signh3").on("click", function() {
		$(this).hide()
		console.log("signing in");
		$(this).next().toggleClass("signin")
	})

	$(".sign_up").on("click", function() {
		$(this).hide()
		console.log("signing up");
		$(this).next().toggleClass("signup")
	})

});