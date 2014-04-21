//------------------------------
// chnage the current loop hash
//------------------------------

loadLoop = function(id){
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
        plotKey(key, time);
      });
    };
  });
  // remove the cued class from the button
  $('.current-loop').removeClass('current-loop');
  $('.cued-loop').addClass('current-loop');
  $('.cued-loop').removeClass('cued-loop');
  console.log(loopKeysTimes)
  // switch cuedLoop back
  cuedLoop = false;
};