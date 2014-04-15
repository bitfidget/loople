// KH Playback the saved blips on screen
var playBlips = function(){
  $.each(loopKeys, function( index, value ) {
    if (countBar === loopTimes[index]){
      blipPress(value);
      $('#' + (index + 1)).addClass('blipPlay');
      setTimeout(function() {
        $('#' + (index + 1)).removeClass('blipPlay');
      }, 100);


      //   // boxShadow: '0px 1px 5px 6px rgba(80,255,80,0.2)',
      //   background: 'rgba(0,255,0,0.8);'
      // }, 1, function() {
      //   // console.log('blip animaton complete')
      //   console.log('#' + (index + 1))
      // });

      //REPLACE THIS ALL WITH A CLASS AND ADD/REMOVE IT TO MAKE IT ANIMATE!!


    };
  });
};

// <% @loop.keystrokes.each do |stroke| %>
//         <li>Key Pressed: <%= stroke.key %></li>
//         <li>At Time: <%= stroke.time %></li>
//       <% end %>