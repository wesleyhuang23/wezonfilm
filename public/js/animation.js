$(document).ready(function(){
  /*opening side menu*/
  $('.hamburger').on('click', function(){
    $('.side-menu').animate({width: 'toggle'});
  });

  /*closing side menu*/
  $('.cancel').on('click', function(){
    $('.side-menu').animate({width:'toggle'});
  });

  $('.nav-items a').on('click', function(){
    $('.side-menu').animate({width:'toggle'});
  });

});
