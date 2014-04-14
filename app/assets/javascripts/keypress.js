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
        makeKey('q');
        playSound('clap');
        drawCircle();
        //two.clear();
        break;
      //Letter 'W'
      case 87:
        console.log('w')
        makeKey('w');
        playSound('cowbell');
        drawRect();
        break;
      //Letter 'E'
      case 69:
        makeKey('e');
        playSound('kickdrum');
        drawLine();
        break;
      //Letter 'R'
      case 82:
        makeKey('r');
        playSound('snare');
        drawTriangle();
        break;
      //Letter 'T'
      case 84:
        makeKey('t');
        playSound('laser01');
        drawCurve();
        break;
      //Letter 'Y'
      case 89:
        makeKey('y');
        playSound('laser02');
        // drawSpiral(); Not working for now
        drawTriangleDots();
        break;
      //Letter 'U'
      case 85:
        makeKey('u');
        playSound('laser03');
        // drawSpiral(); Not working for now
        break;
      //Letter 'I'
      case 73:
        makeKey('i');
        playSound('robot01');
        // drawSpiral(); Not working for now
        break;
      //Letter 'O'
      case 79:
        makeKey('o');
        playSound('robot02');
        // drawSpiral(); Not working for now
        break;
      //Letter 'P'
      case 80:
        makeKey('p');
        playSound('three');
        // drawSpiral(); Not working for now
        break;
      //Letter 'A'
      case 65:
        makeKey('a');
        playSound('four');
        // drawSpiral(); Not working for now
        break;
      //Letter 'S'
      case 83:
        makeKey('s');
        playSound('five');
        // drawSpiral(); Not working for now
        break;
      //Letter 'D'
      case 68:
        makeKey('d');
        playSound('six');
        // drawSpiral(); Not working for now
        break;
      //Letter 'F'
      case 70:
        makeKey('f');
        playSound('seven');
        // drawSpiral(); Not working for now
        break;
      //Letter 'G'
      case 71:
        makeKey('g');
        playSound('eight');
        // drawSpiral(); Not working for now
        break;
      //Letter 'H'
      case 72:
        makeKey('h');
        playSound('nine');
        // drawSpiral(); Not working for now
        break;
      //Letter 'J'
      case 74:
        makeKey('j');
        playSound('ten');
        // drawSpiral(); Not working for now
        break;
      //Letter 'K'
      case 75:
        makeKey('k');
        playSound('eleven');
        // drawSpiral(); Not working for now
        break;
      //Letter 'L'
      case 76:
        makeKey('l');
        playSound('twelve');
        // drawSpiral(); Not working for now
        break;
      //Letter 'Z'
      case 90:
        makeKey('z');
        playSound('thirteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'X'
      case 88:
        makeKey('x');
        playSound('fourteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'C'
      case 67:
        makeKey('c');
        playSound('fifteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'V'
      case 86:
        makeKey('v');
        playSound('sixteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'B'
      case 66:
        makeKey('b');
        playSound('seventeen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'N'
      case 78:
        makeKey('n');
        playSound('eighteen');
        // drawSpiral(); Not working for now
        break;
      //Letter 'M'
      case 77:
        makeKey('m');
        playSound('nineteen');
        // drawSpiral(); Not working for now
        break;
    }
  });
};
