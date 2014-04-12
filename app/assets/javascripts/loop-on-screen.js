$(document).ready(function(){
  // the first dom elements we need to mess with will be the window and playhead
  var $loopWindow = $('#loop-window')
  var $loopHead = $('#loop-head')

  // Time that sets the tempo of the loop. 120bpm = 2 beats per second, so one bar of 4 beats should be 2000s of a second
  // for testing porpoises, set timing to 60bpm
  // lets create a variable for the time so we can change it easily later
  var loopTime = 1000
  var loopGrid = loopTime/$loopWindow.width()
  counterSub = 0


  // the not so basic timing loop which is the fine-tuning of the beats - this gets reset everytime the playhead returns to 0 (using the main timer)
  var logTime = function(i){
    countSub = i
    counterSub = setInterval(function(){
    countSub++;
  }, 
  (loopTime/1000));
  };

  // the basic timing loop which is all 4 beats
  var countMain = 0
  counterMain = setInterval(function(){
    if (counterSub != 0){
      clearInterval(counterSub);
    };
    logTime(0)
    moveHead()
    countMain++;
  }, 
  loopTime);



  // a test blip - this will be removed laterz
  var makeBlip = function(counter){
    var $testBlip = $('<div class="blip">' + counter + '</div>').prependTo($loopWindow);
    setTimeout(function(){
      $testBlip.fadeOut(function(){
        $testBlip.remove()
      });
    }, 1000);
  };

  // the playhead - should animate using the same timeing as the loop
  var moveHead = function(){
    var $loopHead = $('<div id="loop-head" />').prependTo($loopWindow);
    $loopHead.animate(
      {left: ($loopWindow.width()) + 'px'}, loopTime, 'linear', function(){
        this.remove();
      }
    );
  };

  // ohhhkay so here we need to log keypress KEY and TIME so we can plot it on the screen
  var loopKeys = [];
  var loopTimes = [];
  var loopKeyTime = [loopKeys, loopTimes];

  var makeKey = function(key){
    loopKeys.push(key);
    loopTimes.push(countSub);
    console.log(loopKeyTime);
    plotKey(key, countSub);
  };

  var plotKey = function(key, time){
    var $keyBlip = $('<div class="key-blip" />').css({
      left: ( time / loopGrid ) + 'px'
    }).appendTo($loopWindow);
  }



  // the event listener for keys clicked
  $(document).keydown(function(e){
    switch(e.keyCode){
      //Letter 'Q'
      case 81:
        makeKey('q');
        break;

      //Letter 'W'
      case 87:
        makeKey('w');
        break;

    }
  });



});

