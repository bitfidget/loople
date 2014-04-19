//------------------------------
// to load a saved loops via ajax
//------------------------------

loadLoops = function(){
  // ajax to retrieve all of the loops belonging to current user
  $.ajax({
    url: '/loops/load',
    type: 'GET',
    dataType: 'json'
  }).done(function(loops_to_load){
    console.log(loops_to_load)
    $.each(loops_to_load, function(index, loop){


    }


    .each(tasks, function (task) {
      task.created_at = moment(task.created_at).calendar();
      task.updated_at = moment(task.updated_at).calendar();
      var html = task_html(task);
      if (task.complete) {
        $(html).appendTo('#completed');
      } else {
        $(html).appendTo('#tasks');
      }
    });
  }).fail(function(){
    console.log('fart - load loops failed');
  });
};

$(document).ready(function(){
  loadLoops()
});


// need to make the button clicked get its ID so we can load the loop
