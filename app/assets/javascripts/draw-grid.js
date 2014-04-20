// ----------------------------------------------------------------------------------
// function draws the grid
// ----------------------------------------------------------------------------------

var addGrid = function(number){
	for(i = 0; i <= number; i++){
		var $gridline = $('<div class="gridLine"></div>').css({
			left: (i * grid) + "px",
			height: winHeight + "px",
		}).appendTo($animWindow)
		console.log(i)
	};
};
