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
<<<<<<< HEAD
<<<<<<< HEAD
//= require_tree .

/*-----------------------------------------

CG: LET ME KNOW IF YOU WANT ME TO MOVE THIS TO ANOTHER JAVASCRIPT FILE TO AVOID
GETTING CONFUSED :) 

------------------------------------------*/

$(document).ready(function(){

	//Stops the animations if the user is viewing another tab or window
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

	//CG: Array of colors for the background.
	var colors = ["#ccc", "#FF66CC", "#33CC33", "#993399", "#33CCFF", "#FF0000"];

	/*CG: declaring variables representing the full size of the window.
	Makes it easier to set position of shapes later on and helps if the user 
	resizes the window.*/
	var fullWidth = window.innerWidth;
	var fullHeight = window.innerHeight;

	//CG: Uses canvas to create a rectangle the size of the page.
	var b_canvas = document.getElementById("b");

	if(!b_canvas){
		return // Prevent errors
	}

 	var b_context = b_canvas.getContext("2d");

 	//CG: Resizes the canvas according to the size of the window.
 	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas(){
	  	b_canvas.width = fullWidth;
	  	b_canvas.height = fullHeight;
	  	draw();
	}
	resizeCanvas();

	//CG: The following function draws the background.
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

	window.addEventListener("keypress", doKeypress, false);


	/*---------------------- DRAW CIRCLE ------------------------*/

	function drawCircle(){
		// Make an instance of two and place it on the page.
		var elem = document.getElementById("draw-circle");
		two = new Two({
			fullscreen: true
		}).appendTo(elem);

		var shapeRadius = 500;

		// two has convenience methods to create shapes.
		var circle = two.makeCircle( fullWidth/2, fullHeight/2, shapeRadius);

		// The object returned has many stylable properties:
		circle.fill = '#33CCFF';
		circle.stroke = '#CC33FF'; // Accepts all valid css color
		circle.linewidth = 5;

		//Calling two.update() creates the circle
		two.update();

		//The following function updates the circle's scale
		two.bind("update", function (frameCount){
			if(circle.scale > 0){
				circle.scale -= 0.04;
			}
		}).play();
	}

	/*---------------------- DRAW SQUARE ------------------------*/

	function drawRect(){
		var elem = document.getElementById("draw-rect");
		two = new Two({
			fullscreen: true
		}).appendTo(elem);

		//CG: Sets the rectangle at the center of the window.
		var rect = two.makeRectangle( (fullWidth/2), (fullHeight/2), 50, 50);
		rect.fill = '#99FF33';
		rect.stroke = '#1C75BC';

		two.bind("update", function (frameCount){
			if(rect.scale > 0){
				rect.scale += 0.8;
				//Stops the animation when the scale gets to 20.
				if (rect.scale > 20){
					rect.scale = 0;
				}
			} 
		}).play();
	}

	/*---------------------- DRAW LINE ------------------------*/

	function drawLine(){
		var elem = document.getElementById("draw-line");
		two = new Two({
			fullscreen: true
		}).appendTo(elem);

		var line = two.makeLine( 0, 0, fullWidth/2, fullHeight/2);
		line.linewidth = 10;
		line.stroke = getRandomColor();

		two.update();
		//Makes the line go from top left to bottom right;
		two.bind("update", function (frameCount){
			line.translation.x += 50;
			line.translation.y += 20;
		}).play();
	}

	function getRandomColor() {
        return 'rgb('
            + Math.floor(Math.random() * 255) + ','
            + Math.floor(Math.random() * 255) + ','
            + Math.floor(Math.random() * 255) + ')';
    }

    /*---------------------- DRAW TRIANGLE ------------------------*/

    function drawTriangle(){
		var elem = document.getElementById("draw-triangle");
		two = new Two({
			fullscreen: true
		}).appendTo(elem);

		//Draw triangle (x1, y1, x2, y2, x3, y3)
		//(left points, top points, right points)
		var poly = two.makePolygon(500, 800, 650, 700, 800, 800);
			poly.linewidth = 4;
			// poly.translation = new Two.Vector(60, 60);
			poly.stroke = "#000000";
			poly.noFill();

		var poly2 = two.makePolygon(500, -200, 650, -100, 800, -200);
			poly2.linewidth = 4;
			// poly.translation = new Two.Vector(60, 60);
			poly2.stroke = "#000000";
			poly2.noFill();

		two.update();

		two.bind("update", function (frameCount){
			poly.translation.y -= 30;
			poly2.translation.y += 30;
		}).play();
	}

	/*---------------------- DRAW CURVES ------------------------*/

	function drawCurve(){
		var elem = document.getElementById("draw-curve");
		two = new Two({
			fullscreen: true
		}).appendTo(elem);

		var curve = two.makeCurve(110, 100, 120, 50, 140, 150, 160, 50, 180, 150, 190, 100, true);
			curve.linewidth = 5;
			curve.scale = 5;
			// curve.rotation = Math.PI / 2; // Quarter-turn
			curve.noFill();
			curve.stroke = "#33CCFF";

		two.update();

		two.bind("update", function (frameCount){
		   	curve.translation.x += 50;
		   	curve.translation.y += 20;
		}).play();
	}

});
=======
//= require_tree .
>>>>>>> bec7f4e9d15c81efc80acc519b22c3f83081c0dd
=======
>>>>>>> f2561592e0aedfe124f222ec82364e1faa7e132d
