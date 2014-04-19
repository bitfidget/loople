// var metroSound = false

// var metronome = function(){
// 	if(countBar % (200/steps)  == 0){
// 		if (metroSound === true){
//  			playSound('metro');
//  		}
//  	}
//  }

// $(document).ready(function(){
// 	var $startBpm = $('#startBpm');
// 	var $bpmPlus = $('#bpmPlus');
// 	var $bpmMinus = $('#bpmMinus');
// 	var $bpm = $('#bpm');

// 	$($startBpm).click(function(){
// 		if (metroSound === false){
//  			metroSound = true;
//  			$startBpm.val("Off");
//  		} else {		
// 			metroSound = false;
// 			$startBpm.val("On");
// 		};
// 	});

// 	//CG: increases the value of the bpm input everytime the + button is pressed.
// 	$($bpmPlus).click(function(){
// 		var $valueBpm = parseInt($bpm.val());
// 	 	newBpm = $valueBpm + 1;
// 	 	$bpm.val(newBpm);
// 	 	// loopTime -= 1000;
// 	 	// console.log(loopTime)

// 	});

// 	$($bpmMinus).click(function(){
// 		var $valueBpm = parseInt($bpm.val());
// 		newBpm = $valueBpm - 1;
// 	 	$bpm.val(newBpm);
// 	});

// });


//-----------------------------------------------------------
// CREATES THE METRONOME AND BPM INPUT
//-----------------------------------------------------------
  var metroSound = false;

  var metronome = function(){
    if(countBar % (200/steps)  == 0){
      if (metroSound === true){
        playSound('metro');
      }
    }
  }

  var $startBpm = $('#startBpm');
  var $bpmPlus = $('#bpmPlus');
  var $bpmMinus = $('#bpmMinus');
  var $bpm = $('#bpm');

  //Activates the metronome and changes the html on the button On/Off
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
  //The metronome should go faster as
  $($bpmPlus).click(function(){
    var $valueBpm = parseInt($bpm.val());
    loopTime = ((60/($valueBpm/4))*1000);
    newBpm = $valueBpm + 1;
    $bpm.val(newBpm);
    loopTime;
    console.log(loopTime)
  });

  //Decreases the value of the bpm and the speed of the metronome.
  $($bpmMinus).click(function(){
    var $valueBpm = parseInt($bpm.val());
    loopTime = ((60/($valueBpm/4))*1000);
    newBpm = $valueBpm - 1;
    $bpm.val(newBpm);
    loopTime;
    console.log(loopTime)
  });
  console.log($bpm)
