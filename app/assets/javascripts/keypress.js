$(document).ready(function(){
// KH check that forms are NOT currently focussed otherwsie typing in the form will also add keys!
  $('form input').focus(function(){
    console.log('form now has focus')
    $(document).unbind('keydown');
  });
  $('form input').blur(function(){
    console.log('form has lost focus')
    // if not focussed on a form, reload the keypress listener
    keyPress();
  });


// Charlies event listener for keys clicked
// add all key press fucntions here

  var keyPress = function(){
    $(document).keydown(function(e){
      switch(e.keyCode){
        //Letter 'Q'
        case 81:
          console.log('q')
          makeKey('q');
          playSound('clap');
          drawCircle();
          break;
        //Letter 'W'
        case 87:
          console.log('q')
          makeKey('q');
          playSound('cowbell');
          drawRect();
          break;
      }
    });
  };

  // KH start these functions when all else is loaded
  keyPress();

}); // end of document.ready function



