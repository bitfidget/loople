$(document).ready(function(){
  // the first dom elements we need to mess with will be the window and playhead
  var $loopWindow = $('#loop-window')
  var $loopHead = $('#loop-head')

  // Time that sets the tempo of the loop. 120bpm = 2 beats per second, so one bar of 4 beats should be 2000s of a second
  // for testing porpoises, set timing to 60bpm
  // lets create a variable for the time so we can change it easily later
  var loopTime = 4000


  // the basic timing loop
  var timerStart = function(){
    var counter = 0
    counterID = setInterval(function(){
      makeBlip(counter)
      moveHead()
      counter++;
    }, loopTime);
  };

  var num = 0;
  // var counter = setInterval(start_count,1000);  
  // function start_count(type){     
  //     num++;     
  //     document.getElementById('num_div').innerHTML = num;
  // }
  // function stop_count(){    
  //     clearInterval(counter);    
  //     num = 0;
  // }

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

  var makeKey = function(key, time){

  }


  timerStart();

});

// the event listener for keys clicked
// $(document).keydown(function(e){
//   switch(e.keyCode){
//     //Letter 'Q'
//     case 81:
//       changeColor(0); //Grey
//       break;

//     //Letter 'W'
//     case 87:
//       changeColor(1); //Pink
//       break;

//     //Letter 'E'
//     case 69:
//       changeColor(2); //Green
//       break;

//     //Letter 'R'
//     case 82:
//       changeColor(3); //Purple
//       break;

//     //Letter 'T'
//     case 84:
//       changeColor(4); //Blue
//       break;

//     //Letter 'Y'
//     case 89:
//       changeColor(5); //Red
//       break;
//   }
// });