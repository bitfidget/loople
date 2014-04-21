// KH getting experiMENTAL here... this should play back our plotted points for us...
var blipPress = function(blip){
  switch(blip){
    //Letter 'Q'
    case 1:
      playSound('bigbass');
      circleAnimate.animation1()
      break;
    //Letter 'W'
    case 2:
      playSound('bass');
      circleAnimate.animation2()
      break;
    //Letter 'E'
    case 3:
      playSound('snare');
      circleAnimate.animation3()
      break;
    //Letter 'R'
    case 4:
      playSound('hihat');
      circleAnimate.animation4()
      break;
    //Letter 'T'
    case 5:
      playSound('elec01');
      circleAnimate.animation5();
      break;
    //Letter 'Y'
    case 6:
      playSound('elec02');
      circleAnimate.animation6()
      break;
    //Letter 'U'
    case 7:
      playSound('elec03');
      circleAnimate.animation7()
      break;
    //Letter 'I'
    case 8:
      playSound('synth01');
      circleAnimate.animation8()
      break;
    //Letter 'O'
    case 9:
      playSound('synth02');
      circleAnimate.animation9()
      break;
    //Letter 'P'
    case 10:
      playSound('synth03');
      circleAnimate.animation10()
      break;
    //Letter 'A'
    case 11:
      playSound('clap');
      circleAnimate.animation11()
      break;
    //Letter 'S'
    case 12:
      playSound('click');
      circleAnimate.animation12()
      break;
    //Letter 'D'
    case 13:
      playSound('cowbell');
      circleAnimate.animation13()
      break;
    //Letter 'F'
    case 14:
      playSound('house01');
      circleAnimate.animation14()
      break;
    //Letter 'G'
    case 15:
      playSound('house02');
      circleAnimate.animation15()
      break;
    //Letter 'H'
    case 16:
      playSound('house03');
      circleAnimate.animation16()
      break;
    //Letter 'J'
    case 17:
      playSound('house04');
      circleAnimate.animation17()
      break;
    //Letter 'K'
    case 18:
      playSound('marim01');
      circleAnimate.animation18()
      break;
    //Letter 'L'
    case 19:
      playSound('marim02');
    circleAnimate.animation19()
      break;
    //Letter 'Z'
    case 20:
      playSound('voice01');
      circleAnimate.animation20()
      break;
    //Letter 'X'
    case 21:
      playSound('voice02');
      circleAnimate.animation21()
      break;
    //Letter 'C'
    case 22:
      playSound('voice03');
      circleAnimate.animation22()
      break;
    //Letter 'V'
    case 23:
      playSound('voice04');
      circleAnimate.animation23()
      break;
    //Letter 'B'
    case 24:
      playSound('voice05');
      circleAnimate.animation24()
      break;
    //Letter 'N'
    case 25:
      playSound('marim03');
      circleAnimate.animation25()
      break;
    //Letter 'M'
    case 26:
      playSound('marim04');
      circleAnimate.animation26()
      break;
    //Letter '`'
    case 27:
      console.log('fart')
      playSound('fart');
      break;
  };
};
