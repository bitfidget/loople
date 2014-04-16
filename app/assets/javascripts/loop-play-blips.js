// KH Playback the saved blips on screen
var playBlips = function(){
  $.each(loopKeys, function( index, value ) {
    if (countBar === loopTimes[index]){
      blipPress(value);
      $('#' + (index + 1)).addClass('blipPlay');
      setTimeout(function() {
        $('#' + (index + 1)).removeClass('blipPlay');
      }, 100);
    };
  });
};

// // KH Playback the saved blips on screen
// var playBlips = function(countBar){
//   var blips = []

//   $.each(loopTimes, function( index, value ) {
//     blips[value] = 

//   }


//     if (countBar === loopTimes[index]){
//       // play the Blip
//       blipPress(value);
//       // add/remove the class for the animation
//       $('#' + (index + 1)).addClass('blipPlay');
//       setTimeout(function() {
//         $('#' + (index + 1)).removeClass('blipPlay');
//       }, 100);
//     };
//   });
// };

// //blipPress


// var playBlips(counter) {

//     var blips = {

//         18: [],

//         27: [],

//         200: []

//     }

//     var notes = blips[counter];

// }

// playBlips(18)

// refactor using the counterBar variable to call the correct blip at a time, rather than doing this EVERY single stepof the way