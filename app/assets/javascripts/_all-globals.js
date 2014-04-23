// ----------------------------------------------------------------------------------
// these are all variables that will need to be used by more than one function
// ----------------------------------------------------------------------------------
$(document).ready(function(){

    // window width and height
     winWidth = window.innerWidth;
     winHeight = window.innerHeight;

    // the main windows
     $animWindow = 0;
     $loopWindow = 0;

    // the loop head
     $loopHead = 0;

    // the navigation for saved loops
     $loopNav = 0;

    // KH all keypresses are saved in the loopKeysTimes hash
    // KH the time is the key, and the keys played are the value
     loopKeysTimes = {};
     newKeysTimes = {};
     savedKeysTimes = {};
     cuedLoop = false;
     nextLoop = 0;

    // KH the global timer - everythign hangs off this iable!
     countBar = 0;

    // KH the global looptime - start with 2000 (120BPM)
     loopTime = 2000;

    // save loop fields
     $loopName = 0;

    // KH the load loop button nav
     $loadLoops = 0;

     dontMakeKey = false;

    // the number of steps on the metronome/grid
     steps = 4;
     grid = 0;

    // for the metronome
     $startBpm = 0;
     $bpmPlus = 0;
     $bpmMinus = 0;
     $bpm = 0;

    //circle params;
    $circleQ = $('#circleQ');
    $circleW = $('#circleW');
    $circleE = $('#circleE');
    $circleR = $('#circleR');
    $circleT = $('#circleT');
    $circleY = $('#circleY');
    $circleU = $('#circleU');
    $circleI = $('#circleI');
    $circleO = $('#circleO');
    $circleP = $('#circleP');
    $circleA = $('#circleA');
    $circleS = $('#circleS');
    $circleD = $('#circleD');
    $circleF = $('#circleF');
    $circleG = $('#circleG');
    $circleH = $('#circleH');
    $circleJ = $('#circleJ');
    $circleK = $('#circleK');
    $circleL = $('#circleL');
    $circleZ = $('#circleZ');
    $circleX = $('#circleX');
    $circleC = $('#circleC');
    $circleV = $('#circleV');
    $circleB = $('#circleB');
    $circleN = $('#circleN');
    $circleM = $('#circleM');
});