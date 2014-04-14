//AH: Alrighty, code to get this party started
var context,
    source,
    buffer,
    url = "/assets/clap.mp3";

// Initialise the Audio Context
function init() {
    if (typeof AudioContext !== "undefined") {
        context = new AudioContext();
    } else if (typeof webkitAudioContext !== "undefined") {
        context = new webkitAudioContext();
    } else {
        throw new Error('Sorry, AudioContext is not supported.');
    }
}

    // Load the Sound with XMLHttpRequest
function playSound(sound) {
    // Note: this will load asynchronouslys
    var request = new XMLHttpRequest();
    request.open("GET", "/assets/" + sound + ".mp3", true);
    request.responseType = "arraybuffer"; // Read as binary data

    // Asynchronous callback
    request.onload = function() {
        var data = request.response;
        audioRouting(data);
    };

    request.send();
}

function audioRouting(data) {
    source = context.createBufferSource(); // Create sound source
    //gain = context.createGain();
    buffer = context.createBuffer(data, true); // Create source buffer from raw binary
    source.buffer = buffer; // Add buffered data to object
    //source.connect(gain);
    source.connect(context.destination); // Connect sound source to output
    source.start(0); //Important line to get the sound to play!
}

    // Map Keyboard Events for the keydown function 	
	// $(document).keydown(function(e) {
	// 	console.log(e);
	// 	switch(e.keyCode) {
	// 		case 70: // F key
	// 			playSound('clap');
	// 		break;
 //            case 71: // G key
 //                playSound('cowbell');
 //            break;
 //            case 72: // H key
 //                playSound('kickdrum');
 //            break;
 //            case 74: // J key
 //                playSound('snare');
 //            break;
	// 	}
	// })	
	
    init();

