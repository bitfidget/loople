// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/*-----------------------------------------

CG: LET ME KNOW IF YOU WANT ME TO MOVE THIS TO ANOTHER JAVASCRIPT FILE TO AVOID
GETTING CONFUSED :) 

------------------------------------------*/

$(document).ready(function(){
	//CG: Array of colors for the background.
	var colors = ["#ccc", "#FF66CC", "#33CC33", "#993399", "#33CCFF", "#FF0000"];

	//CG: Uses canvas to create a rectangle the size of the page.
	var b_canvas = document.getElementById("b");
 	var b_context = b_canvas.getContext("2d");

 	//CG: Resizes the canvas accorcing to the size of the window.
 	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas(){
	  	b_canvas.width = window.innerWidth;
	  	b_canvas.height = window.innerHeight;
	  	draw();
	}

	resizeCanvas();

	function draw(){
		//Creates a first canva the size of the window and fills it with black default color
		b_context.strokeStyle = "#eee";
		b_context.fillRect(0,0,b_canvas.width,b_canvas.height);
		b_context.fillStyle = "#ccc";
		b_context.stroke();

		//Recreates the canva to be able to change the color.
		b_context.fillRect(0,0,b_canvas.width,b_canvas.height);
		b_context.fillStyle = "#ccc";
		b_context.stroke();
	}

	/*CG: Draw rectangle. Still need to figure out why canvas require to repeat this code to be
	able to change the color -.- ... */
	function changeColor(colorIndex){
		console.log(colorIndex)

		b_context.fillRect(0,0,b_canvas.width,b_canvas.height);
		b_context.fillStyle = colors[colorIndex]; //Grey
		b_context.stroke();

		b_context.fillRect(0,0,b_canvas.width,b_canvas.height);
		b_context.fillStyle = colors[colorIndex]; //Grey
		b_context.stroke();
	}

	//CG: Code to change background color depending on key pressed.
	$(document).keydown(function(e){
		switch(e.keyCode){
			//Letter 'Q'
			case 81:
				changeColor(0); //Grey
				break;

			//Letter 'W'
			case 87:
				changeColor(1); //Pink
				break;

			//Letter 'E'
			case 69:
				changeColor(2); //Green
				break;

			//Letter 'R'
			case 82:
				changeColor(3); //Purple
				break;

			//Letter 'T'
			case 84:
				changeColor(4); //Blue
				break;

			//Letter 'Y'
			case 89:
				changeColor(5); //Red
				break;
		}
	});
});