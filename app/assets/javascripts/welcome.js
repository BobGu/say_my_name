$(document).ready (function () {
  guessChecker = function(guess, thing) {
      name = $(thing).parents('div').prop('id');
      if (guess === name){

            return true;
          }
      else {
            return false;
          }
  };

  $(".guess").click (function(){
    guess = $(this).prev().val().toLowerCase();
      if(guessChecker(guess, this)){
            alert('this is right');
          }
      else{
            alert('this is wrong');
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
