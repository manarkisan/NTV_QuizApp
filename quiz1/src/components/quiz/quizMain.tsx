import type { ReactNode } from "react";
import "./quiz.style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import questions from "./questions";

// const questions = [
//   {
//     Question: "abc123",
//     Options: ["x", "y", "z"],
//     correctAnswer: "x",
//   },
//   {
//     Question: "Hvað er höfuðborgin í Reykjavík?",
//     Options: ["Miðbærinn", "Mjóddin", "Grafarvogur", "...ha?"],
//     correctAnswer: "...ha?",
//   },
//   {
//     Question: "Hvað hét höfuðborgin í Japan á undan Tókýó?",
//     Options: ["Kyoto", "Edo", "Shinjuku"],
//     correctAnswer: "Edo",
//   },
// ];

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //   const [answer, setAnswer] = useState([0])
  const [wrongAnswer, setWrongAnswer] = useState(false);
//    const [showElement, setShowElement] = useState(true)
  //   const [wrongAnswerText, setWrongAnswerText] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer: string) => {
    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswer(true);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      score == questions.length - 1 && setShowText(true);
      <></>
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score">
          Stig: {score} af {questions.length}
          {!wrongAnswer ? (
            <h4>Congrazzles!!! Allt rétt!!!!</h4> 
          ) : (
            <h4>Úps, vitlaust. Reyndu aftur.</h4>
          )}
        </div>
      ) : (
        <div>
          <></>
        </div>
      )}
      <>
        <div className="question-section">
          <div className="question-count">
            <span>Spurning {currentQuestion + 1}</span> af {questions.length}
          </div>
          <div className="quest-text">
            {questions[currentQuestion].Question}
          </div>
          <div className="answers-sect">
            {questions[currentQuestion].Options.map((option) => (
              <button
                className="answer-button"
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
      
        </div>
      
          <div id="restart-sect">
          <button
            className="restart_btn"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowText(false);
              setShowScore(false);
              setWrongAnswer(false);
            }}
          >
            Restart Quiz
          </button>
          </div>
          </>
    </div>
  );
}
