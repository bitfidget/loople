//-------------------------------------------------
// Save each keystroke (key and time) to the hash
// log keypress KEY and TIME so we can plot it on the screen
// save Key and curretn Time to the hash - it then fires plotKey to draw it on screen
//-------------------------------------------------

makeKey = function(key){
  if (dontMakeKey === false){
    // check to see if there's already a key saved at this time
    if (!loopKeysTimes[countBar]){
      loopKeysTimes[countBar] = []
    }
    
    // add key to time value within hash
    loopKeysTimes[countBar].push(key);
    
    // call the function to show the key
    plotKey(key, countBar);
  }
};

//-------------------------
// Plot the blips on screen
// KH This draws the key according to it's time on the grid
// KH create a plotCount variable so each blip can have a unique ID
//-------------------------

  
var plotCount = 0;
var plotKey = function(key, time){
  var $keyBlip = $('<div class="key-blip kb' + key + '" id="blip' + key + 'at' + time + '" />').css({
    left: ($loopWindow.width() / 200) * time + 'px',
    top: ($gridVert) * key + 'px'
  }).appendTo($loopWindow);
  plotCount += 1;
};