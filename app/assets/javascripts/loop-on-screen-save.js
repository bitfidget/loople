$(document).ready(function () {

});

// KH create an object to deal with all Ajax Loop actions
var loopAjax = {
  createLoop: function(loopName, loopColour, keyStrokes) {
    console.log(loopName, loopColour, keyStrokes);
    // KH ajax wont play nice so i'm just going to do it this way now for testing
    window.location = '/loops/new?name=' + loopName + '&colour=' + loopColour + '&keys=' + keyStrokes
    // $.ajax({
    //   url: '/loops',
    //   type: 'POST',
    //   dataType: 'json',
    //   data: {loop: { name: loopName, colour: loopColour }}
    //   //data: {loop: { name: loopName, colour: loopColour }, keyStrokes: keyStrokes}
    // }).done(function(){
    //   console.log('loop created');
    // }).fail(function(){
    //   console.log('fart');
    // });
  },
  createTask: function (description) {
    $.ajax({
      url: '/create',
      type: 'POST',
      dataType: 'json',
      data: {task: { description: description, complete: false }}
    }).done(function(){
      console.log('task created');
    });
  },
}