// ----------------------------------------------------------------------------------
// these are all variables that will need to be used by more than one function
// ----------------------------------------------------------------------------------

// window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// the main windows
var $animWindow = 0;
var $loopWindow = 0;

// the loop head
var $loopHead = 0;

// the navigation for saved loops
var $loopNav = 0;

// KH all keypresses are saved in the loopKeysTimes hash
// KH the time is the key, and the keys played are the value
var loopKeysTimes = {};

// KH the global timer - everythign hangs off this variable!
var countBar = 0;

// KH the global looptime - start with 2000 (120BPM)
var loopTime = 2000

// KH the load loop button nav
var $loadLoops = 0;

// the number of steps on the metronome/grid
var steps = 4;
var grid = 0;