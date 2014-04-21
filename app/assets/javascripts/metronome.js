//-----------------------------------------------------------
// CREATES THE METRONOME
//-----------------------------------------------------------
var metroSound = false;

var metronome = function(){
  if(countBar % (64/steps)  == 0){
    if (metroSound === true){
      playSound('metro');
      $startBpm.toggleClass('metro-tic');
    };
  };
};
