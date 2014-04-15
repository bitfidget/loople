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

}); // end of document.ready function

// Charlies event listener for keys clicked
// add all key press fucntions here

var keyPress = function(){
  $(document).keydown(function(e){
    switch(e.keyCode){
      //Letter 'Q'
      case 81:
        console.log('q')
        makeKey(1);
        playSound('clap');
        drawCircle();
        break;

      //Letter 'W'
      case 87:
        console.log('w')
        makeKey(2);
        playSound('cowbell');
        drawRect();
        break;

      //Letter 'E'
      case 69:
        makeKey(3);
        playSound('kickdrum');
        drawCurve();
        break;

      //Letter 'R'
      case 82:
        makeKey(4);
        playSound('snare');
        drawTriangle();
        break;

      //Letter 'T'
      case 84:
        makeKey(5);
        playSound('laser01');
        drawLine();
        break; 

      //Letter 'Y'
      case 89:
        makeKey(6);
        playSound('laser02');
        // drawSpiral(); Not working for now
        drawTriangleDots();
        break;

      //Letter 'U'
      case 85:
        makeKey(7);
        playSound('laser03');
        drawBouncingBall();
        break;

      //Letter 'I'
      case 73:
        makeKey(8);
        playSound('robot01');
        drawBackgroundChange();
        break;

      //Letter 'O'
      case 79:
        makeKey(9);
        playSound('robot02');
        drawExplosion();
        break;

      //Letter 'P'
      case 80:
        makeKey(10);
        playSound('three');
        drawMovingSquare();
        break;
      //Letter 'A'
      case 65:
        makeKey(11);
        playSound('four');
        drawCircleNoFill();
        break;
      //Letter 'S'
      case 83:
        makeKey(12);
        playSound('five');
        drawSplash();
        break;
      //Letter 'D'
      case 68:
        makeKey(13);
        playSound('six');
        // drawSpiral(); Not working for now
        break;
      //Letter 'F'
      case 70:
        makeKey(14);
        playSound('seven');
        // drawSpiral(); Not working for now
        break;
      //Letter 'G'
      case 71:
        makeKey(15);
        playSound('eight');
        // drawSpiral(); Not working for now
        break;
      //Letter 'H'
      case 72:
        makeKey(16);
        playSound('nine');
        // drawSpiral(); Not working for now
        break;
      //Letter 'J'
      case 74:
        makeKey(17);
        playSound('ten');
        // drawSpiral(); Not working for now
        break;
      //Letter 'K'
      case 75:
        makeKey(18);
        playSound('eleven');
        // drawSpiral(); Not working for now
        break;
      //Letter 'L'
      case 76:
        makeKey(19);
        playSound('twelve');
        // drawSpiral(); Not working for now
        break;
      //Letter 'Z'
      case 90:
        makeKey(20);
        playSound('thirteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'X'
      case 88:
        makeKey(21);
        playSound('fourteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'C'
      case 67:
        makeKey(22);
        playSound('fifteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'V'
      case 86:
        makeKey(23);
        playSound('sixteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'B'
      case 66:
        makeKey(24);
        playSound('seventeen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'N'
      case 78:
        makeKey(25);
        playSound('eighteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'M'
      case 77:
        makeKey(26);
        playSound('nineteen');
        // drawSpiral(); Not working for now
        break;
    }
  });
};
