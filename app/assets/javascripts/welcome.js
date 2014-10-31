$(document).ready (function () {
  guessChecker = function(guess, thing) {
      name = $(thing).parent().find('img').prop('src');
      if (guess === name){
            return true;
          }
      else {
            return false;
          }
  };

  $(".guess").click (function(){
    guess = $(this).parent().find('input').val();
      if(guessChecker(guess, this)){
            alert('this is right');
          }
      else{
            alert('this is wrong');
          }
  });
});
