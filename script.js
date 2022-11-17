var startButton = document.getElementById("startButton");
var mainContainer = document.getElementById("mainContainer");
var infoBar = document.getElementById("infoBar");
var innerContainer = document.getElementById("innerContainer");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var endOfQuiz = document.getElementById("endOfQuiz");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var startGame = document.getElementById("startGame");
var currentQuestionIndex
var choiceA = document.getElementById(button1);
var choiceB = document.getElementById(button2);
var choiceC = document.getElementById(button3);
var choiceD = document.getElementById(button4);
var highScore = document.getElementById(highScore);


var totalTime = 30;
function startQuiz() {
    questions = 0;
    totalTime = 30;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = 'none';
    questionDiv.style.display = 'block';
    timer.style.display = 'block';
    timesUp.style.display = 'none';

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length -1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

function startGame() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];

    function checkAnswer(answer) {

        var lineBreak = document.getElementById("lineBreak");
        lineBreak.style.display = "block";
        answerCheck.style.display = "block";
          
        if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
            // correct answer, add 1 score to final score
            correctAns++;
            // console.log(correctAns);
            answerCheck.textContent = "Correct!";
        } else {
            // wrong answer, deduct 10 second from timer
            totalTime -= 10;
            timeLeft.textContent = totalTime;
            answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
        }
    
        questionIndex++;
        // repeat with the rest of questions 
        if (questionIndex < questions.length) {
            nextQuestion();
        } else {
            // if no more question, run game over function
            gameOver();
        }
    }

    function chooseA() { checkAnswer(0); }

    function chooseB() { checkAnswer(1); }

    function chooseC() { checkAnswer(2); }

    function chooseD() { checkAnswer(3); }

    //when questions are answered or timer ends, GAMEOVER!

    function gameOver() {
        summary.style.display = 'block';
        questionDiv.style.display = 'none';
        startDiv.style.display = 'none';
        timer.style.display = 'none';
        timesUp.style.display = 'block';

        //final score appears
        finalScore.textContent = correctAns;
    }

    function storeHighScores(event) {
        event.preventDefault();
    }
var questions = [
    {
        number: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hard Text Machine Language",
            "Happy Tool Mark Listener",
            "Hyper Text Markup Language",
            "Hard Text Multitool Language"
        ]
    },
    {
        number: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Computer Science Student",
            "Cascading Style Sheet",
            "Color Shine Style",
            "Cant See Straight",
        ]
    },
    {
        number: 3,
        question: "Do you need to be a genius to be a Coder?",
        answer: "No",
        options: [
            "Yes",
            "No",

        ]
    },
    {
        number: 4,
        question: "What does JS stand for?",
        answer: "JavaScript",
        options: [
            "Just Saying",
            "Just Start",
            "JavaScript",
            "Join School",
        ]
    },
];

let timeValue = 10;
let userScore = 0;
let counter;

startButton.onclick = ()=>{
    innerContainer.classList.add(activeInfo);
}


