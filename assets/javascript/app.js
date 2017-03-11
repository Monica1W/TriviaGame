//variables
var answers = ['Time Lord', 'Jenny', 'Daleks', 'River'];
var data = $('input');
var correctAnswer = 0;
var incorrectAnswer = 0;
var empty = 0;
var counter=30;


//This is to loop through the answer array and see if the anwers are right, add one if right add one if wrong
function startGame(){
  for(var i = 0; i < data.length; i++){
      if(data[i].checked){
      if(answers.indexOf(data[i].value) !== -1){
          correctAnswer++;
      }
      else{    
          incorrectAnswer++;
        }
      }
    }

    //This is to add correct and incorrect answers together and then calculate to unanswered ones
    var result = correctAnswer + incorrectAnswer;
    if(result !== 4){
      empty = 4 - result;
    }

    //This is to display answered questions, unanswered questions, and not selected questions
    $('.empty').html("You have " + empty + " that you have not selected");
    $('.correct').html("You have " + correctAnswer + " correct answers");
    $('.incorrect').html("You have " + incorrectAnswer + " incorrect answers");
    
  }



//start button disappears and the questions appear
$('.start').on('click', function(){
  $('.start').css('display', 'none');
  $('.data').css('display', 'block')
  //This is the counter running
  var startCounter = setInterval(function(){
  counter--;
  //This displays the counter
  (counter <= 9) ? $('.counter').html("You have " + '0' + counter + ' remaining...') : $('.counter').html("You have " + counter + ' remaining...')
  //This is if you run out of time it changes to results 
  //and hides the qestions
  if(counter <= 0){
      startGame();
      clearInterval(startCounter);
  }
}, 1000);


  //this hides the questions when the done button is clicked
  $('.done').on('click', function(){
      $('.data').css('display', 'none');
      startGame();
  })
});
