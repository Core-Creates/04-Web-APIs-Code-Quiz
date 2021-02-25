// Selects element by id, it is selecting the span area that the time will display
var timeEl = document.getElementById("time");

// Selects element by id, it is selecting the start button
var mainEl = document.getElementById("start-button");

var noticeEl = document.getElementById("notice");

var questionEl = document.getElementById("question");

document.getElementById("questions-section").style.display = "none";



var secondsLeft = 30;

function setTime(event) {
  // Sets interval in variable

  var timerInterval = setInterval(function() {
    document.getElementById("button-div").style.display = "none";
    document.getElementById("questions-section").style.display = "inline";
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    questions();

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {

 noticeEl.textContent = "Your time is over!";
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

}

mainEl.addEventListener('click', setTime);

