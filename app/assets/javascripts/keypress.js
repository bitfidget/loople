$(document).ready(function(){
// KH check that forms are NOT currently focussed otherwsie typing in the form will also add keys!
  // KH when the form HAS focus do:
  $('form input').focus(function(){
    $(document).unbind('keydown');
  });
  // KH when the form LOSES focus do:
  $('form input').blur(function(){
    keyPress();
  });
}); // end of document.ready function

// Charlies event listener for keys clicked
// add all key press functions here

var keyPress = function(){
  $(document).keydown(function(e){
    switch(e.keyCode){
      //Letter 'Q'
      case 81:
        musicLoop.makeKey(1);
        blipPress(1);
        break;
      //Letter 'W'
      case 87:
        musicLoop.makeKey(2);
        blipPress(2);
        break;
      //Letter 'E'
      case 69:
        musicLoop.makeKey(3);
        blipPress(3);
        break;
      //Letter 'R'
      case 82:
        musicLoop.makeKey(4);
        blipPress(4);
        break;

      //Letter 'T'
      case 84:
        musicLoop.makeKey(5);
        blipPress(5);
        break; 

      //Letter 'Y'
      case 89:
        musicLoop.makeKey(6);
        blipPress(6);
        break;

      //Letter 'U'
      case 85:
        musicLoop.makeKey(7);
        blipPress(7);
        break;

      //Letter 'I'
      case 73:
        musicLoop.makeKey(8);
        blipPress(8);
        break;

      //Letter 'O'
      case 79:
        musicLoop.makeKey(9);
        blipPress(9);
        break;

      //Letter 'P'
      case 80:
        musicLoop.makeKey(10);
        blipPress(10);
        break;

      //Letter 'A'
      case 65:
        musicLoop.makeKey(11);
        blipPress(11);
        break;

      //Letter 'S'
      case 83:
        musicLoop.makeKey(12);
        blipPress(12);
        break;

      //Letter 'D'
      case 68:
        musicLoop.makeKey(13);
        blipPress(13);
        break;

      //Letter 'F'
      case 70:
        musicLoop.makeKey(14);
        blipPress(14);
        break;

      //Letter 'G'
      case 71:
        musicLoop.makeKey(15);
        blipPress(15);
        break;

      //Letter 'H'
      case 72:
        musicLoop.makeKey(16);
        blipPress(16);
        break;

      //Letter 'J'
      case 74:
        musicLoop.makeKey(17);
        blipPress(17);
        break;

      //Letter 'K'
      case 75:
        musicLoop.makeKey(18);
        blipPress(18);
        break;

      //Letter 'L'
      case 76:
        musicLoop.makeKey(19);
        blipPress(19);
        break;

      //Letter 'Z'
      case 90:
        musicLoop.makeKey(20);
        blipPress(20);
        break;

      //Letter 'X'
      case 88:
        musicLoop.makeKey(21);
        blipPress(21);
        break;

      //Letter 'C'
      case 67:
        musicLoop.makeKey(22);
        blipPress(22);
        break;

      //Letter 'V'
      case 86:
        musicLoop.makeKey(23);
        blipPress(23);
        break;
      //Letter 'B'
      case 66:
        musicLoop.makeKey(24);
        blipPress(24);
        break;

      //Letter 'N'
      case 78:
        musicLoop.makeKey(25);
        blipPress(25);
        break;

      //Letter 'M'
      case 77:
        musicLoop.makeKey(26);
        blipPress(26);
        break;

      //Letter '`'
      case 192:
        blipPress(27);
        break;
      
    }
  });
};
