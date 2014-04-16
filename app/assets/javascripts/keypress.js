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
        circleAnimate.animation1()
        break;

      //Letter 'W'
      case 87:
        console.log('w')
        makeKey(2);
        playSound('cowbell');
        circleAnimate.animation2()
        break;

      //Letter 'E'
      case 69:
        makeKey(3);
        playSound('kickdrum');
        circleAnimate.animation3()
        break;

      //Letter 'R'
      case 82:
        makeKey(4);
        playSound('snare');
        circleAnimate.animation4()
        break;

      //Letter 'T'
      case 84:
        makeKey(5);
        playSound('laser01');
        circleAnimate.animation5();
        break; 

      //Letter 'Y'
      case 89:
        makeKey(6);
        playSound('laser02');
        circleAnimate.animation6()
        break;

      //Letter 'U'
      case 85:
        makeKey(7);
        playSound('laser03');
        circleAnimate.animation7()
        break;

      //Letter 'I'
      case 73:
        makeKey(8);
        playSound('robot01');
        circleAnimate.animation8()
        break;

      //Letter 'O'
      case 79:
        makeKey(9);
        playSound('robot02');
        circleAnimate.animation9()
        break;

      //Letter 'P'
      case 80:
        makeKey(10);
        playSound('three');
        circleAnimate.animation10()
        break;

      //Letter 'A'
      case 65:
        makeKey(11);
        playSound('four');
        circleAnimate.animation11()
        break;

      //Letter 'S'
      case 83:
        makeKey(12);
        playSound('five');
        circleAnimate.animation12()
        break;

      //Letter 'D'
      case 68:
        makeKey(13);
        playSound('six');
        circleAnimate.animation13()
        break;

      //Letter 'F'
      case 70:
        makeKey(14);
        playSound('seven');
        circleAnimate.animation14()
        break;

      //Letter 'G'
      case 71:
        makeKey(15);
        playSound('eight');
        circleAnimate.animation15()
        break;

      //Letter 'H'
      case 72:
        makeKey(16);
        playSound('nine');
        circleAnimate.animation16()
        break;

      //Letter 'J'
      case 74:
        makeKey(17);
        playSound('ten');
        circleAnimate.animation17()
        break;

      //Letter 'K'
      case 75:
        makeKey(18);
        playSound('eleven');
        circleAnimate.animation18()
        break;

      //Letter 'L'
      case 76:
        makeKey(19);
        playSound('twelve');
        circleAnimate.animation19()
        break;

      //Letter 'Z'
      case 90:
        makeKey(20);
        playSound('thirteen');
        //drawCircleZ();
        break;

      //Letter 'X'
      case 88:
        makeKey(21);
        playSound('fourteen');
        //drawCircleX();
        break;

      //Letter 'C'
      case 67:
        makeKey(22);
        playSound('fifteen');
        //drawCircleC();
        break;

      //Letter 'V'
      case 86:
        makeKey(23);
        playSound('sixteen');
        //drawCircleV();
        break;
      //Letter 'B'
      case 66:
        makeKey(24);
        playSound('seventeen');
        //drawCircleB();
        break;

      //Letter 'N'
      case 78:
        makeKey(25);
        playSound('eighteen');
        //drawCircleN();
        break;

      //Letter 'M'
      case 77:
        makeKey(26);
        playSound('nineteen');
        //drawCircleM();
        break;
    }
  });
};
