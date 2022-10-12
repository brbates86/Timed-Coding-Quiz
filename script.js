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


