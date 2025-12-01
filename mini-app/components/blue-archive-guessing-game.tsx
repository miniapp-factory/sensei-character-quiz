"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BlueArchiveGuessingGame() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const maxQuestions = 10;

  const handleAsk = () => {
    if (questions.length >= maxQuestions) {
      alert("You have already asked the maximum number of questions.");
      return;
    }
    const q = prompt("Ask a yes/no question:");
    if (!q) return;
    setQuestions([...questions, q]);
    // Simulate answer
    const ans = window.confirm(`Answer for "${q}"?`);
    setAnswers([...answers, ans ? "Yes" : "No"]);
    if (questions.length + 1 === maxQuestions) {
      alert("You have reached the maximum number of questions. Please make a guess.");
    }
  };

  const handleGuess = () => {
    if (questions.length < maxQuestions) {
      alert(`You must ask ${maxQuestions} questions before making a guess.`);
      return;
    }
    const g = prompt("Enter your guess:");
    if (!g) return;
    setGuess(g);
    // Simulate check
    if (g.toLowerCase() === "hoshino") {
      setResult("Correct! You guessed the character.");
    } else {
      setResult("Incorrect. Try again.");
    }
  };

  return (
    <div className="w-full max-w-md p-4 border rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Blue Archive Character Guessing Game</h2>
      <p className="mb-4">
        Ask up to {maxQuestions} yes/no questions to guess the character. You have asked {questions.length} of {maxQuestions}.
      </p>
      <Button onClick={handleAsk} className="mb-2">
        Ask a Question
      </Button>
      <Button onClick={handleGuess} className="mb-4">
        Make a Guess
      </Button>
      <div className="mb-4">
        <h3 className="font-medium">Questions Asked:</h3>
        <ul className="list-disc list-inside">
          {questions.map((q, i) => (
            <li key={i}>
              {q} - {answers[i]}
            </li>
          ))}
        </ul>
      </div>
      {result && <p className="font-medium">{result}</p>}
    </div>
  );
}
