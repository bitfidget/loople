$(document).ready(function () {

});

// KH create an object to deal with all Ajax Loop actions
var loopAjax = {
  createLoop: function(loopName, loopColour, loopKeys, loopTimes) {
    $.ajax({
      url: '/loops',
      type: 'POST',
      dataType: 'json',
      // data: {loop: { name: loopName, colour: loopColour }}
      data: {loop: { name: loopName, colour: loopColour }, loopKeys: loopKeys, loopTimes: loopTimes}
    }).done(function(){
      console.log('loop created');
    }).fail(function(){
      console.log('fart');
    });
  }
}