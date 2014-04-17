//------------------------------
// to load a saved loop via ajax
//------------------------------

var $loadLoops = 0;

$(document).ready(function(){
  // KH listen for clicks on the loops saved nav
  $loadLoops = $('#loops-saved');
  $loadLoops.on('click' , '.load-loop', function(event){
    event.preventDefault();
    // KH get the id of the button clicked
    var loopToLoad = $(this).attr('id');
    // KH remove 'loop_' from that string
    loopID = loopToLoad.replace('loop_', '');
    // KH now you have the ID of the Loop object you need to load, send it to the ajax function
    loadKeys = ('loopKeys_' + loopID)
    console.log(loadKeys)

  });
});


// need to make the button clicked get its ID so we can load the loop
