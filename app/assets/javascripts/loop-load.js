//------------------------------
// to load a saved loops via ajax just the button listeners are here for now...
//------------------------------

$(document).ready(function(){
  $loopNav = $('#loop-nav');
  loopAjax.loadLoops();
  $loopNav.on('click', '.load-loop', function(){
    var id = $(this).closest('li').data('id')
    console.log('play ' + id)
  });
  $loopNav.on('click', '.delete-loop', function(){
    var id = $(this).closest('li').data('id')
    console.log('delete ' + id)
  });
});