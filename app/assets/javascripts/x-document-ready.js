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
  
  // save loop fields
  var $loopName = $('#loop-name');
  var $loopColour = $('#loop-colour');

  // the navigation to load saved loops into
  $loopNav = $('#loop-nav');
 


//------------------------------------------------------------------------------------------------------------
// Create listeners for saving loop and removing blips from grid
//------------------------------------------------------------------------------------------------------------

  $('form#loop-save').on('click', 'button', function(event) {
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
  
  
  $loopNav.on('click', '.load-loop', function(){
    var id = $(this).closest('li').data('id')
    console.log('play ' + id)
  });
  $loopNav.on('click', '.delete-loop', function(){
    var id = $(this).closest('li').data('id');
    $(this).closest('li').fadeOut(function(){
      loopAjax.deleteLoop(id);
    });
  });


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
