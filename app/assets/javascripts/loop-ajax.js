$(document).ready(function () {

});

// KH create an object to deal with all Ajax Loop actions
var loopAjax = {
  createLoop: function(loopName, loopColour, loopKeysTimes){
    // ajax to save the new loop to the db
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

  loadLoops: function(){
    // ajax to retrieve all of the loops belonging to current user
    $.ajax({
      url: '/loops/load',
      type: 'GET',
      dataType: 'json'
    })

    // if ajax is a success do the following
    .done(function(loops_to_load){
      $loopNav.html('')
      $.each(loops_to_load, function(index, loop){
        var navItem = "<li data-id=" + this.id + "><a href='#' class='delete-loop'>X</a><a href='#' class='load-loop'><span class='queue'>cue</span>" + this.name + "</a></li>"
        $loopNav.append(navItem);
      })
    })

    // if ajax is fails, do the usual
    .fail(function(){
      console.log('fart - load loops failed');
    });
  },

  deleteLoop: function(loopID){
    // ajax to delete a loop from the db
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



