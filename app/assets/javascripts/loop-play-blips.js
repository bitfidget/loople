// KH Playback the saved blips on screen
var playBlips = function(){
  $.each(loopKeys, function( index, value ) {
    if (countBar === loopTimes[index]){
      blipPress(value)
    };
  });
};

// <% @loop.keystrokes.each do |stroke| %>
//         <li>Key Pressed: <%= stroke.key %></li>
//         <li>At Time: <%= stroke.time %></li>
//       <% end %>