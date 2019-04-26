$(document).ready(function() {

  $('.toggleNav').click(function() {
    $('#flex-nav ul').toggleClass('open');
  });

  $('.phone').toggle();

  $('.call').on('click', () => {
    $('.phone').slideToggle('fast');
  });

  $('.button').on('click', () => {
    $('.button').removeClass('shadow');
  });

  $('.button').on('mouseleave', () => {
    $('.button').addClass('shadow');
  });



});