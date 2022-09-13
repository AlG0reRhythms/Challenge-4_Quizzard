//Initial variable declaration
const startButton = document.querySelector(".startBtn button");
const introCard = document.querySelector(".introCard");
const quitButton = document.querySelector(".buttons .quit");
const continueButton = document.querySelector(".buttons .continue");
const quizCard = document.querySelector(".quizCard");
const timerEl = document.querySelector(".timer");
let secondsLeft = 180;
const answerChoices = document.querySelector(".answerChoices");

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
const resultsCard = document.querySelector(".resultsCard");
const restartQuiz = document.querySelector(".buttons restart");
//If next button is clicked...

nextButton.onclick = () => {
  if (questionCount < questionBank.length - 1) {
    questionCount++;
    currentQuestionNum++;
    showQuestion(questionCount);
    questionCounter(currentQuestionNum);
    nextButton.style.display = "none";
  } else {
    console.log("questions completed");
    showResultsCard();
    nextButton.style.display = "none";
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
  let thereCanOnlyBeOne = answerChoices.children.length;
  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
  } else {
    answer.classList.add("incorrect");
  }

  //if a user selects an incorrect answer, they will see the correct one
  for (let i = 0; i < thereCanOnlyBeOne; i++) {
    if (answerChoices.children[i].textContent == correctAnswer) {
      answerChoices.children[i].setAttribute("class", "option correct");
    }
  }
  //disable all other choices after initial selection
  for (let i = 0; i < thereCanOnlyBeOne; i++) {
    answerChoices.children[i].classList.add("disabled");
  }
  nextButton.style.display = "block";
}

//display score card after all questions have been answered

function showResultsCard() {
  introCard.classList.remove("show");
  quizCard.classList.remove("show");
  resultsCard.classList.add("show");
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
