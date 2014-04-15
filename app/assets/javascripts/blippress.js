// KH getting experiMENTAL here... this should play back our plotted points for us...
var blipPress = function(blip){
  switch(blip){
    //Letter 'Q'
    case 1:
      playSound('clap');
      drawCircleQ();
      break;
    //Letter 'W'
    case 2:
      playSound('cowbell');
      drawCircleW();
      break;
    //Letter 'E'
    case 3:
      playSound('kickdrum');
      drawCircleE();
      break;
    //Letter 'R'
    case 4:
      playSound('snare');
      drawCircleR();
      break;
    //Letter 'T'
    case 5:
      playSound('laser01');
      drawCircleT();
      break;
    //Letter 'Y'
    case 6:
      playSound('laser02');
      drawCircleY();
      break;
    //Letter 'U'
    case 7:
      playSound('laser03');
      drawCircleU();
      break;
    //Letter 'I'
    case 8:
      playSound('robot01');
      drawCircleI();
      break;
    //Letter 'O'
    case 9:
      playSound('robot02');
      drawCircleO();
      break;
    //Letter 'P'
    case 10:
      playSound('three');
      drawCircleP();
      break;
    //Letter 'A'
    case 11:
      playSound('four');
      drawCircleA();
      break;
    //Letter 'S'
    case 12:
      playSound('five');
      drawCircleS();
      break;
    //Letter 'D'
    case 13:
      playSound('six');
      drawCircleD();
      break;
    //Letter 'F'
    case 14:
      playSound('seven');
      drawCircleF();
      break;
    //Letter 'G'
    case 15:
      playSound('eight');
      drawCircleG();
      break;
    //Letter 'H'
    case 16:
      playSound('nine');
      drawCircleH();
      break;
    //Letter 'J'
    case 17:
      playSound('ten');
      drawCircleJ();
      break;
    //Letter 'K'
    case 18:
      playSound('eleven');
      drawCircleK();
      break;
    //Letter 'L'
    case 19:
      playSound('twelve');
      drawCircleL();
      break;
    //Letter 'Z'
    case 20:
      playSound('thirteen');
      drawCircleZ();
      break;
    //Letter 'X'
    case 21:
      playSound('fourteen');
      drawCircleX();
      break;
    //Letter 'C'
    case 22:
      playSound('fifteen');
     drawCircleC();
      break;
    //Letter 'V'
    case 23:
      playSound('sixteen');
      drawCircleV();
      break;
    //Letter 'B'
    case 24:
      playSound('seventeen');
      drawCircleB();
      break;
    //Letter 'N'
    case 25:
      playSound('eighteen');
      drawCircleN();
      break;
    //Letter 'M'
    case 26:
      playSound('nineteen');
      drawCircleM();
      break;
  };
};
