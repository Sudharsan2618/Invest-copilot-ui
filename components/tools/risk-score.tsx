"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function RiskScoreCalculator() {
  const [score, setScore] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const questions = [
    { q: "How long do you plan to invest?", options: ["Less than 1 year", "1-3 years", "3-7 years", "7+ years"] },
    { q: "How would you react to a 20% portfolio drop?", options: ["Sell everything", "Sell some", "Hold", "Buy more"] },
    { q: "What is your primary investment goal?", options: ["Capital preservation", "Steady income", "Balanced growth", "Aggressive growth"] },
    { q: "How much investment experience do you have?", options: ["None", "Some basic knowledge", "Moderate experience", "Expert"] },
    { q: "What percentage of savings would you invest?", options: ["Under 10%", "10-25%", "25-50%", "Over 50%"] },
  ]

  const handleAnswer = (qIdx: number, aIdx: number) => {
    setAnswers(prev => ({ ...prev, [qIdx]: aIdx }))
  }

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, v) => sum + v, 0)
    setScore(Math.round((total / (questions.length * 3)) * 100))
  }

  const profile = score !== null
    ? score < 33 ? "Conservative" : score < 66 ? "Moderate" : "Aggressive"
    : null

  return (
    <div>
      {score === null ? (
        <div className="flex flex-col gap-6">
          {questions.map((q, qIdx) => (
            <div key={qIdx}>
              <p className="text-sm font-medium text-foreground">{qIdx + 1}. {q.q}</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {q.options.map((opt, aIdx) => (
                  <button
                    key={aIdx}
                    onClick={() => handleAnswer(qIdx, aIdx)}
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                      answers[qIdx] === aIdx
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <Button
            onClick={calculateScore}
            disabled={Object.keys(answers).length < questions.length}
            className="w-fit"
          >
            Calculate My Risk Score
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary">
            <span className="font-mono text-4xl font-bold text-primary">{score}</span>
          </div>
          <h3 className="mt-4 text-xl font-bold text-foreground">Your Risk Profile: {profile}</h3>
          <p className="mt-2 text-muted-foreground">
            Based on your answers, you have a {profile?.toLowerCase()} risk tolerance. This helps determine the right asset allocation for your portfolio.
          </p>
          <Button onClick={() => { setScore(null); setAnswers({}) }} variant="outline" className="mt-4">
            Retake Quiz
          </Button>
        </div>
      )}
    </div>
  )
}
