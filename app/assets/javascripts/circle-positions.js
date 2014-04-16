// -----------------------------------------------------------------------------------------
// This function gives all of the animated circles their initial size and position on screen
// according to the current screen size
// -----------------------------------------------------------------------------------------

$(document).ready(function(){
  
  // Get some variables to play with
  var $animWindow = $('#anim-window');
  var circleStepper = 1;
  // KH create a variable which is the win height/27 so we have 27 different sizes
  var circleDifference = (winHeight / 22)

  // Loop through each circle_animated element and do the following
  $animWindow.find('.circle_animated').each(function() {
    
    // Create a vairable for the current size/width so we can use it later 
    var currentSize = (circleDifference * circleStepper)

    // chnage the circles' css according to maths (it's always bloody maths isn't it)
    $(this).css({
      height: currentSize + 'px',
      width: currentSize + 'px',
      // left position = width of the circle + width of the screen, divided by 2
      left: ( ($animWindow.width() - currentSize ) / 2) + 'px',
      // top position = height of the circle + height of the screen, divided by 2
      top: ( (winHeight - currentSize ) / 2) + 'px'   
    });

    // add one to the count and move on the next cicrle
    circleStepper ++ ; 
  });
});

// -----------
// Happy Days!
// -----------