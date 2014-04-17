//AH: Alrighty, code to get this party started
var context,
    source,
    buffer,
    url = "";

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

var sounds = {}; // Memoization hash

var soundFiles = 'clap cowbell kickdrum snare laser01 laser02 laser03 robot01 robot02 metro'.split(' ');
for (var i = 0; i < soundFiles.length; i++) {
    playSound(soundFiles[i], true);
}

// Load the Sound with XMLHttpRequest
function playSound(sound, silent) {

    if (! sounds[sound]) {
        // Note: this will load asynchronouslys
        var request = new XMLHttpRequest();
        request.open("GET", "/assets/" + sound + ".mp3", true);
        request.responseType = "arraybuffer"; // Read as binary data

        // Asynchronous callback
        request.onload = function() {
            var data = request.response;
            sounds[sound] = data;
            if (! silent) {
                audioRouting(sounds[sound]);
            }
        };

        request.send();
    } else {
        if (! silent) {
            audioRouting(sounds[sound]);
        }
    }
    console.log("showing fetched sounds", sounds);
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

init();

