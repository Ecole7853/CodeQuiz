// var startGame = 
// var endGame = 
// var questions = 
// var answers = 
var container = $(".container");
var secondsLeft = (30);
var timeEl = $("#time");
var startButton =  document.querySelector("#button");
//make variables that are the questions
//variables for the answers
//timer function
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

//addEventListener for start button
startButton.addEventListener("click", function(){
    $(".startPage").css("display","none")
    container.append("<p> A very useful tool used during development and debugging for print content to the debugger is:</p>");
    var orderedLists = $("<ol></ol>")
    var li = $("<li></li>")
    orderedLists.append("<li> JavaScript </li>");
    orderedLists.append("<li> terminal/bash </li>");
    orderedLists.append("<li> for loops </li>");
    orderedLists.append("<li> console.log </li>");
    li.addClass("question1UL");
    container.append(orderedLists);
})
// addevent listern for the save button\
// addEventListener("click", function()
// maybe add pause button
// addEventListener("click", function()
// clear score button
// addEventListener("click", function()
// game over function
// game start function
// reduce time function
// text box to enter initials link to scoreboard
// set storage for wins/losses
// localStorage.setItem("count", count);
// function to display storage of wins/losses
// init function to replace score
// secondsLeft = secondsLeft-2 use this for incorrect answer (IMPORTANT)*******