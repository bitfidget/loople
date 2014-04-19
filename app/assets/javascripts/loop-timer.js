//-------------------------------------------------
// The global timer function - all LOOP starts here
//-------------------------------------------------

// BPM = (60 / (loopTime/1000) ) * 4
// KH create the counter - this runs everything! Currently it sets up 200 steps, regardless of tempo (so should scale OK), so it resets to 0 at 200.

var timerStart = function(){
  countBar = 0;
  counterMain = setInterval(function(){
    if (countBar >= 200){
      countBar = 0;
      // loadBlips()
    };
    // KH playblips plays each of the saved keys - but this gets called on EVERY step of the loop, it would be nice to refactor this later
    playBlips(countBar);
    // KH animate the playbar
    $loopHead.css({
      left: ($loopWindow.width() / 200) * countBar + 'px'
    }); 
    metronome(countBar);
    countBar++;
  }, 
  loopTime/200);
}