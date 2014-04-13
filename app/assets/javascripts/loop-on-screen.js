$(document).ready(function(){
  // KH the first dom elements we need to mess with will be the window and playhead
  var $loopWindow = $('#loop-window');
  var $loopHead = $('#loop-head');
  // KH dom form fields
  var $loopName = $('#loop-name');
  var $loopColour = $('#loop-colour');

  // Time that sets the tempo of the loop. 120bpm = 2 beats per second, so one bar of 4 beats should be 2000s of a second
  // for testing porpoises, set timing to 60bpm
  // lets create a variable for the time so we can change it easily later
  var loopTime = 4000


  // the basic timing loop

  var timerStart = function(){
    var counter = 0
    counterID = setInterval(function(){
      makeBlip(counter)

  // KH Time that sets the tempo of the loop. 120bpm = 2 beats per second, so one bar of 4 beats should be 2000s of a second
  // KH lets create a variable for the time so we can change it easily later
  var loopTime = 2000


  // KH create the counter - this runs everything! Currently it sets up 200 steps, regardless of tempo (so should scale OK), so it resets to 0 at 200.
  // KH at 0 the counter fires-off the playbar animation (moveHead)
  var countBar = 0
  counterMain = setInterval(function(){
    if (countBar >= 200){
      countBar = 0
    };
    if (countBar == 0){

      moveHead()
    };
    $('#counter').text(countBar)
    countBar++;
  }, 
  loopTime/200);

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

  // KH ohhhkay so here we need to log keypress KEY and TIME so we can plot it on the screen
  // KH all keypresses are saved in the loopKeyTime array, under 2 different arrays
  // KH To access them by loopKeyTime[0].loopKeys[x] and loopKeyTime[0].loopTimes[x]
  var loopKeys = [];
  var loopTimes = [];
  var loopKeyTime = [loopKeys, loopTimes];


  // KH This saves the Key and curretn Time to the array - it then fires plotKey to draw it on screen
  var makeKey = function(key){
    loopKeys.push(key);
    loopTimes.push(countBar);
    plotKey(key, countBar);
  };


  // KH This draws the key according to it's time on the grid
  var plotKey = function(key, time){
    var $keyBlip = $('<div class="key-blip" />').css({
      left: ($loopWindow.width() / 200) * time + 'px'
    }).appendTo($loopWindow);
  }
  timerStart();


};

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

  // KH all listeners for this section will start from here...
  // KH The save loop button and form
  $('form#loop-save').on('click', 'button', function (event) {
    event.preventDefault();
    // KH get the loop name, then clear the field
    var name = $loopName.val();
    $loopName.val('');
    // KH get the loop colour
    var colour = $loopColour.val().replace('#', '');
    // KH get the loop keystrokes array
    var keyStrokes = loopKeyTime;
    // KH make Ajax goodness happen
    loopAjax.createLoop(name, colour, keyStrokes);
  });


  // KH check that forms are NOT currently focussed otherwsie typing in the form will also add keys!
  $('form input').focus(function(){
    console.log('form now has focus')
    $(document).unbind('keydown');
  });
  $('form input').blur(function(){
    console.log('form has lost focus')
    // if not focussed on a form, reload the keypress listener
    keyPress();
  });





// Charlies event listener for keys clicked - this will later be shared with everybody elses codes
var keyPress = function(){
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
};








// KH start these functions when all else is loaded
keyPress();

  

}); // end of document.ready function


// KH This stuff doesn't need to be in the document.ready function as it is called separately


