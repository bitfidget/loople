//CG: Declaring a variable for each letter.
var $circleQ = 0;
var $circleW = 0;
var $circleE = 0;
var $circleR = 0;
var $circleT = 0;
var $circleY = 0;
var $circleU = 0;
var $circleI = 0;
var $circleO = 0;
var $circleP = 0;
var $circleA = 0;
var $circleS = 0;
var $circleD = 0;
var $circleF = 0;
var $circleG = 0;
var $circleH = 0;
var $circleJ = 0;
var $circleK = 0;
var $circleL = 0;
var $circleZ = 0;
var $circleX = 0;
var $circleC = 0;
var $circleV = 0;
var $circleB = 0;
var $circleN = 0;
var $circleM = 0;

$(document).ready(function(){
  //CG: Assigning all variables to the divs so it loads everything once when the document is ready.
  $circleQ = $('#circleQ');
  $circleW = $('#circleW');
  $circleE = $('#circleE');
  $circleR = $('#circleR');
  $circleT = $('#circleT');
  $circleY = $('#circleY');
  $circleU = $('#circleU');
  $circleI = $('#circleI');
  $circleO = $('#circleO');
  $circleP = $('#circleP');
  $circleA = $('#circleA');
  $circleS = $('#circleS');
  $circleD = $('#circleD');
  $circleF = $('#circleF');
  $circleG = $('#circleG');
  $circleH = $('#circleH');
  $circleJ = $('#circleJ');
  $circleK = $('#circleK');
  $circleL = $('#circleL');
  $circleZ = $('#circleZ');
  $circleX = $('#circleX');
  $circleC = $('#circleC');
  $circleV = $('#circleV');
  $circleB = $('#circleB');
  $circleN = $('#circleN');
  $circleM = $('#circleM')
});

/*------------------------------------------------------
CG: Adds 2 classes to each key. One to make the circle pulse 
when the key is pressed and one that lets the circle displayed 
on the screen afterwards.
------------------------------------------------------ */
var circleAnimate = {
  animation1: function(){
    $circleQ.addClass('circleQ');
    $circleQ.addClass('circle_animationQ');
    setTimeout(function() {
      $circleQ.removeClass('circleQ');
    }, 50);
  },
    animation2: function(){
    $circleW.addClass('circleW');
    $circleW.addClass('circle_animationW');
    setTimeout(function() {
      $circleW.removeClass('circleW');
    }, 50);
  },
    animation3: function(){
    $circleE.addClass('circleE');
    $circleE.addClass('circle_animationE');
    setTimeout(function() {
      $circleE.removeClass('circleE');
    }, 50);
  },
    animation4: function(){
    $circleR.addClass('circleR');
     $circleR.addClass('circle_animationR');
    setTimeout(function() {
      $circleR.removeClass('circleR');
    }, 50);
  },
    animation5: function(){
    $circleT.addClass('circleT');
    $circleT.addClass('circle_animationT');
    setTimeout(function() {
      $circleT.removeClass('circleT');
    }, 50);
  },
    animation6: function(){
    $circleY.addClass('circleY');
    $circleY.addClass('circle_animationY');
    setTimeout(function() {
      $circleY.removeClass('circleY');
    }, 50);
  },
    animation7: function(){
    $circleU.addClass('circleU');
    $circleU.addClass('circle_animationU');
    setTimeout(function() {
      $circleU.removeClass('circleU');
    }, 50);
  },
    animation8: function(){
    $circleI.addClass('circleI');
    $circleI.addClass('circle_animationI');
    setTimeout(function() {
      $circleI.removeClass('circleI');
    }, 50);
  },
    animation9: function(){
    $circleO.addClass('circleO');
    $circleO.addClass('circle_animationO');
    setTimeout(function() {
      $circleO.removeClass('circleO');
    }, 50);
  },
    animation10: function(){
    $circleP.addClass('circleP');
    $circleP.addClass('circle_animationP');
    setTimeout(function() {
      $circleP.removeClass('circleP');
    }, 50);
  },
    animation11: function(){
    $circleA.addClass('circleA');
    $circleA.addClass('circle_animationA');
    setTimeout(function() {
      $circleA.removeClass('circleA');
    }, 50);
  },
    animation12: function(){
    $circleS.addClass('circleS');
    $circleS.addClass('circle_animationS');
    setTimeout(function() {
      $circleS.removeClass('circleS');
    },50);
  },
    animation13: function(){
    $circleD.addClass('circleD');
    $circleD.addClass('circle_animationD');
    setTimeout(function() {
      $circleD.removeClass('circleD');
    }, 50);
  },
    animation14: function(){
    $circleF.addClass('circleF');
    $circleF.addClass('circle_animationF');
    setTimeout(function() {
      $circleF.removeClass('circleF');
    }, 50);
  },
    animation15: function(){
    $circleG.addClass('circleG');
    $circleG.addClass('circle_animationG');
    setTimeout(function() {
      $circleG.removeClass('circleG');
    }, 50);
  },
    animation16: function(){
    $circleH.addClass('circleH');
    $circleH.addClass('circle_animationH');
    setTimeout(function() {
      $circleH.removeClass('circleH');
    }, 50);
  },
    animation17: function(){
    $circleJ.addClass('circleJ');
    $circleJ.addClass('circle_animationJ');
    setTimeout(function() {
      $circleJ.removeClass('circleJ');
    }, 50);
  },
    animation18: function(){
    $circleK.addClass('circleK');
    $circleK.addClass('circle_animationK');
    setTimeout(function() {
      $circleK.removeClass('circleK');
    }, 50);
  },
    animation19: function(){
    $circleL.addClass('circleL');
    $circleL.addClass('circle_animationL');
    setTimeout(function() {
      $circleL.removeClass('circleL');
    }, 50);
  },
    animation20: function(){
    $circleZ.addClass('circleZ');
    $circleZ.addClass('circle_animationZ');
    setTimeout(function() {
      $circleZ.removeClass('circleZ');
    }, 50);
  },
    animation21: function(){
    $circleX.addClass('circleX');
    $circleX.addClass('circle_animationX');
    setTimeout(function() {
      $circleX.removeClass('circleX');
    }, 50);
  },
    animation22: function(){
    $circleC.addClass('circleC');
    $circleC.addClass('circle_animationC');
    setTimeout(function() {
      $circleC.removeClass('circleC');
    }, 50);
  },
    animation23: function(){
    $circleV.addClass('circleV');
    $circleV.addClass('circle_animationV');
    setTimeout(function() {
      $circleV.removeClass('circleV');
    }, 50);
  },
    animation24: function(){
    $circleB.addClass('circleB');
    $circleB.addClass('circle_animationB');
    setTimeout(function() {
      $circleB.removeClass('circleB');
    }, 50);
  },
    animation25: function(){
    $circleN.addClass('circleN');
    $circleN.addClass('circle_animationN');
    setTimeout(function() {
      $circleN.removeClass('circleN');
    }, 50);
  },
    animation26: function(){
    $circleM.addClass('circleM');
    $circleM.addClass('circle_animationM');
    setTimeout(function() {
      $circleM.removeClass('circleM');
    }, 50);
  },
}

