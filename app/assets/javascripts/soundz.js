//AH: Alrighty, code to get this party started
$(document).ready(function() {
    var context, 
        source, 
        buffer,
        url = "../sounds/clap.mp3";

	// Create the Audio Context
	context = new webkitAudioContext();

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
    function start() {
        // Note: this will load asynchronously
        var request = new XMLHttpRequest();
        request.open("GET", "../sounds/clap.mp3", true);
        request.responseType = "arraybuffer"; 

        // Asynchronous callback
        request.onload = function() {
            var data = request.response;

            audioRouting(data);
        };
        request.send();
    }

    function audioRouting(data) {
        source = context.createBufferSource(); // Create sound source
        buffer = context.createBuffer(data, true/* make mono */); // Create source buffer from raw binary
        source.buffer = buffer; // Add buffered data to object
        source.connect(context.destination); // Connect sound source to output
        playSound(source); // Pass the object to the play function
    }

    // Map Keyboard Events for the F keydown 	
	$(document).keydown(function(e) {
		console.log(e);
		switch(e.keyCode) {
			case 70: // F key
				start();
			break;
		}
	})	
	
    init();

}());
