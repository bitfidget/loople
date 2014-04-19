  // KH Time that sets the tempo of the loop. 120bpm = 2 beats per second, so one bar of 4 beats should be 2000s of a second
  // KH lets create a variable for the time so we can change it easily later
  var loopTime = 2000
  
$(document).ready(function(){
  // KH the first dom elements we need to mess with will be the window and playhead
  var $loopWindow = $('#loop-window');
  var $animWindow = $('#anim-window');
  var $column = $('#column');
  var $loopHead = $('#loop-head');
  $animCircle = $('#animated-circle');
  $loopWindow.css({
    height: winHeight + 'px'
  });
  $animWindow.css({
    height: winHeight + 'px'
  });
  $column.css({
    height: winHeight + 'px'
  });
  $gridVert = (winHeight / 27);
  // KH dom form fields
  var $loopName = $('#loop-name');
  var $loopColour = $('#loop-colour');

//-------------------------------------------------
// The global timer function - all LOOP starts here
//-------------------------------------------------

  // KH create the counter - this runs everything! Currently it sets up 200 steps, regardless of tempo (so should scale OK), so it resets to 0 at 200.
  // KH at 0 the counter fires-off the playbar animation (moveHead)
  counterMain = setInterval(function(){
     if (countBar >= 200){
       countBar = 0;
       //loadBlips()
     };
     // KH playblips plays each of the saved keys - but this gets called on EVERY step of the loop, it would be nice to refactor this later
     playBlips(countBar);
     // KH animate the playbar
     $loopHead.css({
       left: ($loopWindow.width() / 200) * countBar + 'px'
     }); 
     metronome();

     countBar++;
      //console.log(countBar)
   }, 
   (loopTime/200));
   // console.log(loopTime)
  
//-------------------------------------------------
// Save each keystroke (key and time) to the hash
// log keypress KEY and TIME so we can plot it on the screen
// save Key and curretn Time to the hash - it then fires plotKey to draw it on screen
//-------------------------------------------------

makeKey = function(key){
  
  // check to see if there's already a key saved at this time
  if (!newKeysTimes[countBar]){
    newKeysTimes[countBar] = []
  }
  
  // add key to time value within hash
  newKeysTimes[countBar].push(key);
  
  // call the function to show the key
  plotKey(key, countBar);
};

//-------------------------
// Plot the blips on screen
// KH This draws the key according to it's time on the grid
// KH create a plotCount variable so each blip can have a unique ID
//-------------------------

<<<<<<< HEAD
  // KH This draws the key according to it's time on the grid
  // KH create a plotCount variable so each blip can have a unique ID
  var plotCount = 0;
  var plotKey = function(key, time){
    var $keyBlip = $('<div class="key-blip kb' + key + '" id="blip' + key + 'at' + time + '" />').css({
      left: ($loopWindow.width() / 200) * time + 'px',
      top: ($gridVert) * key + 'px'
    }).appendTo($loopWindow);
    plotCount += 1;
  };

//--------------------------------------------------------------
// Create listeners for saving loop and removing blips from grid
//--------------------------------------------------------------

  // KH all listeners for this section will start from here...
  // KH The save loop button and form
  $('form#loop-save').on('click', 'button', function(event) {
    event.preventDefault();
    // KH get the loop name, then clear the field
    var name = $loopName.val();
    $loopName.val('');
    // KH get the loop colour
    var colour = $loopColour.val().replace('#', '');
    // KH make Ajax goodness happen
    loopAjax.createLoop(name, colour, loopKeysTimes);
  });

  // KH the listener for removing objects from the window
  $loopWindow.on('click', '.key-blip', function(event) {
    event.preventDefault();
    // KH Delete the blip from the hash by getting it's id which is the format of
    // blipKEYatTime so we need to firstly get those two values out of the string 
    console.log(this.id);
    removeKey = (this.id).split('at')[0].replace('blip', '');
    removeTime = (this.id).split('at')[1];

    // KH now remove that key from the correct array inside the hash
    loopKeysTimes[removeTime].splice($.inArray(removeKey, loopKeysTimes[removeTime]),1);
    // KH check to see if that hash value is now empty, if it is, delete it
    if (loopKeysTimes[removeTime].length == 0){
      delete loopKeysTimes[removeTime];
    };

    console.log(loopKeysTimes);
    // KH Delete the blip from the screen
    this.remove();
  })

}); // end of document.ready function

  
var plotCount = 0;
var plotKey = function(key, time){
  var $keyBlip = $('<div class="key-blip kb' + key + '" id="blip' + key + 'at' + time + '" />').css({
    left: ($loopWindow.width() / 200) * time + 'px',
    top: ($gridVert) * key + 'px'
  }).appendTo($loopWindow);
  plotCount += 1;
};

