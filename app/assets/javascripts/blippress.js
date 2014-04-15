// KH getting experiMENTAL here... this should play back our plotted points for us...
var blipPress = function(blip){
  switch(blip){
    //Letter 'Q'
    case 1:
      playSound('clap');
      drawCircle();
      break;
    //Letter 'W'
    case 2:
      playSound('cowbell');
      drawRect();
      break;
    //Letter 'E'
    case 3:
      playSound('kickdrum');
      drawCurve();
      break;
    //Letter 'R'
    case 4:
      playSound('snare');
      drawTriangle();
      break;
    //Letter 'T'
    case 5:
      playSound('laser01');
      drawLine();
      break;
    //Letter 'Y'
    case 6:
      playSound('laser02');
      drawTriangleDots();
      break;
    //Letter 'U'
    case 7:
      playSound('laser03');
      drawBouncingBall();
      break;
    //Letter 'I'
    case 8:
      playSound('robot01');
      drawSpiral(); //Not working for no
      break;
    //Letter 'O'
    case 9:
      playSound('robot02');
      // drawSpiral(); Not working for now
      break;
    //Letter 'P'
    case 10:
      playSound('three');
      // drawSpiral(); Not working for now
      break;
    //Letter 'A'
    case 11:
      playSound('four');
      drawCircleNoFill();
      break;
    //Letter 'S'
    case 12:
      playSound('five');
      drawSplash();
      break;
    //Letter 'D'
    case 13:
      playSound('six');
      // drawSpiral(); Not working for now
      break;
    //Letter 'F'
    case 14:
      playSound('seven');
      // drawSpiral(); Not working for now
      break;
    //Letter 'G'
    case 15:
      playSound('eight');
      // drawSpiral(); Not working for now
      break;
    //Letter 'H'
    case 16:
      playSound('nine');
      // drawSpiral(); Not working for now
      break;
    //Letter 'J'
    case 17:
      playSound('ten');
      // drawSpiral(); Not working for now
      break;
    //Letter 'K'
    case 18:
      playSound('eleven');
      // drawSpiral(); Not working for now
      break;
    //Letter 'L'
    case 19:
      playSound('twelve');
      // drawSpiral(); Not working for now
      break;
    //Letter 'Z'
    case 20:
      playSound('thirteen');
      // drawSpiral(); Not working for now
      break;
    //Letter 'X'
    case 21:
      playSound('fourteen');
      // drawSpiral(); Not working for now
      break;
    //Letter 'C'
    case 22:
      playSound('fifteen');
      // drawSpiral(); Not working for now
      break;
    //Letter 'V'
    case 23:
      playSound('sixteen');
      // drawSpiral(); Not working for now
      break;
    //Letter 'B'
    case 24:
      playSound('seventeen');
      // drawSpiral(); Not working for now
      break;
    //Letter 'N'
    case 25:
      playSound('eighteen');
      // drawSpiral(); Not working for now
      break;
    //Letter 'M'
    case 26:
      playSound('nineteen');
      // drawSpiral(); Not working for now
      break;
  };
};
