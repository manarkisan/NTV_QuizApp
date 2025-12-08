import type { ReactNode } from "react";
import "./layout.style.css";
import { Link } from "react-router-dom";
import Quiz from "../quiz/quizMain";
import Questions from "../quiz/questions";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <h1 className="logo">Þetta er QuizApp!!!</h1>
        <nav>
          <></>
        </nav>
      </header>
      <main>
        {children} <Quiz></Quiz>
      </main>
      <footer>
        <p>*This is a footer 🦶🏻*</p>
      </footer>
    </div>
  );
}
