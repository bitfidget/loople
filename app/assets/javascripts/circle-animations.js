var circleAnimate = {
  animation1: function(){
    $animCircle.addClass('circle-whatever');
    setTimeout(function() {
      $animCircle.removeClass('circle-whatever');
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
