var metroSound = false

var metronome = function(){
	if(countBar % (200/steps)  == 0){
		if (metroSound === true){
 			playSound('metro');
 		}
 	}
 }

$(document).ready(function(){
	var $startBpm = $('#startBpm');
	var $stopBpm = $('#stopBpm');

	$($startBpm).click(function(){
		if (metroSound === false){
 			metroSound = true;
 		} else {		
			metroSound = false;
		};
	});

});
