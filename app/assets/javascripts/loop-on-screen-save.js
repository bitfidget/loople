$(document).ready(function () {

});

// KH create an object to deal with all Ajax Loop actions
var loopAjax = {
  createLoop: function(loopName, loopColour, keyStrokes) {
    // KH the commented line below is for when ajax wont play nice - it seems ok now though!
    // window.location = '/loops/new?name=' + loopName + '&colour=' + loopColour + '&keys=' + keyStrokes
    $.ajax({
      url: '/loops',
      type: 'POST',
      dataType: 'json',
      // data: {loop: { name: loopName, colour: loopColour }}
      data: {loop: { name: loopName, colour: loopColour }, keyStrokes: keyStrokes}
    }).done(function(){
      console.log('loop created');
    }).fail(function(){
      console.log('fart');
    });
  }
}