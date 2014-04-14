// KH Playback the saved blips on screen
var playBlips = function(){
  $.each(loopKeys, function( index, value ) {
    console.log( index + ": " + value );
  });
  //key = 1 (q) time = 61 (/200)
  if (countBar === 61){
    playSound('clap');
    drawCircle();
    console.log('playsound from blip');
  };
};