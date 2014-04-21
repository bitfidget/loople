//------------------------------------------------------------------------------------------------------------
// not usre if this is best practice but it would appear to makse sense - all doc ready functions:
//------------------------------------------------------------------------------------------------------------
$(document).ready(function(){

//------------------------------------------------------------------------------------------------------------
// 1. set up all the HTML DOM variables
//------------------------------------------------------------------------------------------------------------ 

  $loopWindow = $('#loop-window');
  $animWindow = $('#anim-window');
  $column = $('#column');
  $loopHead = $('#loop-head');

  $startBpm = $('#startBpm');
  $bpmPlus = $('#bpmPlus');
  $bpmMinus = $('#bpmMinus');
  $bpm = $('#bpm');

  // add some dimensions according to window size
  $loopWindow.css({
    height: winHeight + 'px'
  });
  $animWindow.css({
    height: winHeight + 'px'
  });
  $column.css({
    height: winHeight + 'px'
  });
  $gridVert = (winHeight / 27);

  // the size of the grid
  grid = ($animWindow.width() / steps);
  
//------------------------------------------------------------------------------------------------------------
// DOM items to listen to
//------------------------------------------------------------------------------------------------------------  

  // the navigation to load saved loops into
  $loopNav = $('#loop-nav');

  // the nmae field for saving loop
  $loopName = $('#loop-name');
 

//------------------------------------------------------------------------------------------------------------
// Create listeners for saving loop and removing blips from grid
//------------------------------------------------------------------------------------------------------------

  $('form#loop-save').on('click', '.save-loop', function(event) {
    event.preventDefault();
    // KH get the loop name, then clear the field
    var name = $loopName.val();
    $loopName.val('');
    var colour = '000000';
    // KH make Ajax goodness happen
    loopAjax.createLoop(name, colour, loopKeysTimes);
  });

//------------------------------------------------------------------------------------------------------------
// Listener for removing objects from the window
//------------------------------------------------------------------------------------------------------------

  $loopWindow.on('click', '.key-blip', function(event) {
    event.preventDefault();
    // KH Delete the blip from the hash by getting it's id which is the format of
    // blipKEYatTime so we need to firstly get those two values out of the string 
    removeKey = (this.id).split('at')[0].replace('blip', '');
    removeTime = (this.id).split('at')[1];
    console.log(removeKey)
    // KH now remove that key from the correct array inside the hash
    loopKeysTimes[removeTime].splice($.inArray(removeKey, loopKeysTimes[removeTime]),1);
    // KH check to see if that hash value is now empty, if it is, delete it
    if (loopKeysTimes[removeTime].length == 0){
      delete loopKeysTimes[removeTime];
    };
    // KH Delete the blip from the screen
    this.remove();
  })

//------------------------------------------------------------------------------------------------------------
// the listeners on the saved loops navigation:
//------------------------------------------------------------------------------------------------------------  
  
  // Load a saved loop
  $loopNav.on('click', '.load-loop', function(){
    var id = $(this).closest('li').data('id');
    $(this).closest('li').addClass('cued-loop');
    cuedLoop = true;
    nextLoop = id;
  });

  // delete a saved loop
  $loopNav.on('click', '.delete-loop', function(){
    var id = $(this).closest('li').data('id');
    $(this).closest('li').fadeOut(function(){
      loopAjax.deleteLoop(id);
    });
  });

  // clear the current new loop
  $loopNav.on('click', '.clear-loop', function(){
    // clear the current hash
    loopKeysTimes = {};
    // clear all the blips
    $('.key-blip').remove();
    $('.circlelive_visible').removeClass('circlelive_visible')
  });


//------------------------------------------------------------------------------------------------------------
// ctivates the metronome and changes the html on the button On/Off
//------------------------------------------------------------------------------------------------------------  

  $startBpm.click(function(){
    if (metroSound === false){
      metroSound = true;
      $startBpm.text("turn metronome off");
    } else {    
      metroSound = false;
      $startBpm.text("turn metronome on");
    };
  });

//-----------------------------------------------------------
// TEMPO chnage
//-----------------------------------------------------------

  //CG: increases the value of the bpm input everytime the + button is pressed.
  //The metronome should go faster as
  $($bpmPlus).click(function(){
    var valueBpm = parseInt($bpm.text());
    
    newBpm = valueBpm + 5;
    loopTime = Math.floor((60/(newBpm/4))*1000);
    $bpm.text(newBpm);

    timerReset();
  });

  //Decreases the value of the bpm and the speed of the metronome.
  $($bpmMinus).click(function(){
    var valueBpm = parseInt($bpm.text());
    
    newBpm = valueBpm - 5;
    loopTime = Math.floor((60/(newBpm/4))*1000);
    $bpm.text(newBpm);

    timerReset();
  });
  console.log($bpm)


//------------------------------------------------------------------------------------------------------------
// START: all functions that need to be called when we're ll ready to fly:
//------------------------------------------------------------------------------------------------------------ 

  // load saved loops
  loopAjax.loadLoops();

  // load the grid
  addGrid(steps);

  // start the timer
  timerStart();

});
