import { useState } from "react";
import "./App.css";

const questions = [
  {
    Question: "abc1",
    options: ["x", "y", "z"],
    correctAnswer: "x",
  },
  {
    Question: "abc12",
    options: ["x", "y", "z"],
    correctAnswer: "y",
  },
  {
    Question: "abc123",
    options: ["x", "y", "z"],
    correctAnswer: "z",
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (selectedAnswer: string) => {
    selectedAnswer === questions[currentQuestion].correctAnswer &&
      setScore(score + 1);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion > questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      score === questions.length - 1 && setShowScore(true);
    }
  };

  return (
    <>
      <h1>Quiz app í React</h1>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-Section">
            You scored {score} out of {questions.length}{" "}
            {showText && <h4>Congrazzles! Allt rétt!</h4>}
          </div>
        ) : (
          <></>
        )}
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span> /{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].Question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                className="answer-button"
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      </div>
    </>
  );
}

export default App;
