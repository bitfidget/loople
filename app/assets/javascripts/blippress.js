// KH getting experiMENTAL here... this should play back our plotted points for us...
var blipPress = function(blip){
  switch(blip){
    //Letter 'Q'
    case 1:
      playSound('clap');
      circleAnimate.animation1()
      break;
    //Letter 'W'
    case 2:
      playSound('cowbell');
      circleAnimate.animation2()
      break;
    //Letter 'E'
    case 3:
      playSound('kickdrum');
      circleAnimate.animation3()
      break;
    //Letter 'R'
    case 4:
      playSound('snare');
      circleAnimate.animation4()
      break;
    //Letter 'T'
    case 5:
      playSound('laser01');
      circleAnimate.animation5();
      break;
    //Letter 'Y'
    case 6:
      playSound('laser02');
      circleAnimate.animation6()
      break;
    //Letter 'U'
    case 7:
      playSound('laser03');
      circleAnimate.animation7()
      break;
    //Letter 'I'
    case 8:
      playSound('robot01');
      circleAnimate.animation8()
      break;
    //Letter 'O'
    case 9:
      playSound('robot02');
      circleAnimate.animation9()
      break;
    //Letter 'P'
    case 10:
      playSound('three');
      circleAnimate.animation10()
      break;
    //Letter 'A'
    case 11:
      playSound('four');
      circleAnimate.animation11()
      break;
    //Letter 'S'
    case 12:
      playSound('five');
      circleAnimate.animation12()
      break;
    //Letter 'D'
    case 13:
      playSound('six');
      circleAnimate.animation13()
      break;
    //Letter 'F'
    case 14:
      playSound('seven');
      circleAnimate.animation14()
      break;
    //Letter 'G'
    case 15:
      playSound('eight');
      circleAnimate.animation15()
      break;
    //Letter 'H'
    case 16:
      playSound('nine');
      circleAnimate.animation16()
      break;
    //Letter 'J'
    case 17:
      playSound('ten');
      circleAnimate.animation17()
      break;
    //Letter 'K'
    case 18:
      playSound('eleven');
      circleAnimate.animation18()
      break;
    //Letter 'L'
    case 19:
      playSound('twelve');
    circleAnimate.animation19()
      break;
    //Letter 'Z'
    case 20:
      playSound('thirteen');
      //drawCircleZ();
      break;
    //Letter 'X'
    case 21:
      playSound('fourteen');
      //drawCircleX();
      break;
    //Letter 'C'
    case 22:
      playSound('fifteen');
     //drawCircleC();
      break;
    //Letter 'V'
    case 23:
      playSound('sixteen');
      //drawCircleV();
      break;
    //Letter 'B'
    case 24:
      playSound('seventeen');
      //drawCircleB();
      break;
    //Letter 'N'
    case 25:
      playSound('eighteen');
      //drawCircleN();
      break;
    //Letter 'M'
    case 26:
      playSound('nineteen');
      //drawCircleM();
      break;
  };
};
