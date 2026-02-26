"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Lightbulb,
  CheckCircle2,
  XCircle,
  Info,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Calculator,
  BookOpen,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

// ─── Analogy ───────────────────────────────────────────────────────
export function Analogy({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-2xl border border-primary/15 bg-primary/[0.03] px-4 py-4 sm:px-5 sm:py-5">
      <div className="mb-2 flex items-center gap-2 text-primary">
        <Lightbulb className="h-4 w-4 shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          Real-World Analogy
        </span>
      </div>
      <div className="text-[15px] leading-[1.7] text-foreground/90">
        {children}
      </div>
    </div>
  );
}

// ─── ConceptImage ──────────────────────────────────────────────────
export function ConceptImage({
  src,
  alt,
  caption,
  prompt,
  float,
  children,
}: {
  src: string;
  alt: string;
  caption?: string;
  prompt?: string;
  float?: "left" | "right";
  children?: React.ReactNode;
}) {
  const [error, setError] = useState(false);

  // Side-by-side on desktop, stacked on mobile
  if (float || children) {
    return (
      <div className="my-5 flex flex-col gap-4 sm:grid sm:grid-cols-[1fr_1fr] sm:gap-5 sm:items-start">
        <figure className={`${float === "right" ? "sm:order-2" : ""}`}>
          <div className="relative overflow-hidden rounded-xl border border-border/60 bg-muted/40">
            {error ? (
              <ImagePlaceholder alt={alt} prompt={prompt} compact />
            ) : (
              <Image
                src={src}
                alt={alt}
                width={600}
                height={400}
                className="h-auto max-h-64 sm:max-h-80 w-full object-cover rounded-lg"
                onError={() => setError(true)}
                priority
              />
            )}
          </div>
          {caption && (
            <figcaption className="mt-1.5 text-center text-[11px] leading-tight text-muted-foreground/70">
              {caption}
            </figcaption>
          )}
        </figure>
        {children && (
          <div className={`text-[15px] leading-[1.7] text-muted-foreground ${float === "right" ? "sm:order-1" : ""}`}>
            {children}
          </div>
        )}
      </div>
    );
  }

  // Default — compact centered
  return (
    <figure className="my-5 mx-auto max-w-sm sm:max-w-lg">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-muted/40">
        {error ? (
          <ImagePlaceholder alt={alt} prompt={prompt} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={700}
            height={450}
            className="h-auto max-h-72 sm:max-h-96 w-full object-cover rounded-lg"
            onError={() => setError(true)}
            priority
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-1.5 text-center text-[11px] leading-tight text-muted-foreground/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ImagePlaceholder({ alt, prompt, compact }: { alt: string; prompt?: string; compact?: boolean }) {
  return (
    <div className={`flex items-center justify-center p-4 text-muted-foreground ${compact ? "min-h-[7rem]" : "min-h-[9rem]"}`}>
      <div className="text-center">
        <BookOpen className="mx-auto h-5 w-5 opacity-30" />
        <p className="mt-1.5 text-xs font-medium">{alt}</p>
        {prompt && (
          <div className="mt-2">
            <Image
              src={prompt}
              alt="Generated image"
              width={400}
              height={250}
              className="rounded-lg border border-border/30 w-full h-auto object-cover shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── FormulaBox ────────────────────────────────────────────────────
export function FormulaBox({
  title,
  formula,
  variables,
}: {
  title?: string;
  formula: string;
  variables?: { symbol: string; meaning: string }[];
}) {
  return (
    <div className="my-5 rounded-2xl border border-border/60 bg-card px-4 py-4 sm:px-5 sm:py-5">
      {title && (
        <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
      )}
      <div className="overflow-x-auto rounded-lg bg-muted/60 px-4 py-3 font-mono text-sm sm:text-base font-bold text-primary leading-relaxed">
        {formula}
      </div>
      {variables && variables.length > 0 && (
        <div className="mt-3 flex flex-col gap-1.5">
          {variables.map((v) => (
            <div key={v.symbol} className="flex items-baseline gap-2 text-[13px]">
              <span className="font-mono font-medium text-foreground shrink-0">
                {v.symbol}
              </span>
              <span className="text-muted-foreground">= {v.meaning}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── IndianContext ──────────────────────────────────────────────────
export function IndianContext({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-2xl border border-[#FF9933]/20 bg-[#FF9933]/[0.03] px-4 py-4 sm:px-5 sm:py-5">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-base">🇮🇳</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#FF9933]">
          Indian Context
        </span>
      </div>
      <div className="text-[15px] leading-[1.7] text-foreground/90">
        {children}
      </div>
    </div>
  );
}

// ─── ComparisonChart ───────────────────────────────────────────────
export function ComparisonChart({
  title,
  items = [],
}: {
  title?: string;
  items: { label: string; value: number; color?: string; prefix?: string }[];
}) {
  if (!items || !items.length) return null;
  const maxVal = Math.max(...items.map((i) => i.value));
  return (
    <div className="my-5 rounded-2xl border border-border/60 bg-card px-4 py-4 sm:px-5 sm:py-5">
      {title && (
        <h4 className="mb-4 text-sm font-semibold text-foreground">{title}</h4>
      )}
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-[13px] text-foreground sm:w-40 sm:shrink-0">
              {item.label}
            </span>
            <div className="flex-1">
              <div className="h-7 w-full rounded-full bg-muted/60">
                <div
                  className={`flex h-7 items-center justify-end rounded-full px-2.5 text-[11px] font-mono font-bold text-primary-foreground ${
                    item.color === "success"
                      ? "bg-[var(--success)]"
                      : item.color === "warning"
                        ? "bg-[var(--warning)]"
                        : item.color === "destructive"
                          ? "bg-destructive"
                          : "bg-primary"
                  }`}
                  style={{
                    width: `${Math.max(18, (item.value / maxVal) * 100)}%`,
                  }}
                >
                  <span className="whitespace-nowrap">
                    {item.prefix || "₹"}
                    {item.value.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ComparisonTable ───────────────────────────────────────────────
// On mobile: scrollable table with sticky first column
export function ComparisonTable({
  title,
  headers = [],
  rows = [],
}: {
  title?: string;
  headers: string[];
  rows: string[][];
}) {
  if (!headers || !headers.length) return null;

  // Card-stack layout for 2-column tables on mobile
  if (headers.length === 2) {
    return (
      <div className="my-5 rounded-2xl border border-border/60 overflow-hidden">
        {title && (
          <div className="border-b border-border/40 bg-muted/30 px-4 py-3 sm:px-5">
            <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          </div>
        )}
        <div className="divide-y divide-border/40">
          {rows.map((row, i) => (
            <div key={i} className="px-4 py-3 sm:px-5 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="text-[13px] font-medium text-foreground">{row[0]}</div>
              <div className="mt-1 sm:mt-0 text-[13px] text-muted-foreground leading-relaxed">{row[1]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Standard table with horizontal scroll for 3+ columns
  return (
    <div className="my-5 rounded-2xl border border-border/60 overflow-hidden">
      {title && (
        <div className="border-b border-border/40 bg-muted/30 px-4 py-3 sm:px-5">
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border/40">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`px-3 sm:px-4 py-2.5 text-left font-medium text-foreground whitespace-nowrap ${
                    i === 0 ? "sticky left-0 z-10 bg-muted shadow-[2px_0_4px_-2px_rgba(0,0,0,0.08)]" : "bg-muted/20"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border/30 last:border-0">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-3 sm:px-4 py-2.5 text-muted-foreground ${
                      j === 0
                        ? "sticky left-0 z-10 bg-card font-medium text-foreground whitespace-nowrap shadow-[2px_0_4px_-2px_rgba(0,0,0,0.08)]"
                        : "min-w-[120px]"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── DosDonts ──────────────────────────────────────────────────────
export function DosDonts({ dos = [], donts = [] }: { dos: string[]; donts: string[] }) {
  if (!dos?.length && !donts?.length) return null;
  return (
    <div className="my-5 flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4">
      <div className="rounded-2xl border border-[var(--success)]/20 bg-[var(--success)]/[0.03] px-4 py-4 sm:px-5">
        <div className="mb-3 flex items-center gap-2 text-[var(--success)]">
          <ThumbsUp className="h-4 w-4 shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Do
          </span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {dos.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-foreground/85"
            >
              <CheckCircle2 className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[var(--success)]" />
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] px-4 py-4 sm:px-5">
        <div className="mb-3 flex items-center gap-2 text-destructive">
          <ThumbsDown className="h-4 w-4 shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Don&apos;t
          </span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {donts.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-foreground/85"
            >
              <XCircle className="mt-[3px] h-3.5 w-3.5 shrink-0 text-destructive" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── CaseStudy ─────────────────────────────────────────────────────
export function CaseStudy({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-2xl border border-chart-2/20 bg-chart-2/[0.03] px-4 py-4 sm:px-5 sm:py-5">
      <div className="mb-2 flex items-center gap-2">
        <BookOpen className="h-4 w-4 shrink-0 text-chart-2" />
        <span className="text-xs font-semibold uppercase tracking-wider text-chart-2">
          Case Study
        </span>
      </div>
      <h4 className="text-[15px] font-semibold text-foreground">{title}</h4>
      <div className="mt-2 text-[15px] leading-[1.7] text-foreground/85">
        {children}
      </div>
    </div>
  );
}

// ─── KeyConcept ────────────────────────────────────────────────────
export function KeyConcept({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-2xl border border-border/60 bg-muted/30 px-4 py-4 sm:px-5 sm:py-5">
      <h3 className="text-base font-semibold text-foreground">
        {title || "Key Concept"}
      </h3>
      <div className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

// ─── JargonTooltip ─────────────────────────────────────────────────
export function JargonTooltip({
  term,
  definition,
  children,
}: {
  term: string;
  definition: string;
  children?: React.ReactNode;
}) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dashed border-primary/40 text-foreground">
            {children || term}
          </span>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <p className="font-semibold text-foreground">{term}</p>
          <p className="mt-1 text-xs text-muted-foreground">{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// ─── QuizBlock ─────────────────────────────────────────────────────
export type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export function QuizBlock({ questions = [] }: { questions: QuizQuestion[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [direction, setDirection] = useState<"left" | "right">("left");
  if (!questions || !questions.length) return null;

  const totalSlides = questions.length + 1; // questions + results slide
  const isResultSlide = currentSlide === questions.length;

  const handleSelect = (qIdx: number, aIdx: number) => {
    if (revealed[qIdx]) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: aIdx }));
  };

  const handleReveal = (qIdx: number) => {
    setRevealed((prev) => ({ ...prev, [qIdx]: true }));
  };

  const goNext = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection("left");
      setCurrentSlide((s) => s + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide > 0) {
      setDirection("right");
      setCurrentSlide((s) => s - 1);
    }
  };

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlide ? "left" : "right");
    setCurrentSlide(idx);
  };

  const handleReset = () => {
    setAnswers({});
    setRevealed({});
    setDirection("right");
    setCurrentSlide(0);
  };

  const correctCount = questions.filter(
    (q, i) => revealed[i] && answers[i] === q.correct
  ).length;

  const allRevealed = questions.every((_, i) => revealed[i]);

  return (
    <div className="my-6 rounded-2xl border border-border/60 bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-border/40">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary shrink-0" />
          <h2 className="text-base font-semibold text-foreground">Quick Quiz</h2>
        </div>
        <span className="text-[12px] text-muted-foreground">
          {isResultSlide ? "Results" : `${currentSlide + 1} of ${questions.length}`}
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 px-4 pt-3 sm:pt-4">
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "w-6 bg-primary"
                : revealed[i]
                ? answers[i] === questions[i].correct
                  ? "w-2 bg-[var(--success)]"
                  : "w-2 bg-destructive"
                : answers[i] != null
                ? "w-2 bg-primary/40"
                : "w-2 bg-border"
            }`}
            aria-label={`Go to question ${i + 1}`}
          />
        ))}
        <button
          onClick={() => goToSlide(questions.length)}
          className={`h-2 rounded-full transition-all duration-300 ${
            isResultSlide ? "w-6 bg-primary" : "w-2 bg-border"
          }`}
          aria-label="Go to results"
        />
      </div>

      {/* Slide container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Question slides */}
          {questions.map((q, qIdx) => {
            const userAnswer = answers[qIdx];
            const isRevealed = revealed[qIdx];
            const isCorrect = isRevealed && userAnswer === q.correct;

            return (
              <div
                key={qIdx}
                className="w-full shrink-0 px-4 py-4 sm:px-6 sm:py-5"
              >
                <p className="text-[15px] font-medium text-foreground leading-relaxed">
                  {q.question}
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  {q.options.map((option, aIdx) => {
                    let btnClass =
                      "border-border/60 text-foreground hover:border-primary/30 active:scale-[0.99]";
                    if (userAnswer === aIdx && !isRevealed) {
                      btnClass = "border-primary bg-primary/10 text-primary ring-1 ring-primary/20";
                    }
                    if (isRevealed) {
                      if (aIdx === q.correct) {
                        btnClass =
                          "border-[var(--success)] bg-[var(--success)]/10 text-[var(--success)]";
                      } else if (userAnswer === aIdx && aIdx !== q.correct) {
                        btnClass =
                          "border-destructive bg-destructive/10 text-destructive";
                      } else {
                        btnClass =
                          "border-border/30 text-muted-foreground/50";
                      }
                    }

                    return (
                      <button
                        key={aIdx}
                        onClick={() => handleSelect(qIdx, aIdx)}
                        disabled={isRevealed}
                        className={`flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-left text-[14px] leading-relaxed transition-all duration-200 ${btnClass}`}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-medium">
                          {isRevealed && aIdx === q.correct ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : isRevealed && userAnswer === aIdx && aIdx !== q.correct ? (
                            <XCircle className="h-4 w-4" />
                          ) : (
                            String.fromCharCode(65 + aIdx)
                          )}
                        </span>
                        <span className="flex-1">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Reveal / explanation area */}
                {!isRevealed ? (
                  <div className="mt-4 flex items-center gap-3">
                    <Button
                      onClick={() => handleReveal(qIdx)}
                      disabled={userAnswer == null}
                      size="sm"
                      className="rounded-xl px-5 h-10"
                    >
                      Check Answer
                    </Button>
                    {userAnswer == null && (
                      <span className="text-[12px] text-muted-foreground">
                        Select an option first
                      </span>
                    )}
                  </div>
                ) : (
                  <div
                    className={`mt-3 rounded-xl px-3.5 py-3 text-[13px] leading-relaxed ${
                      isCorrect
                        ? "bg-[var(--success)]/5 text-[var(--success)]"
                        : "bg-destructive/5 text-destructive"
                    }`}
                  >
                    {isCorrect ? "✅ Correct! " : "❌ Not quite. "}
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}

          {/* Results slide */}
          <div className="w-full shrink-0 px-4 py-6 sm:px-6 sm:py-8">
            <div className="flex flex-col items-center text-center">
              <div className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${
                allRevealed && correctCount === questions.length
                  ? "bg-[var(--success)]/10 text-[var(--success)]"
                  : allRevealed
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}>
                {allRevealed ? `${correctCount}/${questions.length}` : "?"}
              </div>

              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {!allRevealed
                  ? "Answer all questions first"
                  : correctCount === questions.length
                  ? "Perfect Score! 🎉"
                  : correctCount >= questions.length / 2
                  ? "Good Job! 👍"
                  : "Keep Learning! 📚"}
              </h3>

              <p className="mt-1 text-[13px] text-muted-foreground max-w-xs">
                {!allRevealed
                  ? `You've answered ${Object.keys(revealed).length} of ${questions.length} questions. Go back and complete the rest.`
                  : correctCount === questions.length
                  ? "You nailed every question. You're ready to move on!"
                  : `You got ${correctCount} out of ${questions.length} correct. Review the explanations and try again.`}
              </p>

              {allRevealed && (
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="sm"
                  className="mt-4 rounded-xl px-5 h-10"
                >
                  Try Again
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation footer */}
      <div className="flex items-center justify-between border-t border-border/40 px-4 py-3 sm:px-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="rounded-xl h-9 px-3 text-[13px]"
        >
          ← Back
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={goNext}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-xl h-9 px-3 text-[13px]"
        >
          Next →
        </Button>
      </div>
    </div>
  );
}

// ─── InteractiveScenario ───────────────────────────────────────────
export type ScenarioOption = {
  text: string;
  feedback: string;
  isRecommended: boolean;
};

export function InteractiveScenario({
  scenario,
  options = [],
}: {
  scenario: string;
  options: ScenarioOption[];
}) {
  const [selected, setSelected] = useState<number | null>(null);
  if (!options || !options.length) return null;

  return (
    <div className="my-5 rounded-2xl border border-chart-4/20 bg-chart-4/[0.03] px-4 py-4 sm:px-5 sm:py-5">
      <div className="mb-3 flex items-center gap-2 text-chart-4">
        <HelpCircle className="h-4 w-4 shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          What Would You Do?
        </span>
      </div>
      <p className="text-[15px] font-medium leading-[1.6] text-foreground">{scenario}</p>
      <div className="mt-4 flex flex-col gap-2.5">
        {options.map((opt, i) => (
          <div key={i}>
            <button
              onClick={() => setSelected(i)}
              className={`w-full rounded-xl border px-3.5 py-3 text-left text-[14px] leading-relaxed transition-colors active:scale-[0.99] ${
                selected === i
                  ? opt.isRecommended
                    ? "border-[var(--success)] bg-[var(--success)]/10"
                    : "border-destructive bg-destructive/10"
                  : "border-border/60 hover:border-primary/30 active:bg-primary/5"
              }`}
            >
              <span className="text-foreground">{opt.text}</span>
            </button>
            {selected === i && (
              <p
                className={`mt-1.5 rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  opt.isRecommended
                    ? "bg-[var(--success)]/5 text-[var(--success)]"
                    : "bg-muted/40 text-muted-foreground"
                }`}
              >
                {opt.feedback}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PrerequisiteGate ──────────────────────────────────────────────
export function PrerequisiteGate({
  articles,
}: {
  articles: { title: string; href: string }[];
}) {
  if (!articles.length) return null;
  return (
    <div className="my-5 rounded-2xl border border-[var(--warning)]/20 bg-[var(--warning)]/[0.03] px-4 py-4 sm:px-5">
      <div className="mb-2 flex items-center gap-2 text-[var(--warning)]">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        <span className="text-xs font-semibold tracking-wide">
          Before reading this, we recommend:
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {articles.map((a) => (
          <li key={a.href}>
            <Link
              href={a.href}
              className="flex items-center gap-2 text-[14px] text-primary hover:underline"
            >
              <ArrowRight className="h-3 w-3 shrink-0" />
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── EmbeddedCalculatorLink ────────────────────────────────────────
export function EmbeddedCalculatorLink({
  type,
  title,
  description,
}: {
  type: string;
  title?: string;
  description?: string;
}) {
  return (
    <Link href={`/tools/${type}`}>
      <div className="my-5 flex items-center gap-3.5 rounded-2xl border border-primary/15 bg-secondary/50 px-4 py-4 transition-colors hover:border-primary/30 active:bg-secondary sm:px-5">
        <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Calculator className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h4 className="text-[14px] font-semibold text-foreground">
            {title || "Try the Calculator"}
          </h4>
          <p className="text-[13px] text-muted-foreground leading-snug mt-0.5">
            {description ||
              "Open the interactive calculator to practice this concept →"}
          </p>
        </div>
      </div>
    </Link>
  );
}
