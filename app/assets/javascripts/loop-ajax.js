// ----------------------------------------------------------------------------------
// KH create an object to deal with all Ajax Loop actions
// ----------------------------------------------------------------------------------

var loopAjax = {

// ----------------------------------------------------------------------------------
// ajax to save the new loop to the db
// ----------------------------------------------------------------------------------

  createLoop: function(loopName, loopColour, loopKeysTimes){

    console.log(loopKeysTimes);
    $.ajax({
      url: '/loops',
      type: 'POST',
      dataType: 'json',
      // data: {loop: { name: loopName, colour: loopColour }}
      data: {loop: { name: loopName, colour: loopColour }, loopKeysTimes: loopKeysTimes}
    })

    // if ajax is a success do the following
    .done(function(){
      loopAjax.loadLoops();
      console.log('loop created');
    })

    // if ajax fails, fart
    .fail(function(){
      console.log('fart - loop save failed');
    });
  },

// ----------------------------------------------------------------------------------
// ajax to retrieve all of the loops belonging to current user
// ----------------------------------------------------------------------------------

  loadLoops: function(){  
    $.ajax({
      url: '/loops/load',
      type: 'GET',
      dataType: 'json'
    })

    // if ajax is a success do the following
    .done(function(savedLoops){
      // create a button for the current loop
      $loopNav.html("<li data-id='0'><a href='#' title='clear loop' class='clear-loop'>C</a><a href='#' class='load-loop'>New Loop</a></li>")
      $.each(savedLoops, function(index, loop){
        // create a button for each saved loop
        var navItem = "<li data-id=" + this.id + "><a href='#' title='delete loop' class='delete-loop'>X</a><a href='#' class='load-loop'><span class='queue'>cue</span> " + this.name + "</a></li>"
        // add each saved loop to the hash
        savedKeysTimes[this.id] = this;
        // add button to the screen
        $loopNav.append(navItem);
        // delete the info that the hash no longer needs - this has been moved up to the save section
        // delete savedKeysTimes[this.id].name;
        // delete savedKeysTimes[this.id].id;
      })
    })

    // if ajax is fails, do the usual
    .fail(function(){
      console.log('fart - load loops failed');
    });
  },

// ----------------------------------------------------------------------------------
// ajax to delete a loop from the db
// ----------------------------------------------------------------------------------

  deleteLoop: function(loopID){
    $.ajax({
      url: 'loops/destroy',
      type: 'DELETE',
      dataType: 'json',
      data: {id: loopID} 
    }).done(function(){
      console.log('loop deleted')
    })
  }
};



