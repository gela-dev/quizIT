const startButton = document.getElementById('start-btn') 
const nextButton = document.getElementById('next-btn') 
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons') //variables getting elements by ID

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)// Button to start a game
nextButton.addEventListener('click', () => {  //Button for next question
  currentQuestionIndex++ //current question is incrementing by 1 until the last question
  setNextQuestion() //this function will work if you click the next button
})

function startGame() { //Game Start
  startButton.classList.add('hide') //after clicking start button the question and its choices will appear
  shuffledQuestions = questions.sort(() => Math.random() - .5) // math randon = choosea random number to get the next question
  currentQuestionIndex = 0 //current question = 0
  questionContainerElement.classList.remove('hide')//it remove the current screen pop out and it will run the next question
  setNextQuestion() //next question will appear if start button is being clicked
}

function setNextQuestion() {
  resetState()//reset state function the page will reset and move on to the next question
  showQuestion(shuffledQuestions[currentQuestionIndex])   //function for next shuffled next question
} 

function showQuestion(question) {   
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn') //it will appear a color in a correct answer and wrong answer
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
} //this function is for the choices written in the bottom of this code, if you click any of them the resetState() function will work 

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide') //the next button will appear if u click any answer from 1-4
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
} //next button will appear if you click any answer in the choices
  
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct) //if answer is selected it will set a status if it wrong or a correct one
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide') //while question is undergoing it will remove the next button until you answerd the questions
  } else {
    startButton.innerText = 'Next' //else if you answered all question the restart button will appear
    startButton.classList.remove('hide') //restart button will appear
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')//if your answer is correct the green screen will appear
  } else {
    element.classList.add('wrong')// else if your answer is wrong then the red screen will appear indication that your answer is wrong
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
} //this function if you click the next button, the body will clear its status whether its a green or red and it turns out a blue for neutral status


const questions = [ //all question starts here you can add and remove 
  {
    question: 'Who is the Father of Computer Science?',
    answers: [
      { text: 'Charles Babbage', correct: true },
      { text: 'Albert Einstein', correct: false }
    ]
  },
  {
    question: 'To select the entire document what command is used?',
    answers: [
      { text: 'Ctrl A', correct: true },
      { text: 'Ctrl V', correct: false },
      { text: 'Shift A', correct: false },
      { text: 'Shift V', correct: false}
    ]
  },
  {
    question: 'BIOS stands for ?',
    answers: [
      { text: 'Basic Information Of System', correct: false },
      { text: 'Basic Input Output System', correct: true },
      { text: 'Basic Intergral Output Section', correct: false },
      { text: 'Basic Input Output Section', correct: false }
    ]
  },
  {
    question: 'What is the name of the procedure for fixing program errors?',
    answers: [
      { text: 'Fixing', correct: false },
      { text: 'Debugging', correct: true }
    ]
  },
  {
    question: 'These are the types of programming language except for?',
    answers: [
      { text: 'HTML', correct: false},
      { text: 'CSS', correct: false },
      { text: 'Java', correct: false },
      { text: 'javascripts', correct: true }
    ]
  },
  {
    question: 'A program that accomplishes a desirable purpose while still enabling detrimental behavior is known as?',
    answers: [
      { text: 'Black Hat', correct: false },
      { text: 'White Hat', correct: false },
      { text: 'Red Hat', correct: false },
      { text: 'Trojan Horse', correct: true }
    ]
  },
  {
    question: 'The majority of processing in a computer happens in?',
    answers: [
      { text: 'CPU', correct: true },
      { text: 'Motherboard', correct: false }
    ]
  },
  {
    question: 'Where are the CPU and memory located?',
    answers: [
      { text: 'ROM', correct: false },
      { text: 'RAM', correct: false },
      { text: 'Motherboard', correct: true },
      { text: 'Power Supply', correct: false },
    ]
  },
  {
    question: 'What is the composition of a computer screen image ?',
    answers: [
      { text: 'Pixel', correct: true },
      { text: 'Pixelated', correct: false }
    ]
  },
{
    question: 'In a computer memory hierarchy, where does the majority of data go first?',
    answers: [
      { text: 'ROM', correct: true },
      { text: 'RAM', correct: false },
      { text: 'CPU', correct: false },
      { text: 'Motherboard', correct: false },

    ]
  }
] //end questions