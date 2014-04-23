//------------------------------
// chnage the current loop hash
//------------------------------
$(document).ready(function(){
  musicLoop = {
    loadLoop: function(id){
      // switch out loop arrays
      if (id == 0){
        loopKeysTimes = newKeysTimes;
        $loopName.val('')
      } else {
        loopKeysTimes = savedKeysTimes[id];
        $loopName.val(loopKeysTimes.name)
      };
      // remove the old blips on screen
      $('.key-blip').remove();
      $('.circlelive_visible').removeClass('circlelive_visible')
      // draw the blips for the new loop
      $.each(loopKeysTimes, function(time, keys){
        if (!( (time == 'name') || (time == 'id') ) ){
          $.each(keys, function(index, key){
            // call the function to show the key
            musicLoop.plotKey(key, time);
          });
        };
      });
      this.resetCSS();
    },
    resetCSS: function(){
      console.log('resetCss');
      // remove the cued class from the button
      $('.current-loop').removeClass('current-loop');
      $('.cued-loop').addClass('current-loop');
      $('.cued-loop').removeClass('cued-loop');
      console.log(loopKeysTimes)
      // switch cuedLoop back
      cuedLoop = false;
    },
    playBlips: function(countBar){
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
    },
    //-------------------------------------------------
    // Save each keystroke (key and time) to the hash
    // log keypress KEY and TIME so we can plot it on the screen
    // save Key and curretn Time to the hash - it then fires plotKey to draw it on screen
    //-------------------------------------------------
    makeKey: function(key){
      // check to see if there's already a key saved at this time
      if (!newKeysTimes[countBar]){
         newKeysTimes[countBar] = []
      }
      // add key to time value within hash
      newKeysTimes[countBar].push(key);
      // call the function to show the key
      this.plotKey(key, countBar);
    },
    //-------------------------
    // Plot the blips on screen
    // KH This draws the key according to it's time on the grid
    // KH create a plotCount variable so each blip can have a unique ID
    //-------------------------
    plotCount: 0,
    plotKey: function(key, time){
      var $keyBlip = $('<div class="key-blip kb' + key + '" id="blip' + key + 'at' + time + '" />').css({
        left: ($loopWindow.width() / 200) * time + 'px',
        top: ($gridVert) * key + 'px'
      }).appendTo($loopWindow);
      this.plotCount += 1;
    },
    animation: function(letter){
    $circleQ.addClass('circlelive');
    $circleQ.addClass('circlelive_visible');
    setTimeout(function() {
      $circleQ.removeClass('circlelive');
    }, 100);
  },
  }
});