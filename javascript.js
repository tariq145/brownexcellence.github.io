$(function() {

  $("#menu-list").hide();

  $("#menu-icon").on('click', function(){

    $(this).toggleClass("change");

    $("#menu-list").slideToggle();
  });

});
