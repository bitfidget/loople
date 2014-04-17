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
	var $bpmPlus = $('#bpmPlus');
	var $bpmMinus = $('#bpmMinus');
	var $bpm = $('#bpm');

	$($startBpm).click(function(){
		if (metroSound === false){
 			metroSound = true;
 			$startBpm.val("Off");
 		} else {		
			metroSound = false;
			$startBpm.val("On");
		};
	});

	//CG: increases the value of the bpm input everytime the + button is pressed.
	$($bpmPlus).click(function(){
		var $valueBpm = parseInt($bpm.val());
	 	newBpm = $valueBpm + 1;
	 	$bpm.val(newBpm);
	});

	$($bpmMinus).click(function(){
		var $valueBpm = parseInt($bpm.val());
		newBpm = $valueBpm - 1;
	 	$bpm.val(newBpm);
	});

});
