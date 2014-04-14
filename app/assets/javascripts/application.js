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

	/*CG: declaring variables representing the full size of the window.
	Makes it easier to set position of shapes later on and helps if the user 
	resizes the window.*/
	winWidth = window.innerWidth;
	winHeight = window.innerHeight;
	winBody = document.getElementById("body");


	// //CG: Uses canvas to create a rectangle the size of the page.
	// var b_canvas = document.getElementById("b");

	// if(!b_canvas){
	// 	return // Prevent errors
	// }

 // 	var b_context = b_canvas.getContext("2d");

 // 	//CG: Resizes the canvas according to the size of the window.
 // 	window.addEventListener('resize', resizeCanvas, false);

	// function resizeCanvas(){
	//   	b_canvas.width = winWidth;
	//   	b_canvas.winHeight = winHeight - 25;
	//   	draw();
	// }
	// resizeCanvas();

	// //CG: The following function draws the background.
	// function draw(){
	// 	//Creates a first canva the size of the window and fills it with black default color
	// 	b_context.strokeStyle = "#eee";
	// 	b_context.fillRect(0,0,b_canvas.width,b_canvas.winHeight);
	// 	b_context.fillStyle = "#ccc";
	// 	b_context.stroke();

	// 	//Recreates the canva to be able to change the color.
	// 	b_context.fillRect(0,0,b_canvas.width,b_canvas.winHeight);
	// 	b_context.fillStyle = "#ccc";
	// 	b_context.stroke();
	// }

	// /*CG: Draw rectangle. Still need to figure out why canvas require to repeat this code to be
	// able to change the color -.- ... */
	// function changeColor(colorIndex){
	// 	console.log(colorIndex)

	// 	b_context.fillRect(0,0,b_canvas.width,b_canvas.winHeight);
	// 	b_context.fillStyle = colors[colorIndex]; //Grey
	// 	b_context.stroke();

	// 	b_context.fillRect(0,0,b_canvas.width,b_canvas.winHeight);
	// 	b_context.fillStyle = colors[colorIndex]; //Grey
	// 	b_context.stroke();
	// }


	// window.addEventListener("keypress", doKeypress, false);

	// //CG: Code to change background color depending on key pressed.
	// function doKeypress(e){
	// 	// e.preventDefault();
	// 	switch(e.keyCode){
	// 		//Letter 'Q'
	// 		case 113:
	// 			makeKey('q')
				
	// 			drawCircle();
	// 			break;

	// 		//Letter 'W'
	// 		case 119:
	// 			// changeColor(1); //Pink
	// 			drawRect();
	// 			break;

	// 		//Letter 'E'
	// 		case 101:
	// 			// changeColor(2); //Green
	// 			animate(e);
	// 			break;

	// 		//Letter 'R'
	// 		case 114:
	// 			// changeColor(3); //Purple
	// 			drawTriangle();
	// 			break;

	// 		//Letter 'T'
	// 		case 116:
	// 			// changeColor(4); //Blue
	// 			drawCurve();
	// 			break;

	// 		//Letter 'Y'
	// 		case 121:
	// 			// changeColor(5); //Red
	// 			break;
	// 	}
	// };

	
		/*---------------------- DRAW CIRCLE ------------------------*/

		

		/*---------------------- DRAW SQUARE ------------------------*/

		function drawRect(){
			// var elem = document.getElementById("draw-rect");
			two = new Two({
				fullscreen: true
			}).appendTo(winBody);

			//CG: Sets the rectangle at the center of the window.
			var rect = two.makeRectangle( (winWidth/2), (winHeight/2), 50, 50);
			rect.fill = '#99FF33';
			rect.stroke = '#1C75BC';

			two.bind("update", function (frameCount){
				if(rect.scale > 0){
					rect.scale += 0.8;
					//Stops the animation when the scale gets to 20.
					if (rect.scale > 11){
						rect.scale = 0;
					}
				} 
			}).play();
		}

		/*---------------------- DRAW LINE ------------------------*/

		function drawLine(){
			// var elem = document.getElementById("draw-line");
			two = new Two({
				fullscreen: true
			}).appendTo(winBody);

			var line = two.makeLine( 0, 25, winWidth/2, winHeight/2);
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
			// var elem = document.getElementById("draw-triangle");
			two = new Two({
				fullscreen: true
			}).appendTo(winBody);

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
			// var elem = document.getElementById("draw-curve");
			two = new Two({
				fullscreen: true
			}).appendTo(winBody);

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

		/*---------------------- DRAW SPIRALS ------------------------*/

		function drawSpiral(){
			var colorSeed = 0;

		function init() {
			createjs.CSSPlugin.install(createjs.Tween);

			createjs.Ticker.setFPS(20);
			var count = 600;
			while (--count >= 0) {
				var box = document.createElement("div");
				box.style.width = "6px";
				box.style.winHeight = "2px";
				box.style.position = "absolute";
				box.style.borderRadius = "2px";
				box.style.backgroundColor = "#0F0";
				document.body.appendChild(box);
				var a = (Math.random()*Math.PI*2*16|0)/16;
				box.style.webkitTransform = "rotate("+a+"rad)";
				var d = 30;
				box.style.left = window.innerWidth/2+Math.cos(a-0.2-Math.random())*d+"px";
				box.style.top = window.innerHeight/2+Math.sin(a-0.2-Math.random())*d+"px";
				d = (Math.min(window.innerWidth,window.innerHeight)-16)/2*(Math.random()*0.3+0.7);
				var x = window.innerWidth/2+Math.cos(a)*d;
				var y = window.innerHeight/2+Math.sin(a)*d;
				createjs.Tween.get(box, {loop:true}, true).set({opacity:"0"},box.style).wait(Math.random()*1000+1|0).call(updateColor).to({top:y,left:x,width:16,winHeight:4,opacity:1},Math.random()*1500+1000,easeIn);
			}
			// tween the base color that divs will be assigned when they start moving:
			createjs.Tween.get(this,{loop:true}).to({colorSeed:360},5000);
		}

		function updateColor(tween) {
			// grab the tween's target (the style object), and update it's color
			tween._target.style.backgroundColor = "hsl("+(Math.random()*60+colorSeed|0)+",100%,50%)";
		}

		// very simple easing equation:
		function easeIn(ratio) {
			return ratio*ratio;
		}

		init();

		}
	
});

function drawCircle(){
			// Make an instance of two and place it on the page.
			// var elem = document.getElementById("draw-circle");
			two = new Two({
				fullscreen: true
			}).appendTo(winBody);

			var shapeRadius = 300;

			// two has convenience methods to create shapes.
			var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

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
			// two.remove(circle);
			
		}
