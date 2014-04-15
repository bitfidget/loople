
$(document).ready(function(){
	/*CG: declaring variables representing the full size of the window.
	Makes it easier to set position of shapes later on and helps if the user 
	resizes the window.*/
	var $animWindow = $('#anim-window');
	winWidth = window.innerWidth;
	winHeight = window.innerHeight;
	winBody = document.getElementById("anim-window");		

	// Make an instance of two and place it on the page.
	window.two = new Two({
		fullscreen: true
	}).appendTo(winBody);

});

//COMMENTING THAT OUT CAUSE WE'RE NOT USING IT ANYMORE FOR NOW

// /*---------------------- DRAW CIRCLE Q------------------------*/

// function drawCircleQ(){
// 	var shapeRadius = (winHeight/2)+40
// 	newRadius = 0.01
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = '#CC33FF'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	two.bind("update", function (frameCount){
// 	  	if (shapeRadius >= ((winHeight/2)+ 40.05) ){
// 	  		circle.scale -= (newRadius);
// 	  		// two.remove(circle)	
// 	  	} else if(shapeRadius <= (winHeight/2)){
// 	  		circle.scale += newRadius;
// 	  	}
// 	  	shapeRadius += newRadius
// 	 }).play();			
// }

// /*---------------------- DRAW CIRCLE W------------------------*/

// function drawCircleW(){
// 	var shapeRadius = (winHeight/2)+25
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(255,255,0)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE E------------------------*/

// function drawCircleE(){
// 	var shapeRadius = (winHeight/2)+10
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(120,230,0)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE R------------------------*/

// function drawCircleR(){
// 	var shapeRadius = (winHeight/2)-5
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = '#FF66FF'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE T------------------------*/

// function drawCircleT(){
// 	var shapeRadius = (winHeight/2)-20
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(245,0,0)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE Y------------------------*/

// function drawCircleY(){
// 	var shapeRadius = (winHeight/2)-35
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(214,24,111)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE U------------------------*/

// function drawCircleU(){
// 	var shapeRadius = (winHeight/2)-50
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(244,0,202)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE I------------------------*/

// function drawCircleI(){
// 	var shapeRadius = (winHeight/2)-65
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(128,0,255)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE O------------------------*/

// function drawCircleO(){
// 	var shapeRadius = (winHeight/2)-80
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(79,3,202)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE P------------------------*/

// function drawCircleP(){
// 	var shapeRadius = (winHeight/2)-95
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(28,127,255)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE A------------------------*/

// function drawCircleA(){
// 	var shapeRadius = (winHeight/2)-110
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(43,190,255)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE S------------------------*/

// function drawCircleS(){
// 	var shapeRadius = (winHeight/2)-125
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(60,255,187)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE D------------------------*/

// function drawCircleD(){
// 	var shapeRadius =(winHeight/2)-140
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(61,255,50)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE F------------------------*/

// function drawCircleF(){
// 	var shapeRadius = (winHeight/2)-155
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(43,159,0)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE G------------------------*/

// function drawCircleG(){
// 	var shapeRadius = (winHeight/2)-170
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(120,230,0)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE H------------------------*/

// function drawCircleH(){
// 	var shapeRadius = (winHeight/2)-185
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(178,253,0)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE J------------------------*/

// function drawCircleJ(){
// 	var shapeRadius = (winHeight/2)-200
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(28,127,255)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE K------------------------*/

// function drawCircleK(){
// 	var shapeRadius = (winHeight/2)-215
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(43,190,255)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE L------------------------*/

// function drawCircleL(){
// 	var shapeRadius = (winHeight/2)-230
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(60,255,187)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE Z------------------------*/

// function drawCircleZ(){
// 	var shapeRadius =(winHeight/2)-245
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(0,0,0)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }


// /*---------------------- DRAW CIRCLE X------------------------*/

// function drawCircleX(){
// 	var shapeRadius = (winHeight/2)-260
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(232,233,232)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }


// /*---------------------- DRAW CIRCLE C------------------------*/

// function drawCircleC(){
// 	var shapeRadius = (winHeight/2)-275
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = 'rgb(255,255,255)'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE V------------------------*/

// function drawCircleV(){
// 	var shapeRadius = (winHeight/2)-290
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = '#669999'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE B------------------------*/

// function drawCircleB(){
// 	var shapeRadius = (winHeight/2)-305
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = '#00CC99'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE N------------------------*/

// function drawCircleN(){
// 	var shapeRadius = (winHeight/2)-320
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = '#66FFFF'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }

// /*---------------------- DRAW CIRCLE M------------------------*/

// function drawCircleM(){
// 	var shapeRadius = (winHeight/2)-335
// 	// two has convenience methods to create shapes.
// 	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

// 	// The object returned has many stylable properties:
// 	circle.noFill();
// 	circle.stroke = '#99FF66'; // Accepts all valid css color
// 	circle.linewidth = 0.5;

// 	//Calling two.update() creates the circle
// 	two.update();

// 	//The following function updates the circle's scale
// 	// two.bind("update", function (frameCount){
// 	// 	if(circle.scale > 0){
// 	// 		circle.scale -= 0.01;
// 	// 	} else {
// 	// 		two.remove(circle)	
// 	// 	}
// 	// }).play();			
// }




