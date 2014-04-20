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
    $circleQ.addClass('circlelive');
    $circleQ.addClass('circlelive_visible');
    setTimeout(function() {
      $circleQ.removeClass('circlelive');
    }, 100);
  },
    animation2: function(){
    $circleW.addClass('circlelive');
    $circleW.addClass('circlelive_visible');
    setTimeout(function() {
      $circleW.removeClass('circlelive');
    }, 100);
  },
    animation3: function(){
    $circleE.addClass('circlelive');
    $circleE.addClass('circlelive_visible');
    setTimeout(function() {
      $circleE.removeClass('circlelive');
    }, 100);
  },
    animation4: function(){
    $circleR.addClass('circlelive');
     $circleR.addClass('circlelive_visible');
    setTimeout(function() {
      $circleR.removeClass('circlelive');
    }, 100);
  },
    animation5: function(){
    $circleT.addClass('circlelive');
    $circleT.addClass('circlelive_visible');
    setTimeout(function() {
      $circleT.removeClass('circlelive');
    }, 100);
  },
    animation6: function(){
    $circleY.addClass('circlelive');
    $circleY.addClass('circlelive_visible');
    setTimeout(function() {
      $circleY.removeClass('circlelive');
    }, 100);
  },
    animation7: function(){
    $circleU.addClass('circlelive');
    $circleU.addClass('circlelive_visible');
    setTimeout(function() {
      $circleU.removeClass('circlelive');
    }, 100);
  },
    animation8: function(){
    $circleI.addClass('circlelive');
    $circleI.addClass('circlelive_visible');
    setTimeout(function() {
      $circleI.removeClass('circlelive');
    }, 100);
  },
    animation9: function(){
    $circleO.addClass('circlelive');
    $circleO.addClass('circlelive_visible');
    setTimeout(function() {
      $circleO.removeClass('circlelive');
    }, 100);
  },
    animation10: function(){
    $circleP.addClass('circlelive');
    $circleP.addClass('circlelive_visible');
    setTimeout(function() {
      $circleP.removeClass('circlelive');
    }, 100);
  },
    animation11: function(){
    $circleA.addClass('circlelive');
    $circleA.addClass('circlelive_visible');
    setTimeout(function() {
      $circleA.removeClass('circlelive');
    }, 100);
  },
    animation12: function(){
    $circleS.addClass('circlelive');
    $circleS.addClass('circlelive_visible');
    setTimeout(function() {
      $circleS.removeClass('circlelive');
    },100);
  },
    animation13: function(){
    $circleD.addClass('circlelive');
    $circleD.addClass('circlelive_visible');
    setTimeout(function() {
      $circleD.removeClass('circlelive');
    }, 100);
  },
    animation14: function(){
    $circleF.addClass('circlelive');
    $circleF.addClass('circlelive_visible');
    setTimeout(function() {
      $circleF.removeClass('circlelive');
    }, 100);
  },
    animation15: function(){
    $circleG.addClass('circlelive');
    $circleG.addClass('circlelive_visible');
    setTimeout(function() {
      $circleG.removeClass('circlelive');
    }, 100);
  },
    animation16: function(){
    $circleH.addClass('circlelive');
    $circleH.addClass('circlelive_visible');
    setTimeout(function() {
      $circleH.removeClass('circlelive');
    }, 100);
  },
    animation17: function(){
    $circleJ.addClass('circlelive');
    $circleJ.addClass('circlelive_visible');
    setTimeout(function() {
      $circleJ.removeClass('circlelive');
    }, 100);
  },
    animation18: function(){
    $circleK.addClass('circlelive');
    $circleK.addClass('circlelive_visible');
    setTimeout(function() {
      $circleK.removeClass('circlelive');
    }, 100);
  },
    animation19: function(){
    $circleL.addClass('circlelive');
    $circleL.addClass('circlelive_visible');
    setTimeout(function() {
      $circleL.removeClass('circlelive');
    }, 100);
  },
    animation20: function(){
    $circleZ.addClass('circlelive');
    $circleZ.addClass('circlelive_visible');
    setTimeout(function() {
      $circleZ.removeClass('circlelive');
    }, 100);
  },
    animation21: function(){
    $circleX.addClass('circlelive');
    $circleX.addClass('circlelive_visible');
    setTimeout(function() {
      $circleX.removeClass('circlelive');
    }, 100);
  },
    animation22: function(){
    $circleC.addClass('circlelive');
    $circleC.addClass('circlelive_visible');
    setTimeout(function() {
      $circleC.removeClass('circlelive');
    }, 100);
  },
    animation23: function(){
    $circleV.addClass('circlelive');
    $circleV.addClass('circlelive_visible');
    setTimeout(function() {
      $circleV.removeClass('circlelive');
    }, 100);
  },
    animation24: function(){
    $circleB.addClass('circlelive');
    $circleB.addClass('circlelive_visible');
    setTimeout(function() {
      $circleB.removeClass('circlelive');
    }, 100);
  },
    animation25: function(){
    $circleN.addClass('circlelive');
    $circleN.addClass('circlelive_visible');
    setTimeout(function() {
      $circleN.removeClass('circlelive');
    }, 100);
  },
    animation26: function(){
    $circleM.addClass('circlelive');
    $circleM.addClass('circlelive_visible');
    setTimeout(function() {
      $circleM.removeClass('circlelive');
    }, 100);
  },
}

