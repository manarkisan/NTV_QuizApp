import { useState } from 'react'
import StartPage from "./compoments/showStart"
import './App.css'

const questions= [
  {
    Question: "abc123",
    options: ["x", "y", "z"],
    correctAnswer: "x",
  },
  {
    Question: "abc123",
    options: ["x", "y", "z"],
    correctAnswer: "x",
  },
  {
    Question: "abc123",
    options: ["x", "y", "z"],
    correctAnswer: "x",
  }
]

function App() {
  const [score, setScore] = useState(0);
  const[showScore, setShowScore]  =useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (selectedAnswer) => {
    selectedAnswer === questions[currentQuestion].correctAnswer && setScore(score + 1);
  }

  return (
    <>
    <h1>Quiz app í React</h1>
<div className='quiz-app'>asdfasef
  <>
  <div className="question-section">
    <div className="question-count">
      <span>Question {currentQuestion + 1}</span> /
      {questions.length}
    </div>
    <div className="question-text">{questions[currentQuestion].question}</div>
  </div>
  <div className="answer-section">
    {[currentQuestion].options.map((option) => (<button className='answer-button' key={option} onClick={() => handleAnswerOptionClick(option)}>
      {option}
    </button>))}
  </div>
  </>
</div>

    </>
  )
}

export default App
