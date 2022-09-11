//Initial variable declaration
const startButton = document.querySelector(".startBtn button");
const introCard = document.querySelector(".introCard");
const quitButton = document.querySelector(".buttons .quit");
const continueButton = document.querySelector(".buttons .continue");
const quizCard = document.querySelector(".quizCard");
const timerEl = document.querySelector(".timer");
let secondsLeft = 180;

//When start button is clicked...show the introduction card

startButton.onclick = () => {
  introCard.classList.add("show");
};

//if quit button is clicked....return to main screen
quitButton.onclick = () => {
  introCard.classList.remove("show");
};

// Timer function to be called with presentation of first question
function startCountdown() {
  //assign the interval to a variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.innerText = secondsLeft + " seconds left!";
    //when time = 0, we display a game over message
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//if Continue button is clicked...present the first question and initiate timer
continueButton.onclick = () => {
  introCard.classList.remove("show");
  quizCard.classList.add("show");
  showQuestion(0);
  questionCounter(1);
  startCountdown();
};

let questionCount = 0;
let currentQuestionNum = 1;

const nextButton = quizCard.querySelector(".nextBtn");

//If next button is clicked...

nextButton.onclick = () => {
  if (questionCount < questionBank.length - 1) {
    questionCount++;
    currentQuestionNum++;
    showQuestion(questionCount);
    questionCounter(currentQuestionNum);
  } else {
    console.log("questions completed");
  }
};

//pull question objects from the array
function showQuestion(index) {
  const questionText = document.querySelector(".questionText");
  const answerChoices = document.querySelector(".answerChoices");
  let questionTag = "<span>" + questionBank[index].question + "</span>";
  //declare multiple choice options linked to questionBank.js
  let answerChoicesTag =
    '<div class="option">' +
    questionBank[index].options[0] +
    "<span></span></div>" +
    '<div class="option">' +
    questionBank[index].options[1] +
    " <span></span></div>" +
    '<div class="option">' +
    questionBank[index].options[2] +
    "<span></span></div>" +
    '<div class="option">' +
    questionBank[index].options[3] +
    "<span></span></div>";

  questionText.innerHTML = questionTag;
  answerChoices.innerHTML = answerChoicesTag;
  //onclick for user selection
  const choice = answerChoices.querySelectorAll(".option");
  for (let i = 0; i < choice.length; i++) {
    choice[i].setAttribute("onclick", "answerSelected(this)");
  }
}

function answerSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questionBank[questionCount].answer;
  if (userAnswer == correctAnswer) {
    console.log("answer is correct");
  } else {
    console.log("answer is incorrect");
  }
  console.log(userAnswer);
}

//quiz progress counter

function questionCounter(index) {
  const progressCounter = quizCard.querySelector(".quizProgress");
  let progressDenominator =
    "<span><p>" + index + "</p>of<p>" + questionBank.length + "</p></span>";
  progressCounter.innerHTML = progressDenominator;
}

//if answer is incorrect, highlight chosen answer in red, decrement timer by 20 seconds and continue to next question

//if answer is correct, highlight chosen answer in green, and continue to the next question

//if all questions have been answered, present game over screen

//on game over screen...present present iteration score

//on game over screen...provide input for user name for high score screen

//if input entered, show high score screen

//
