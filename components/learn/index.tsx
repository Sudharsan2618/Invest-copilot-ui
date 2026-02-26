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
                width={400}
                height={260}
                className="h-auto max-h-48 sm:max-h-56 w-full object-contain"
                onError={() => setError(true)}
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
            width={500}
            height={300}
            className="h-auto max-h-52 sm:max-h-64 w-full object-contain"
            onError={() => setError(true)}
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
          <details className="mt-2 text-left">
            <summary className="cursor-pointer text-[11px] text-primary hover:underline">
              🎨 Image prompt
            </summary>
            <p className="mt-1.5 rounded-lg bg-card p-2 text-[11px] leading-relaxed text-muted-foreground">
              {prompt}
            </p>
          </details>
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
                  key={h}
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
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [submitted, setSubmitted] = useState(false);
  if (!questions || !questions.length) return null;

  const handleSelect = (qIdx: number, aIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: aIdx }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const correctCount = submitted
    ? questions.filter((q, i) => answers[i] === q.correct).length
    : 0;

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="my-6 rounded-2xl border border-border/60 bg-card">
      <div className="px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary shrink-0" />
          <h2 className="text-base font-semibold text-foreground">Quick Quiz</h2>
          {submitted && (
            <Badge
              variant={
                correctCount === questions.length ? "default" : "outline"
              }
              className="ml-auto text-xs"
            >
              {correctCount}/{questions.length} Correct
            </Badge>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-6">
          {questions.map((q, qIdx) => {
            const userAnswer = answers[qIdx];
            const isCorrect = submitted && userAnswer === q.correct;

            return (
              <div key={qIdx}>
                <p className="text-[14px] font-medium text-foreground leading-relaxed">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {q.options.map((option, aIdx) => {
                    let btnClass =
                      "border-border/60 text-foreground active:bg-primary/5";
                    if (userAnswer === aIdx && !submitted) {
                      btnClass = "border-primary bg-primary/10 text-primary";
                    }
                    if (submitted) {
                      if (aIdx === q.correct) {
                        btnClass =
                          "border-[var(--success)] bg-[var(--success)]/10 text-[var(--success)]";
                      } else if (userAnswer === aIdx && aIdx !== q.correct) {
                        btnClass =
                          "border-destructive bg-destructive/10 text-destructive";
                      } else {
                        btnClass =
                          "border-border/40 text-muted-foreground opacity-50";
                      }
                    }

                    return (
                      <button
                        key={aIdx}
                        onClick={() => handleSelect(qIdx, aIdx)}
                        disabled={submitted}
                        className={`flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-left text-[14px] leading-relaxed transition-colors ${btnClass}`}
                      >
                        {submitted && aIdx === q.correct && (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                        )}
                        {submitted &&
                          userAnswer === aIdx &&
                          aIdx !== q.correct && (
                            <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                          )}
                        {option}
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <div
                    className={`mt-2 rounded-xl px-3.5 py-3 text-[13px] leading-relaxed ${
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
        </div>

        <div className="mt-5 flex items-center gap-3">
          {!submitted ? (
            <Button onClick={handleSubmit} disabled={!allAnswered} size="sm" className="rounded-xl px-5 h-10">
              Check Answers
            </Button>
          ) : (
            <Button onClick={handleReset} variant="outline" size="sm" className="rounded-xl px-5 h-10">
              Try Again
            </Button>
          )}
          {!allAnswered && !submitted && (
            <span className="text-xs text-muted-foreground">
              Answer all to check
            </span>
          )}
        </div>
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
