
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

	drawBouncingBall();

});

/*---------------------- DRAW CIRCLE ------------------------*/

function drawCircle(){
	var shapeRadius = 300
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
		} else {
			two.remove(circle)	
		}
	}).play();	

		
}

/*---------------------- DRAW SQUARE ------------------------*/

function drawRect(){
	//CG: Sets the rectangle at the center of the window.
	var rect = two.makeRectangle( (winWidth/2), (winHeight/2), 50, 50);
	rect.fill = '#99FF33';
	rect.stroke = '#1C75BC';

	two.bind("update", function (frameCount){
		if(rect.scale > 0){
			rect.scale += 0.8;
			
			//Stops the animation when the scale gets to 20.
			if (rect.scale > 11){
				two.remove(rect);
			}
		} 
	}).play();
}

/*---------------------- DRAW LINE ------------------------*/

function drawLine(){
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
	//Draw triangle (x1, y1, x2, y2, x3, y3)
	//(left points, top points, right points)
	var poly = two.makePolygon(500, 800, 650, 700, 800, 800);
		poly.linewidth = 4;
		// poly.translation = new Two.Vector(60, 60);
		poly.stroke = "yellow";
		poly.noFill();

	var poly2 = two.makePolygon(500, -200, 650, -100, 800, -200);
		poly2.linewidth = 4;
		// poly.translation = new Two.Vector(60, 60);
		poly2.stroke = "yellow";
		poly2.noFill();

	two.update();

	two.bind("update", function (frameCount){
		poly.translation.y -= 30;
		poly2.translation.y += 30;
	}).play();
}

/*---------------------- DRAW CURVES ------------------------*/

function drawCurve(){
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

//THIS IS NOT WORKING!!!!!!!!

// function drawSpiral(){
//  	var colorSeed = 0;

//  	function init() {
//  		createjs.CSSPlugin.install(createjs.Tween);

//  		createjs.Ticker.setFPS(20);
//  		var count = 600;
//  		while (--count >= 0) {
//  			var box = document.getElementById("test");
//  			box.style.width = "6px";
//  			box.style.winHeight = "2px";
//  			box.style.position = "absolute";
//  			box.style.borderRadius = "2px";
//  			box.style.backgroundColor = "#0F0";
//  			document.body.appendChild(box);
//  			var a = (Math.random()*Math.PI*2*16|0)/16;
//  			box.style.webkitTransform = "rotate("+a+"rad)";
//  			var d = 30;
//  			box.style.left = window.innerWidth/2+Math.cos(a-0.2-Math.random())*d+"px";
//  			box.style.top = window.innerHeight/2+Math.sin(a-0.2-Math.random())*d+"px";
//  			d = (Math.min(window.innerWidth,window.innerHeight)-16)/2*(Math.random()*0.3+0.7);
//  			var x = window.innerWidth/2+Math.cos(a)*d;
//  			var y = window.innerHeight/2+Math.sin(a)*d;
//  			createjs.Tween.get(box, {loop:true}, true).set({opacity:"0"},box.style).wait(Math.random()*1000+1|0).call(updateColor).to({top:y,left:x,width:16,winHeight:4,opacity:1},Math.random()*1500+1000,easeIn);
//  		}
//  		// tween the base color that divs will be assigned when they start moving:
//  		createjs.Tween.get(this,{loop:true}).to({colorSeed:360},5000);
//  	}

//  	function updateColor(tween) {
//  		// grab the tween's target (the style object), and update it's color
//  		tween._target.style.backgroundColor = "hsl("+(Math.random()*60+colorSeed|0)+",100%,50%)";
//  	}

// // 	// very simple easing equation:
//  	function easeIn(ratio) {
//  		return ratio*ratio;
//  	}

//  	init();
//  }

/*------------------------ DRAW TRIANGLE WITH DOTS ------------------------*/
	
function drawTriangleDots(){
	var triangleDots = two.makePolygon((winWidth/2), (winHeight/2 - 75), (winWidth/2 - 100), (winHeight/2 + 75), (winWidth/2 + 100), (winHeight/2 + 75));
	 	triangleDots.noFill;
	 	triangleDots.stroke = "#bbb";
	 	triangleDots.linewidth = 7;
	 	triangleDots.noFill();

	var circle1 = two.makeCircle(winWidth/2, (winHeight/2 - 75), 10);
	 	circle1.fill = "#000";

	var circle2 = two.makeCircle((winWidth/2 - 100), (winHeight/2 + 75 ), 10);
	 	circle2.fill = "#000";

	var circle3 = two.makeCircle((winWidth/2 + 100), (winHeight/2 + 75), 10);
	 	circle3.fill = "#000";

	var group = two.makeGroup(triangleDots, circle1, circle2, circle3);
		group.scale = 1;
	 	group.translation.set(500, -500);

	two.update();

	two.bind("update", function (frameCount){
	 	if(group.scale < 2){
	 	 var t =  0.01;
  		group.scale += t;
   		group.rotation += t * Math.PI;
	 	}
	}).play();	
}

/*------------------------ DRAW BOUNCING BALL ------------------------*/

function drawBouncingBall(){
	var stage = new createjs.Stage("myCanvas");
	createjs.Ticker.addEventListener("tick", tick);
	createjs.MotionGuidePlugin.install();

	var shape = new createjs.Shape();
	shape.graphics.beginFill("#ff00ff").drawCircle(0,0,50);
	stage.addChild(shape);

	createjs.Tween.get(shape).to({guide:{ path:[0,0, 200,0,200,200, 350,100,450,200] }},1000);

	var path = new createjs.Shape();
	path.graphics.beginStroke("#ff00ff").moveTo(0,0).curveTo(200,0,200,200).curveTo(350,100,450,200);
	stage.addChild(path);

	function tick(event) {
	    stage.update();
	}
}

/*------------------------ DRAW BACKGROUND SLIDE ------------------------*/

function drawBackgroundChange(){
	var w2 = 10;
	var backChange = two.makeRectangle(195,0,w2,2000);
		backChange.fill = "orange";
		two.update();

	two.bind("update", function (frameCount){
		w2 += 100;
		if(w2 < 2500){
			backChange.scale += 5;
		} else if(w2 >= 2000){
		 	backChange.translation.x += 100;
		}
	}).play();
}

/*------------------------ DRAW EXPLOSION -------------------------------*/

function drawExplosion(){
	var x = 650;
	var y = 300;
	var circle1 = two.makeCircle(x,y,10);
		circle1.fill="#CC3399";
		circle1.noStroke();

	var circle2 = two.makeCircle(x, y, 10);
		circle2.fill="#CC3399";
		circle2.noStroke();

	var circle3 = two.makeCircle(x, y, 10);
		circle3.fill="#CC3399";
		circle3.noStroke();

	var circle4 = two.makeCircle(x, y, 10);
		circle4.fill="#CC3399";
		circle4.noStroke();

	var circle5 = two.makeCircle(x, y, 10);
		circle5.fill="#CC3399";
		circle5.noStroke();

		two.update();

	two.bind("update", function (frameCount){
		x+=10;
		if(x < 750){
			circle1.translation.x += 5;
			circle2.translation.x -= 10;
			circle3.translation.y -= 15;
			circle4.translation.x += 20;
			circle5.translation.y += 20;
		} 
		else if (x >= 750){
			circle1.translation.x -= 5;
			circle2.translation.x += 10;
			circle3.translation.y += 15;
			circle4.translation.x -= 20;
			circle5.translation.y -= 20;
		}
	}).play();
}

/*------------------------ DRAW MOVING SQUARE -------------------------------*/

function drawMovingSquare(){
	var line1 = two.makeLine(520, 150, 570, 150);
		line1.stroke="#fff";
		line1.linewidth = 5;

	var line2 = two.makeLine(570, 150, 600, 180);
		line2.stroke="#fff";
		line2.linewidth = 5;

	var line3 = two.makeLine(600, 180, 600, 220);
		line3.stroke="#fff";
		line3.linewidth = 5;

	var line4 = two.makeLine(600, 220, 570, 250);
		line4.stroke="#fff";
		line4.linewidth = 5;

	var line5 = two.makeLine(570, 250, 520, 250);
		line5.stroke="#fff";
		line5.linewidth = 5;

	var line6 = two.makeLine(520, 250, 490, 220);
		line6.stroke="#fff";
		line6.linewidth = 5;

	var line7 = two.makeLine(490, 220, 490, 180);
		line7.stroke="#fff";
		line7.linewidth = 5;

	var line8 = two.makeLine(490, 180, 520, 150);
		line8.stroke="#fff";
		line8.linewidth = 5;

	var group = two.makeGroup(line1, line2, line3, line4, line5, line6, line7, line8);
		group.translation.set(650, 320);
		group.scale = 0.4;

		two.update();

	two.bind("update", function (frameCount){
		if(group.scale < 1){
	 	 var t =  0.05;
   		group.rotation += t 
	 	}
	}).play();
}

/*------------------------ DRAW CIRCLE AGAIN -------------------------------*/

function drawCircleNoFill(){
	var shapeRadius = 300
	// two has convenience methods to create shapes.
	var circle = two.makeCircle( winWidth/2, winHeight/2, shapeRadius);

	// The object returned has many stylable properties:
	circle.noFill();
	circle.stroke = '#CC33FF'; // Accepts all valid css color
	circle.linewidth = 10;

	//Calling two.update() creates the circle
	two.update();

	//The following function updates the circle's scale
	two.bind("update", function (frameCount){
		if(circle.scale > 0){
			circle.scale += 0.04;
		}
	}).play();			
}

/*------------------------------ DRAW SPLASH -----------------------------*/

 function drawSplash() {

          var squished = false;

          Two.Resolution = 32;

          var blob = two.makeCircle(two.width / 2, two.height / 2, two.height / 3);
          blob.noFill();
          blob.stroke="#FF6699";
          blob.linewidth = 2;

          reset();

          two
            .bind('update', function() {
              if (!squished) {
                for (var i = 0; i < blob.vertices.length; i++) {
                  var v = blob.vertices[i];
                  var d = v.destination;

                  if (v.equals(d)) {
                    squished = true;
                    break;
                  }

                  v.x += (d.x - v.x) * 0.125;
                  v.y += (d.y - v.y) * 0.125;
                }
                return;
              }

              var outside = true;

              for (var i = 0; i < blob.vertices.length; i++) {
                var v = blob.vertices[i];
                v.y += v.step;
                v.step *= 1.125;
                if (v.y < two.height) {
                  outside = false;
                }
              }

              if (outside) {
                reset();
              }

            }).play();

          function reset() {

            blob.translation.set(two.width / 2, two.height / 2);

            squished = false;

            for (var i = 0; i < blob.vertices.length; i++) {
              var v = blob.vertices[i];
              var pct = (i + 1) / blob.vertices.length;
              var theta = pct * Math.PI * 2;
              var radius = Math.random() * two.height / 3 + two.height / 6;
              var x = radius * Math.cos(theta);
              var y = radius * Math.sin(theta);
              v.set(two.height / 3 * Math.cos(theta), two.height / 3 * Math.sin(theta));
              v.destination = new Two.Vector(x, y);
              v.step = Math.sqrt(Math.random()) + 2;
            }

          }

        };




