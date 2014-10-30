$(function() {
  $('header a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
  var $navTop = $('#js-nav').offset().top;
  $(window).scroll(function() {
    if ($(this).scrollTop() > $navTop) {
      $('#js-nav').addClass('fixed');
    } else {
      $('#js-nav').removeClass('fixed');
    }
  });
  var form = document.getElementById('js-form');
  var mail = document.getElementById('js-mail');
  var button = document.getElementById('js-button');
  if (!Modernizr.input.required) {}
  button.addEventListener('click', function() {
    if (mail.value.length <= 0) {
      mail.style.outlineColor = "#ff0000";
      mail.style.color = "#ff0000";
    }
  });
  $('form').submit(function(e) {
    $('input').hide();
    $('button').addClass('button-full').html('Thank you!').attr({'value': 'Thank you!', 'disabled': true});
    $('.sec-about').find('button').hide();
    e.preventDefault();
  });
});