var circleAnimate = {
  animation1: function(){
    $animCircle.addClass('circle-half');
    setTimeout(function() {
      $animCircle.removeClass('circle-half');
    }, 200);
  },
    animation2: function(){
    $animCircle.addClass('circle-half');
    setTimeout(function() {
      $animCircle.removeClass('circle-half');
    }, 200);
  },
    animation3: function(){
    $animCircle.addClass('circle-half');
    setTimeout(function() {
      $animCircle.removeClass('circle-half');
    }, 200);
  }
}

circleAnimate(animation1)