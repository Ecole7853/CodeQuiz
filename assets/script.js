// var startGame = 
// var endGame = 
var questions = [
  {question1: "A very useful tool used during development and debugging for print content to the debugger is:"},
  {question2: "The condition in an if / else statment is enclosed within ______."},
  {question3: "Arrays in JavaScript can be used to store ______."},
  {question4: "Commonly used data types DO NOT include:"}
]
var answers = [
  {answer1: {a: "JavaScript", b: "terminal/bash",  c: "for loops",  d: "console.log"}},
  {answer2: {a: "quotes", b: "curly brackets", c: "paranthesis", d: "square brackets"}},
  {answer3: {a: "numbers and strings", b: "other arrays", c: "booleans", d: "all of the above"}},
  {answer4: {a: "strings", b: "bookleans", c: "alerts", d: "numbers"}}
]
var highScore = document.querySelector("#highScore")
var wrongAnswer = (secondsLeft = secondsLeft-10)
var li = $("<li></li>")
var container = $(".container");
var secondsLeft = (60);
var timeEl = $("#time");
var startButton =  document.querySelector("#start");
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      $('#time').html("Time:" + secondsLeft);
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        //sendMessage();
      }
    }, 1000);
  }
function question2() {
  $(".startPage").css("display","none")
  $("#questions").css("display","block")
  $("#questionText").append(questions[1].question2);
  $("#answer1").append(answers[1].answer2.a);
  $("#answer2").append(answers[1].answer2.b);
  $("#answer3").append(answers[1].answer2.c);
  $("#answer4").append(answers[1].answer2.d);
}
function question3() {
  $(".startPage").css("display","none")
  $("#questions").css("display","block")
  $("#questionText").append(questions[2].question3);
  $("#answer1").append(answers[2].answer3.a);
  $("#answer2").append(answers[2].answer3.b);
  $("#answer3").append(answers[2].answer3.c);
  $("#answer4").append(answers[2].answer3.d);
}
function question4() {
  $(".startPage").css("display","none")
  $("#questions").css("display","block")
  $("#questionText").append(questions[3].question3);
  $("#answer1").append(answers[3].answer3.a);
  $("#answer2").append(answers[3].answer3.b);
  $("#answer3").append(answers[3].answer3.c);
  $("#answer4").append(answers[3].answer3.d);
}
startButton.addEventListener("click", function(){
    $(".startPage").css("display","none")
    $("questionDetail").css("display", "none")
    $("#questions").css("display","block")
    $("#questionText").append(questions[0].question1);
    $("#answer1").append(answers[0].answer1.a);
    $("#answer2").append(answers[0].answer1.b);
    $("#answer3").append(answers[0].answer1.c);
    $("#answer4").append(answers[0].answer1.d);
    li.addClass("#questions");
    document.querySelector("#answer1").addEventListener("click", function(){
      $("#questionDetail").text("Wrong");
      question2();
    })
    // document.querySelector("#answer2").addEventListener("click", function(){
    //   wrongAnswer
    //   question2();
    // })
    // document.querySelector("#answer3").addEventListener("click", function(){
    //   wrongAnswer
    //   question2();
    // })
    // document.querySelector("#answer4").addEventListener("click", function(){
    //   wrongAnswer
    //   question2();
    // })
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