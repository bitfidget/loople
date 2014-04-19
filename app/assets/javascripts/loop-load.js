//------------------------------
// chnage the current loop hash
//------------------------------

loadLoop = function(id){
  // switch out loop arrays
  if (id == 0){
    loopKeysTimes = newKeysTimes;
  } else {
    loopKeysTimes = savedKeysTimes[id];
  };
  // remove the old blips on screen
  $('.key-blip').remove();
  // draw the blips for the new loop
  $.each(loopKeysTimes, function(time, keys){
    if (!( (time == 'name') || (time == 'modified') || (time == 'modified') ) ){
      $.each(keys, function(index, key){
        // call the function to show the key
        plotKey(key, time);
      });
    };
  });
  // remove the cued class from the button
  $('.cued-loop').removeClass('cued-loop');
  console.log('wtf??')
  // switch cuedLoop back
  cuedLoop = false;
};