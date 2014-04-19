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
      console.log('loop created');
    })

    // if ajax fails, fart
    .fail(function(){
      console.log('fart');
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
      $.each(loops_to_load, function(index, loop){
        console.log(this.name)
        console.log(this.id)
        console.log(this.modified)
        console.log(this.time)
        var navItem = "<li data-id=" + this.id + "><a href='#' class='delete-loop'>X</a><a href='#' class='load-loop'><span class='queue'>cue</span>" + this.name + "</a></li>"
        $loopNav.append(navItem);
      })
    })

    // if ajax is fails, do the usual
    .fail(function(){
      console.log('fart - load loops failed');
    });
  }
};



