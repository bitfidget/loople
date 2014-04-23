// //-------------------------------------------------
// // The global timer function - all LOOP starts here
// //-------------------------------------------------

// // BPM = (60 / (loopTime/1000) ) * 4
// // KH create the counter - this runs everything! Currently it sets up 200 steps, regardless of tempo (so should scale OK), so it resets to 0 at 200.

// var timerStart = function(){
//   counterMain = setInterval(function(){

// //-------------------------------------------------
// // Functions that need to happen ONCE every loop
// //-------------------------------------------------   

//     if (countBar >= 64){
//       // reset the counter
//       countBar = 0;
//       // load cued loop if it exists
//       if (cuedLoop === true){
//         musicLoop.loadLoop(nextLoop);
//       };
//     };

// //-------------------------------------------------
// // Functions that need to happen EVERY step of loop
// //------------------------------------------------- 

//     // Play blips
//     musicLoop.playBlips(countBar);
//     // Animate the playbar
//     $loopHead.css({
//       left: ($loopWindow.width() / 64) * countBar + 'px'
//     }); 
//     // Play the metronome
//     metronome(countBar);
//     // Keep count
//     countBar++;
//   }, 
//   loopTime/64);
// }

// var timerReset = function(){
//   clearInterval(counterMain);
//   timerStart();
// }