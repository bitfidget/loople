//------------------------------
// to load a saved loop via ajax
//------------------------------

var $loadLoops = 0;

$(document).ready(function(){
  $loadLoops = $('#loops-saved');
  $loadLoops.on('click' , '.load-loop', function(event){
    event.preventDefault();
    var loopToLoad = this.class
    console.log(loopToLoad);
  });
});

