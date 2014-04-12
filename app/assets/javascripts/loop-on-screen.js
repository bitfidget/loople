
$(document).ready(function(){
  // the first dom elements we need to mess with will be the window and playhead
  var $loopWindow = $('#loop-window')
  var $loopHead = $('#loop-head')




  // Time that sets the tempo of the loop. 120bpm = 2 beats per second, so one bar of 4 beats should be 2000s of a second
  // for testing porpoises, set timing to 60bpm
  // lets create a variable for the time so we can change it easily later
  var loopTime = 4000

  var timerStart = function(){
    var counter = 0
    counterID = setInterval(function(){
      makeBlip(counter)
      moveHead()
      counter++;
    }, loopTime);
  };

  var makeBlip = function(counter){
    var $testBlip = $('<div class="blip">' + counter + '</div>').prependTo($loopWindow);
    setTimeout(function(){
      $testBlip.fadeOut(function(){
        $testBlip.remove()
      });
    }, 1000);
  };

  var moveHead = function(){
    var $loopHead = $('<div id="loop-head" />').prependTo($loopWindow);
    $loopHead.animate(
      {left: ($loopWindow.width()) + 'px'}, loopTime, 'linear', function(){
        this.remove();
      }
    );
  };




  timerStart();

});