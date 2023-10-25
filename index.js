$(document).ready(function(){
  var cnt = 0;
  //scroll function
  $(window).scroll(function() {
    if(cnt > 0) {
      if($(window).scrollTop() != 0) {
        $("#scrollToMenu").css({'display':'block'});
      } else {
      $("#scrollToMenu").css({'display':'none'});
      }
    }
  });  
  // find all selector with id starting with section- and add it to scroll menu
  var test = $("section[id|='section'");
  var idList = [];
  var scrlMenu = $('#scrollToMenu');
  $("section[id|='section'").each(function(ind, ele){
    scrlMenu.append($('<a/>', {
      href:    '#'+ele.id,
      html: ele.id
   }))
  });
  cnt = ++cnt;
});