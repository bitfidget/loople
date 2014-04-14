$(document).ready(function(){
  // KH the first dom elements we need to mess with will be the window and playhead
  var $loopWindow = $('#loop-window');
  var $loopHead = $('#loop-head');
  // KH dom form fields
  var $loopName = $('#loop-name');
  var $loopColour = $('#loop-colour');


  // KH Time that sets the tempo of the loop. 120bpm = 2 beats per second, so one bar of 4 beats should be 2000s of a second
  // KH lets create a variable for the time so we can change it easily later
  var loopTime = 8000


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


  // the playhead - should animate using the same timeing as the loop
  var moveHead = function(){
    var $loopHead = $('<div id="loop-head" />').prependTo($loopWindow);
    $loopHead.animate(
      {left: ($loopWindow.width()) + 'px'}, loopTime, 'linear', function(){
        this.remove();
      }
    );
  };


  // KH ohhhkay so here we need to log keypress KEY and TIME so we can plot it on the screen
  // KH all keypresses are saved in the loopKeyTime array, under 2 different arrays
  // KH To access them by loopKeyTime[0].loopKeys[x] and loopKeyTime[0].loopTimes[x]
  var loopKeys = [];
  var loopTimes = [];
  var loopKeyTime = [loopKeys, loopTimes];


  // KH This saves the Key and curretn Time to the array - it then fires plotKey to draw it on screen
  makeKey = function(key){
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



// KH start these functions when all else is loaded
keyPress();

  

}); // end of document.ready function


// KH This stuff doesn't need to be in the document.ready function as it is called separately
