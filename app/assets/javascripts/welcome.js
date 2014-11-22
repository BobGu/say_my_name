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

  $('form input').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  $

});
