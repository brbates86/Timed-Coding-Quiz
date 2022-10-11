var startButton = document.getElementById(".start-button");
var mainContainer = document.getElementById(".main-container");
var infoBar = document.getElementById(".info-bar");
var innerContainer = document.getElementById(".inner-container");
var quiz = document.getElementById(".quiz");
var questions = document.getElementById(".questions");
var endOfQuiz = document.getElementById(".end-of-quiz");

var currentQuestionIndex

startButton.addEventListener("click", startGame); {
    currentQuestionIndex++
    setNextQuestion()
}
function startGame() {
    quizButton.className.add("hide")
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
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