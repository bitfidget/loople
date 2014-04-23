// KH getting experiMENTAL here... this should play back our plotted points for us...
  var blipPress = function(blip){
  switch(blip){
    //Letter 'Q'
    case 1:
      playSound('bigbass');
      musicLoop.animation($circleQ);
      break;
    //Letter 'W'
    case 2:
      playSound('bass');
      musicLoop.animation($circleW)
      break;
    //Letter 'E'
    case 3:
      playSound('snare');
      musicLoop.animation($circleE)
      break;
    //Letter 'R'
    case 4:
      playSound('hihat');
      musicLoop.animation($circleR)
      break;
    //Letter 'T'
    case 5:
      playSound('elec01');
      musicLoop.animation($circleT);
      break;
    //Letter 'Y'
    case 6:
      playSound('elec02');
      musicLoop.animation($circleY)
      break;
    //Letter 'U'
    case 7:
      playSound('elec03');
      musicLoop.animation($circleU)
      break;
    //Letter 'I'
    case 8:
      playSound('synth01');
      musicLoop.animation($circleI)
      break;
    //Letter 'O'
    case 9:
      playSound('synth02');
      musicLoop.animation($circleO)
      break;
    //Letter 'P'
    case 10:
      playSound('synth03');
      musicLoop.animation($circleP)
      break;
    //Letter 'A'
    case 11:
      playSound('clap');
      musicLoop.animation($circleA)
      break;
    //Letter 'S'
    case 12:
      playSound('click');
      musicLoop.animation($circleS)
      break;
    //Letter 'D'
    case 13:
      playSound('cowbell');
      musicLoop.animation($circleD)
      break;
    //Letter 'F'
    case 14:
      playSound('house01');
      musicLoop.animation($circleF)
      break;
    //Letter 'G'
    case 15:
      playSound('house02');
      musicLoop.animation($circleG)
      break;
    //Letter 'H'
    case 16:
      playSound('house03');
      musicLoop.animation($circleH)
      break;
    //Letter 'J'
    case 17:
      playSound('house04');
      musicLoop.animation($circleJ)
      break;
    //Letter 'K'
    case 18:
      playSound('marim01');
      musicLoop.animation($circleK)
      break;
    //Letter 'L'
    case 19:
      playSound('marim02');
    musicLoop.animation($circleL)
      break;
    //Letter 'Z'
    case 20:
      playSound('voice01');
      musicLoop.animation($circleZ)
      break;
    //Letter 'X'
    case 21:
      playSound('voice02');
      musicLoop.animation($circleX)
      break;
    //Letter 'C'
    case 22:
      playSound('voice03');
      musicLoop.animation($circleC)
      break;
    //Letter 'V'
    case 23:
      playSound('voice04');
      musicLoop.animation($circleV)
      break;
    //Letter 'B'
    case 24:
      playSound('voice05');
      musicLoop.animation($circleB)
      break;
    //Letter 'N'
    case 25:
      playSound('marim03');
      musicLoop.animation($circleN)
      break;
    //Letter 'M'
    case 26:
      playSound('marim04');
      musicLoop.animation($circleM)
      break;
    //Letter '`'
    case 27:
      console.log('fart')
      playSound('fart');
      break;
    };
  };
