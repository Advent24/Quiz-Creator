var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionList = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButton = document.getElementById("answer")

let shuffleQuestions, currentQuestion

startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestion++
    setNextQuestion
})



function startQuiz(){
    startButton.classList.add("hide")
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionList.classList.remove("hide")
    nextQuestion()
}

function nextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButton.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add("hide")
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button.datset.correct)
    })
    nextButton.classList.remove("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    }
    else {
        element.classList.add("wrong")
    }
}

var questions = [
    {
        question:"How many columns can a bootstrap grid have within it?",
        answers: [
            {text: "8", correct: false},
            {text: "7.5", correct: false},
            {text: "12", correct: true},
            {text: "15", correct: false}
        ],

        question:"How many rows can be populated in any one bootstrap grid?",
        answers: [
            {text: "22", correct: false},
            {text: "3", correct: false},
            {text: "17", correct: false},
            {text: "None of the above", correct: true}
        ],

        question:"How many header sizes are in HTML?",
        answers: [
            {text: "8", correct: false},
            {text: "19", correct: false},
            {text: "6", correct: true},
            {text: "11", correct: false}
        ],

        question:"How many kitten pictures is too few when referenced in coding slide shows?",
        answers: [
            {text: "0", correct: true},
            {text: "4", correct: false},
            {text: "8", correct: false},
            {text: "32", correct: false}
        ]
    }
]