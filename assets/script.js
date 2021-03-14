var questions = [
  {question: "A very useful tool used during development and debugging for print content to the debugger is:", 
   answers: {a: "JavaScript", b: "terminal/bash",  c: "for loops",  d: "console.log"},
   correctAnswer:"d"},
  
  {question: "The condition in an if / else statment is enclosed within ______.", 
   answers: {a: "quotes", b: "curly brackets", c: "paranthesis", d: "square brackets"},
   correctAnswer:"b"},
  
   {question: "Arrays in JavaScript can be used to store ______.",
   answers: {a: "numbers and strings", b: "other arrays", c: "booleans", d: "all of the above"},
   correctAnswer:"d"},
  
   {question: "Commonly used data types DO NOT include:",
    answers: {a: "strings", b: "bookleans", c: "alerts", d: "numbers"},
    correctAnswer:"c"}
]
var correctAnswersGiven = 0;
var activeQuestion = 0;
var highScore = document.querySelector("#highScore")
var li = $("<li></li>")
var container = $(".container");
var secondsLeft = 30;
var timeEl = $("#time");
var startButton =  document.querySelector("#start");
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      $('#time').html("Time:" + secondsLeft);
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
  }
function endGame(){
  var finalScore = correctAnswersGiven*secondsLeft
  var submitBtn = document.querySelector("#submitBtn")
  $("#finalScore").text("Your final score is " + finalScore.toString())
  container.children().css("display","none")
  $(".enterScore").css("display","block")
  submitBtn.addEventListener("click", function(){
    localStorage.setItem($("#name").val(), finalScore);
    console.log($("#name"))
  })
}
function changeQuestion (){
  activeQuestion++;
  if (activeQuestion==questions.length){
    endGame();
  }
  else {
    $("#questionText").text(questions[activeQuestion].question);
    $("#answer1").text(questions[activeQuestion].answers.a);
    $("#answer2").text(questions[activeQuestion].answers.b);
    $("#answer3").text(questions[activeQuestion].answers.c);
    $("#answer4").text(questions[activeQuestion].answers.d);
  }
}
startButton.addEventListener("click", function(){
    setTime()
    $(".startPage").css("display","none")
    $("questionDetail").css("display", "none")
    $("#questions").css("display","block")
    $("#questionText").text(questions[activeQuestion].question);
    $("#answer1").text(questions[activeQuestion].answers.a);
    $("#answer2").text(questions[activeQuestion].answers.b);
    $("#answer3").text(questions[activeQuestion].answers.c);
    $("#answer4").text(questions[activeQuestion].answers.d);
    li.addClass("#questions");
    document.querySelector("#answer1").addEventListener("click", function(){
      if (questions[activeQuestion].correctAnswer=="a"){
        $("#questionDetail").text("Correct!");
        correctAnswersGiven +=1;
      }
      else {
        $("#questionDetail").text("Wrong!")
        secondsLeft -=10;
      }
      changeQuestion();
    })
    document.querySelector("#answer2").addEventListener("click", function(){
      if (questions[activeQuestion].correctAnswer=="b"){
        $("#questionDetail").text("Correct!");
        correctAnswersGiven +=1;
      }
      else {
        $("#questionDetail").text("Wrong!")
        secondsLeft -=10;
      }
      changeQuestion();
    })
    document.querySelector("#answer3").addEventListener("click", function(){
      if (questions[activeQuestion].correctAnswer=="c"){
        $("#questionDetail").text("Correct!");
        correctAnswersGiven +=1;
      }
      else {
        $("#questionDetail").text("Wrong!")
        secondsLeft -=10;
      }
      changeQuestion();
    })
    document.querySelector("#answer4").addEventListener("click", function(){
      if (questions[activeQuestion].correctAnswer=="d"){
        $("#questionDetail").text("Correct!");
        correctAnswersGiven +=1;
      }
      else {$("#questionDetail").text("Wrong!")
      secondsLeft -=10;
      }
      changeQuestion();
    })
}
)
highScore.addEventListener("click", function(e){
  e.preventDefault()
  container.children().css("display","none")
  $(".initials").css("display","block")
  
})
// secondsLeft = secondsLeft-2 use this for incorrect answer (IMPORTANT)*******

//for nick 
// maybe add pause button****
// clear score button
// text box to enter initials link to scoreboard
// set storage for wins/losses
// localStorage.setItem("count", count);
// function to display storage of wins/losses
// init function to replace score
//   $("#questionDetail").text("Correct!");
//<input type=text></input>
//      secondsLeft -=10;