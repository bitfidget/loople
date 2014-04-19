
/* CG: I REMOVED ALL OLD ANIMATIONS HERE, WE SHOULD DELETE THIS FILE AS WE'RE
NOT USING IT ANYMORE. */

var steps = 4

$(document).ready(function(){
	/*CG: declaring variables representing the full size of the window.
	Makes it easier to set position of shapes later on and helps if the user 
	resizes the window.*/

	var $animWindow = $('#anim-window');
	winWidth = window.innerWidth;
	winHeight = window.innerHeight;	

	//CG: Creates a grid on the screen
	
	var grid = ($animWindow.width() / steps);
	console.log(grid)	
	// var $tempoGrid = $('.tempoGrid');

	var addGrid = function(number){
		for(i = 0; i <= number; i++){
			var $gridline = $('<div class="gridLine"></div>').css({
				left: (i * grid) + "px",
				height: winHeight + "px",
			}).appendTo($animWindow)
			console.log(i)
		}
	}
	addGrid(steps)
});
