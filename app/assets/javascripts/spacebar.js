
$(document).keyup(function(evt) {
  if (evt.keyCode == 32) {
    dontMakeKey = false;
  }
}).keydown(function(evt) {
  if (evt.keyCode == 32) {
    dontMakeKey = true;
  }
});
