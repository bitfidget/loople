// KH Playback the saved blips on screen
var playBlips = function(countBar){
  // grab the loopKey (Keys) that has the same time as the current time (countBar)
  var keys = loopKeysTimes[countBar];
  // if there are no keys at this location - move on
  if (! keys) {
    return;
  }
  // if there's a key here, play it
  $.each(keys, function(i, key){
    blipPress(key)
    blipID = ('#blip' + key + 'at' + countBar)
    // apply stype to the blip using it's id in format: blip11at28
    $(blipID).addClass('blipPlay');
    setTimeout(function() {
      $(blipID).removeClass('blipPlay');
    }, 50);
  });
};