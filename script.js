//Dom Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("current-score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const allQuestions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1923", correct: false },
            { text: "1898", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "San Marino", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        question: "Which language has the most native speakers in the world?",
        answers: [
            { text: "English", correct: false },
            { text: "Spanish", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "Hindi", correct: false }
        ]
    },
    {
        question: "What is the fastest land animal?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Horse", correct: false },
            { text: "Kangaroo", correct: false }
        ]
    },
    {
        question: "How many bones are there in an adult human body?",
        answers: [
            { text: "206", correct: true },
            { text: "215", correct: false },
            { text: "190", correct: false },
            { text: "250", correct: false }
        ]
    },
    {
        question: "On which continent is the Sahara Desert located?",
        answers: [
            { text: "Asia", correct: false },
            { text: "South America", correct: false },
            { text: "Australia", correct: false },
            { text: "Africa", correct: true }
        ]
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who is known as the father of modern physics?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "What is the currency of the United Kingdom?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Dollar", correct: false },
            { text: "Pound Sterling", correct: true },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Which gas do plants primarily absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "What is the highest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Kilimanjaro", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Mount Fuji", correct: false }
        ]
    },
    {
        question: "Which of these is NOT a primary color?",
        answers: [
            { text: "Red", correct: false },
            { text: "Blue", correct: false },
            { text: "Green", correct: true },
            { text: "Yellow", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Guglielmo Marconi", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    }
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
//()=> === function
//0.8 - 0.5 = 0.3 positive mean change
let currentQuizQuestion = allQuestions.sort(() => Math.random() - 0.5).slice(0, 5);

// This line updates the total number of questions displayed on the screen (e.g., Question 1 of 5).
// 1. textContent: Its job is to change the inner text of an HTML element (it removes the old text and writes the new one).
// 2. quizQuestions.length: Automatically counts how many questions are inside the array.
// The Benefit: If we decide to make the game 10 questions instead of 5 later, this number on the screen will update automatically!
totalQuestionsSpan.textContent = currentQuizQuestion.length;
maxScoreSpan.textContent = currentQuizQuestion.length;

//event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz)

function startQuiz() {
currentQuestionIndex = 0;
score=0;
scoreSpan.textContent=0;



startScreen.classList.remove("active");
quizScreen.classList.add("active");

showQuestion();
   
}
function showQuestion(){
    
    answersDisabled = false;
    const currentQuestion=allQuestions[currentQuestionIndex]
     currentQuestionSpan.textContent=currentQuestionIndex+1;
     const progressPercent =(currentQuestionIndex/allQuestions.length)*100;
     progressBar.style.width=progressPercent+"%";
      
     questionText.textContent=currentQuestion.question;

     answersContainer.innerHTML="";
     currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button") 
        button.textContent=answer.text
     })

}
function restartQuiz() {
    console.log(" Quiz restarted")
}






















