$(document).ready (function () {
  guessChecker = function(guess, thing) {
    var name = $(thing).parents('div').prop('id');
    if (guess === name){
      return true;
    }
    else {
      return false;
    }
  };

  function capitaliseFirstLetter(string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $(".guess").click (function(){
    var guess = $(this).prev().val().toLowerCase();
    var guess = capitaliseFirstLetter(guess);
    if(guessChecker(guess, this)){
      var find_name = function ($this) {
        var name = $this.parents('div').prop('id');
        return name
      };
      var name = find_name($(this))
      $(this).parent().parent().css('color', 'green').append('<h3>' + name + '</h3>');
      $('.' + name).css('color', 'green');
      $(this).prev().hide();
      $(this).hide();
    }
    else{
      var find_name = function ($this) {
        var name = $this.parents('div').prop('id');
        return name
      };
      var name = find_name($(this))
      $(this).parent().parent().css('opacity', '0.5').css('color', 'red').append('<h3>' + name + '</h3>');
      $('.' + name).css('color', 'red');
      $(this).prev().hide();
      $(this).hide();
    }
  });

  $('.name-input').keypress(function(event){
    if(event.keyCode == 13) {
      $(this).siblings('.guess').click();
      event.preventDefault();
      return false;
    }
  });

  // this is going to filter by cohort numbers
  $('.ohsix').show();
  $('.ohseven').hide();
  $('.ohnine').hide();
  $('.ten').hide();

  $('#ohsix').click(function () {
    $('.ohsix').show();
    $('.ohseven').hide();
    $('.ohnine').hide();
    $('.ten').hide();
  });

  $('#ohseven').click(function () {
    $('.ohseven').show();
    $('.ohsix').hide();
    $('.ohnine').hide();
    $('.ten').hide();
  });

  $('#ohnine').click(function () {
    $('.ohnine').show();
    $('.ohsix').hide();
    $('.ohseven').hide();
    $('.ten').hide();
  });

  $('#ten').click(function (){
    $('.ten').show();
    $('.ohsix').hide();
    $('.ohseven').hide();
    $('.ohnine').hide();
  });



});
