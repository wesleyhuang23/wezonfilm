$(document).ready(function(){
  $('.side-menu').hide();
  /*opening side menu*/
  $('.hamburger').on('click', function(){
    $('.side-menu').show();
  });

  /*closing side menu*/
  $('.cancel').on('click', function(){
    $('.side-menu').hide();
  });

});
