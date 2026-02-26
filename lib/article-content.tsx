// Article Content Data — Unique, rich content for every article
// Each article is a React component that uses the learn/ components

import React from "react"
import {
  Analogy,
  ConceptImage,
  FormulaBox,
  IndianContext,
  ComparisonChart,
  ComparisonTable,
  DosDonts,
  CaseStudy,
  KeyConcept,
  JargonTooltip,
  QuizBlock,
  InteractiveScenario,
  PrerequisiteGate,
  EmbeddedCalculatorLink,
} from "@/components/learn"
import type { QuizQuestion, ScenarioOption } from "@/components/learn"

// ─── Types ─────────────────────────────────────────────────────────
export type ArticleContentData = {
  keyTakeaways: string[]
  prerequisites?: { title: string; href: string }[]
  content: React.ReactNode
  quiz: QuizQuestion[]
  relatedArticles?: { title: string; href: string }[]
}

// ─── Article: What is Money ────────────────────────────────────────
function WhatIsMoneyContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Before we talk about investing, we need to understand what money really is.
        Most of us think of money as the notes and coins in our wallet. But money is
        much bigger than that — it&apos;s a tool, a system, and a language that the
        entire world agrees on.
      </p>

      <Analogy>
        Think of money like a battery. A battery stores energy so you can use it later.
        Similarly, money stores value. You work today, earn money, and store that value
        to use it tomorrow — to buy food, pay rent, or invest in your future.
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Three Jobs of Money</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Money does three things for us:
      </p>

      <ComparisonTable
        title="The Three Functions of Money"
        headers={["Function", "What It Means", "Example"]}
        rows={[
          ["Medium of Exchange", "You can use it to buy things", "Paying ₹50 for a cup of chai"],
          ["Store of Value", "It holds its worth over time (mostly)", "Saving ₹10,000 in a bank account"],
          ["Unit of Account", "It measures the value of everything", "A phone is ₹15,000, a bike is ₹80,000"],
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">Why Understanding Money Matters for Investing</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Here&apos;s the uncomfortable truth: money sitting idle is <em>losing value</em> every
        single day. If prices rise 6% a year (that&apos;s{" "}
        <JargonTooltip term="Inflation" definition="The rate at which prices rise over time, reducing purchasing power. India's average inflation is ~5-6% per year.">
          inflation
        </JargonTooltip>
        ), then your ₹1,00,000 today can only buy ₹94,000 worth of stuff next year.
      </p>

      <IndianContext>
        India&apos;s average inflation rate has been between 5-7% over the last decade.
        This means every ₹100 you keep under your mattress loses ₹5-7 in buying
        power each year. In 10 years, your ₹100 can only buy what ₹55-60 buys today.
      </IndianContext>

      <KeyConcept title="The Core Insight">
        Money is not just for spending or saving — it&apos;s meant to be <strong>put to work</strong>.
        When you invest your money, you&apos;re making it work for you, earning returns
        that help you stay ahead of inflation and build wealth over time.
      </KeyConcept>

      <h2 className="mt-8 text-xl font-semibold text-foreground">Types of Money in the Modern World</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Money has evolved far beyond coins and notes:
      </p>
      <ComparisonTable
        headers={["Type", "Examples", "Key Feature"]}
        rows={[
          ["Physical Cash", "₹500 note, ₹10 coin", "Tangible, limited by what you carry"],
          ["Digital Money", "UPI, net banking, cards", "Instant transfers, digital trail"],
          ["Investment Assets", "Stocks, mutual funds, gold", "Money that grows over time"],
          ["Cryptocurrency", "Bitcoin, Ethereum", "Decentralized, highly volatile"],
        ]}
      />

      <ConceptImage
        src="/learn/foundations/what-is-money-hero.png"
        alt="Evolution of money from barter to digital payments"
        caption="Money has evolved from barter trade to digital UPI payments"
      />

      <DosDonts
        dos={[
          "Understand that money is a tool — learn to use it wisely",
          "Start thinking about where your money goes each month",
          "Consider money a resource that should be working for you",
        ]}
        donts={[
          "Don't let money sit idle in a zero-interest account",
          "Don't think investing is only for rich people",
          "Don't ignore inflation — it's silently reducing your wealth",
        ]}
      />
    </>
  )
}

// ─── Article: Inflation ────────────────────────────────────────────
function InflationContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Your parents probably tell you stories about how a movie ticket used to cost
        ₹10 and a plate of dosa was ₹5. Today, the same movie ticket is ₹300 and
        that dosa is ₹80. The movies and dosas haven&apos;t changed — the value of money has.
        That is{" "}
        <JargonTooltip term="Inflation" definition="The rate at which prices rise over time, reducing purchasing power. India's average inflation is ~5-6% per year.">
          inflation
        </JargonTooltip>.
      </p>

      <Analogy>
        Imagine you have an ice cream cone in the sun. Every minute, it melts a little.
        You don&apos;t notice at first, but after an hour, you&apos;re holding a stick with
        no ice cream. That&apos;s exactly what inflation does to your money — it silently
        melts away its purchasing power.
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">How Inflation Works</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Inflation is measured as a percentage per year. When we say &quot;inflation is 6%&quot;,
        it means prices are rising 6% every year on average. The{" "}
        <JargonTooltip term="RBI" definition="Reserve Bank of India — India's central bank that controls monetary policy and interest rates.">
          RBI
        </JargonTooltip>
        {" "}tries to keep inflation around 4% (their target), but it often ranges from 4-7%.
      </p>

      <ComparisonChart
        title="What ₹100 Could Buy Over the Years"
        items={[
          { label: "2005 (₹100 = ₹100)", value: 100, color: "success" },
          { label: "2010 (₹100 = ₹75)", value: 75, color: "success" },
          { label: "2015 (₹100 = ₹55)", value: 55, color: "warning" },
          { label: "2020 (₹100 = ₹42)", value: 42, color: "warning" },
          { label: "2025 (₹100 = ₹34)", value: 34, color: "destructive" },
        ]}
      />

      <KeyConcept title="The Real Return">
        If your Fixed Deposit gives you 7% interest but inflation is 6%, your{" "}
        <strong>real return is only 1%</strong>. You&apos;re barely keeping up with price increases.
        This is why just saving money isn&apos;t enough — you need to invest to beat inflation.
      </KeyConcept>

      <h2 className="mt-8 text-xl font-semibold text-foreground">Inflation and Different Investments</h2>

      <ComparisonTable
        title="Which Investments Beat Inflation?"
        headers={["Investment", "Typical Returns", "Beats 6% Inflation?"]}
        rows={[
          ["Savings Account", "3-4%", "❌ No — you're losing money"],
          ["Fixed Deposit", "6-7%", "⚠️ Barely — after tax, usually not"],
          ["Gold", "8-10%", "✅ Usually, over long periods"],
          ["Nifty 50 Index Fund", "12-14%", "✅ Yes — significantly beats inflation"],
          ["PPF", "7.1%", "⚠️ Marginally, but has tax benefits"],
        ]}
      />

      <IndianContext>
        In India, food inflation is often higher than general inflation. Vegetables, pulses,
        and cooking oil prices can surge 15-20% in a bad year. This hits household budgets
        hard, which is why your parents feel prices rising more than official numbers suggest.
      </IndianContext>

      <ConceptImage
        src="/learn/foundations/inflation-erosion.png"
        alt="Inflation eroding the value of ₹100 over 20 years"
        caption="₹100 today will only buy ₹34 worth of goods in 20 years at 6% inflation"
      />

      <CaseStudy title="The Story of the ₹500 Note">
        In 2000, the ₹500 note was the highest denomination in India and could buy a
        family dinner at a restaurant, a week&apos;s vegetables, or a decent shirt. Today,
        the ₹500 note barely covers a meal for two at the same restaurant.
        The note didn&apos;t shrink — inflation made everything more expensive around it.
      </CaseStudy>

      <InteractiveScenario
        scenario="Your grandparents give you ₹5,00,000 as a gift. You don't need it for the next 10 years. Where do you put it?"
        options={[
          {
            text: "Keep it in a savings account (3.5% interest)",
            feedback: "After 10 years at 6% inflation, your ₹5L can only buy what ₹3.7L buys today. You're losing ₹1.3L in purchasing power!",
            isRecommended: false,
          },
          {
            text: "Put it in a Fixed Deposit (7% interest)",
            feedback: "Better, but after tax (30% bracket) your effective return is ~4.9%. Still not beating inflation significantly.",
            isRecommended: false,
          },
          {
            text: "Invest in a Nifty 50 Index Fund (12-14% historical returns)",
            feedback: "At 12% returns, your ₹5L grows to ~₹15.5L in 10 years. Even after inflation, you've genuinely grown your wealth. This is the power of equity investing! ✅",
            isRecommended: true,
          },
          {
            text: "Buy gold (8-10% returns)",
            feedback: "Gold at 9% would give you ~₹11.8L. It beats inflation and is a good hedge, but equities have historically outperformed over 10+ years.",
            isRecommended: false,
          },
        ]}
      />

      <DosDonts
        dos={[
          "Always calculate REAL returns (return minus inflation)",
          "Invest in assets that historically beat inflation (equity, gold)",
          "Use SIPs to invest consistently regardless of inflation",
        ]}
        donts={[
          "Don't keep large amounts in savings accounts for years",
          "Don't think FDs alone will make you wealthy",
          "Don't ignore inflation when planning for retirement",
        ]}
      />
    </>
  )
}

// ─── Article: Magic of Compounding ─────────────────────────────────
function MagicOfCompoundingContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Albert Einstein reportedly called compound interest the &quot;eighth wonder of the world.&quot;
        Whether he actually said that or not, the math behind compounding is truly magical.
        It&apos;s the single most powerful concept in investing, and understanding it will
        change how you think about money forever.
      </p>

      <Analogy>
        Imagine you plant a mango tree. Year 1, it gives you 10 mangoes. But each mango
        has seeds that grow into new trees. By year 5, you don&apos;t just have more mangoes
        from the original tree — you have mangoes from the new trees too. And those new
        trees produce seeds that grow even more trees. In 20 years, you have an entire orchard
        from a single seed. That&apos;s{" "}
        <JargonTooltip term="Compounding" definition="When your investment returns earn their own returns. Your money grows exponentially over time.">
          compounding
        </JargonTooltip>.
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">Simple Interest vs Compound Interest</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        The difference between simple and compound interest is the difference between
        addition and multiplication:
      </p>

      <ComparisonChart
        title="₹1,00,000 invested for 20 years at 12% per year"
        items={[
          { label: "Simple Interest", value: 340000, color: "warning" },
          { label: "Compound Interest", value: 964629, color: "success" },
        ]}
      />

      <p className="mt-3 leading-relaxed text-muted-foreground">
        With simple interest, your ₹1 lakh grows to ₹3.4 lakh. With compound interest,
        the same ₹1 lakh grows to <strong>₹9.6 lakh</strong> — nearly 3x more! The difference
        is that compounding earns interest on your interest.
      </p>

      <FormulaBox
        title="The Compound Interest Formula"
        formula="A = P × (1 + r/n)^(n×t)"
        variables={[
          { symbol: "A", meaning: "Final amount" },
          { symbol: "P", meaning: "Principal (starting amount)" },
          { symbol: "r", meaning: "Annual interest rate (as decimal)" },
          { symbol: "n", meaning: "Times compounding happens per year" },
          { symbol: "t", meaning: "Number of years" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Rule of 72</h2>

      <KeyConcept title="Rule of 72">
        Want a quick shortcut? Divide 72 by your expected annual return to know how
        many years it takes to <strong>double</strong> your money.
        <div className="mt-3 rounded-md bg-card p-3 font-mono text-sm text-foreground">
          72 ÷ 12% = <strong>6 years</strong> to double your money
          <br />
          72 ÷ 8% = <strong>9 years</strong> to double your money
          <br />
          72 ÷ 6% = <strong>12 years</strong> to double your money
        </div>
      </KeyConcept>

      <h2 className="mt-8 text-xl font-semibold text-foreground">Why Starting Early Matters So Much</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        This is the most important lesson in all of investing. The earlier you start,
        the more time compounding has to work its magic.
      </p>

      <CaseStudy title="The Tale of Priya and Rahul">
        <strong>Priya</strong> starts a{" "}
        <JargonTooltip term="SIP" definition="Systematic Investment Plan — automatically investing a fixed amount every month into a mutual fund.">
          SIP
        </JargonTooltip>
        {" "}of ₹5,000/month at age 25 and stops at age 35 (10 years, ₹6L invested).
        <br /><br />
        <strong>Rahul</strong> starts the same ₹5,000/month SIP at age 35 and continues
        until age 55 (20 years, ₹12L invested).
        <br /><br />
        At 12% annual returns, at age 55:
        <br />
        • Priya&apos;s corpus: <strong>₹1.76 crore</strong> (invested only ₹6L!)
        <br />
        • Rahul&apos;s corpus: <strong>₹50 lakh</strong> (invested ₹12L)
        <br /><br />
        Priya invested <em>half</em> the money but ended up with <em>3.5x more</em>.
        That&apos;s the power of starting early.
      </CaseStudy>

      <ConceptImage
        src="/learn/foundations/compounding-snowball.png"
        alt="Compounding snowball effect - small investments growing exponentially"
        caption="Compounding turns small, consistent investments into massive wealth over time"
      />

      <IndianContext>
        The{" "}
        <JargonTooltip term="Nifty 50" definition="An index tracking the 50 largest companies listed on the NSE. Used as a benchmark for Indian markets.">
          Nifty 50
        </JargonTooltip>
        {" "}has delivered approximately 12-14% annualized returns over the last 30 years.
        A monthly SIP of just ₹5,000 in a Nifty 50 index fund started at age 25 would
        grow to over <strong>₹1 crore</strong> by age 55. You don&apos;t need to be rich to
        start — you need to start early.
      </IndianContext>

      <EmbeddedCalculatorLink
        type="compound-interest"
        title="Try the Compound Interest Calculator"
        description="See how your money grows with different amounts, rates, and time periods →"
      />

      <DosDonts
        dos={[
          "Start investing as early as possible — even ₹500/month",
          "Let compounding work — don't withdraw early",
          "Reinvest dividends and returns for maximum compounding",
          "Use SIPs to invest consistently every month",
        ]}
        donts={[
          "Don't wait until you have a 'large amount' to start",
          "Don't interrupt compounding by withdrawing frequently",
          "Don't underestimate small, consistent investments",
        ]}
      />
    </>
  )
}

// ─── Article: Time Value of Money ──────────────────────────────────
function TimeValueOfMoneyContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        If someone offered you ₹1,00,000 today or ₹1,00,000 one year from now,
        which would you choose? The smart answer is: take it today. But why?
        Because of the{" "}
        <JargonTooltip term="Time Value of Money" definition="A rupee today is worth more than a rupee tomorrow, because today's rupee can be invested to earn returns.">
          Time Value of Money
        </JargonTooltip>
        {" "}— money available now is worth more than the same amount in the future.
      </p>

      <Analogy>
        Think of money like a seed. A seed planted today can grow into a tree over the
        next year. A seed given to you next year hasn&apos;t had the chance to grow yet.
        The seed (money) is the same, but the one you plant today has a head start.
        That head start is the time value of money.
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">Why Money Today is Worth More</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Three reasons make today&apos;s money more valuable:
      </p>

      <ComparisonTable
        title="Why ₹100 Today > ₹100 Tomorrow"
        headers={["Reason", "Explanation"]}
        rows={[
          ["Earning Potential", "₹100 today can be invested and grow to ₹112 in a year (at 12% return)"],
          ["Inflation Risk", "₹100 next year will buy less due to rising prices"],
          ["Uncertainty", "You might not receive the future money — life is unpredictable"],
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">Present Value vs Future Value</h2>

      <KeyConcept title="Two Sides of the Same Coin">
        <strong>Future Value (FV)</strong>: &quot;If I invest ₹1L today, how much will I have in 10 years?&quot;
        <br />
        <strong>Present Value (PV)</strong>: &quot;If I need ₹10L in 10 years, how much should I invest today?&quot;
        <br /><br />
        Both use the same math, just in opposite directions.
      </KeyConcept>

      <FormulaBox
        title="Future Value Formula"
        formula="FV = PV × (1 + r)^t"
        variables={[
          { symbol: "FV", meaning: "Future Value (what your money becomes)" },
          { symbol: "PV", meaning: "Present Value (what you invest today)" },
          { symbol: "r", meaning: "Annual return rate" },
          { symbol: "t", meaning: "Number of years" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">Real-World Application</h2>

      <ComparisonChart
        title="₹1,00,000 invested today at 12% — Future Value"
        items={[
          { label: "After 5 years", value: 176234 },
          { label: "After 10 years", value: 310585 },
          { label: "After 20 years", value: 964630 },
          { label: "After 30 years", value: 2995992, color: "success" },
        ]}
      />

      <IndianContext>
        This is why financial advisors in India always stress starting{" "}
        <JargonTooltip term="SIP" definition="Systematic Investment Plan — automatically investing a fixed amount every month into a mutual fund.">
          SIPs
        </JargonTooltip>
        {" "}early. Even ₹2,000/month at age 22 is more powerful than ₹10,000/month at age 35,
        because the earlier money has more time to compound.
      </IndianContext>

      <InteractiveScenario
        scenario="Your company offers you a choice: ₹5,00,000 bonus today OR ₹6,00,000 guaranteed in 2 years. Which is better financially?"
        options={[
          {
            text: "Take ₹5L today",
            feedback: "If you invest ₹5L at 12% for 2 years, it becomes ₹6,27,200. That's MORE than the ₹6L offered in 2 years! Plus you had the flexibility to use the money if needed. ✅",
            isRecommended: true,
          },
          {
            text: "Wait for ₹6L in 2 years",
            feedback: "₹6L in 2 years has a present value of only ₹4,78,000 (at 12% discount rate). You're actually getting LESS value. Time value of money in action!",
            isRecommended: false,
          },
        ]}
      />

      <DosDonts
        dos={[
          "Take money sooner rather than later when the amounts are equal",
          "Calculate the present value of future payments before deciding",
          "Factor in opportunity cost — what could you earn by investing that money?",
        ]}
        donts={[
          "Don't assume ₹1L today and ₹1L next year are the same",
          "Don't delay investing because 'the amount is too small'",
          "Don't ignore time value when planning for goals like retirement or education",
        ]}
      />
    </>
  )
}

// ─── Article: Risk vs Reward ───────────────────────────────────────
function RiskVsRewardContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Every investment decision comes down to one fundamental trade-off: how much risk
        are you willing to take for the potential reward? There is no such thing as a
        &quot;high return, zero risk&quot; investment. Anyone who tells you otherwise is either
        misinformed or trying to scam you.
      </p>

      <Analogy>
        Think of investing like choosing a route to travel from Mumbai to Delhi. The
        highway (safe but slow) will get you there reliably but takes time — that&apos;s like
        Fixed Deposits. The shortcut through rough terrain (risky but fast) might get you
        there faster, but you could also get stuck — that&apos;s like stock picking. A
        well-maintained express road (balanced) offers good speed with reasonable safety
        — that&apos;s like index funds.
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Risk-Reward Spectrum</h2>

      <ComparisonTable
        title="Risk-Reward Spectrum of Indian Investments"
        headers={["Investment", "Risk Level", "Expected Return", "Best For"]}
        rows={[
          ["Savings Account", "🟢 Very Low", "3-4%", "Emergency cash"],
          ["Fixed Deposit", "🟢 Low", "6-7%", "Short-term goals"],
          ["PPF", "🟢 Low", "7.1%", "Long-term tax saving"],
          ["Government Bonds", "🟢 Low", "7-8%", "Conservative investors"],
          ["Gold", "🟡 Moderate", "8-10%", "Diversification, inflation hedge"],
          ["Nifty 50 Index Fund", "🟡 Moderate", "12-14%", "Long-term wealth building"],
          ["Individual Stocks", "🔴 High", "Variable", "Experienced investors"],
          ["Small-Cap Stocks", "🔴 Very High", "Variable", "High risk tolerance"],
          ["Crypto", "🔴 Extreme", "Variable", "Speculation, small allocation"],
        ]}
      />

      <ConceptImage
        src="/learn/foundations/risk-reward-spectrum.png"
        alt="Risk vs Reward spectrum showing different investment types"
        caption="Higher potential returns always come with higher potential losses"
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">Understanding Your Risk Profile</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Your risk profile depends on two things:
      </p>

      <ComparisonTable
        headers={["Factor", "What It Means", "Example"]}
        rows={[
          ["Risk Tolerance", "How much loss you can emotionally handle", "Can you sleep at night if your portfolio drops 20%?"],
          ["Risk Capacity", "How much loss you can financially afford", "If you lose ₹50,000, does it affect your rent or EMI?"],
        ]}
      />

      <IndianContext>
        Most young Indian professionals (age 22-30) have high risk <em>capacity</em> because
        they have decades to recover from losses and no dependents. But many have low risk
        <em> tolerance</em> because they&apos;ve never experienced a market crash. The fix?
        Start investing small amounts in equity, experience market fluctuations, and
        build emotional resilience over time.
      </IndianContext>

      <EmbeddedCalculatorLink
        type="risk-score"
        title="Find Your Risk Profile"
        description="Take the 5-question quiz to discover whether you're conservative, moderate, or aggressive →"
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Key Lesson: Risk Can Be Managed</h2>

      <DosDonts
        dos={[
          "Match investments to your time horizon — long term = can take more risk",
          "Diversify across asset classes to manage risk",
          "Start with index funds if you're a beginner",
          "Accept that some volatility is the price of higher returns",
        ]}
        donts={[
          "Don't invest money you'll need in 1-2 years into stocks",
          "Don't put all your money in one stock or sector",
          "Don't panic sell during market corrections",
          "Don't chase 'guaranteed high returns' — it's likely a scam",
        ]}
      />

      <InteractiveScenario
        scenario="You invested ₹1,00,000 in a Nifty 50 index fund. After 3 months, it drops to ₹85,000 (a 15% crash). What should you do?"
        options={[
          {
            text: "Sell immediately to cut your losses",
            feedback: "This locks in your loss permanently. Historically, every major market crash has recovered within 1-3 years. Selling at the bottom is the worst strategy.",
            isRecommended: false,
          },
          {
            text: "Hold and wait for recovery",
            feedback: "Smart choice! Since 1990, the Nifty has recovered from every crash. If you hold and wait, you'll likely recover and then some. Patience is rewarded. ✅",
            isRecommended: true,
          },
          {
            text: "Invest another ₹50,000 (buy the dip)",
            feedback: "This is advanced but very smart if you have spare money! Buying during crashes means you get more units at lower prices. When the market recovers, your returns are amplified. ✅",
            isRecommended: true,
          },
          {
            text: "Move everything to Fixed Deposits",
            feedback: "This means selling at a loss AND missing the recovery. A common beginner mistake driven by fear. The market dip is temporary, but your loss becomes permanent if you sell.",
            isRecommended: false,
          },
        ]}
      />
    </>
  )
}

// ─── Content Registry ──────────────────────────────────────────────
// Maps article slugs to their unique content, key takeaways, and quizzes

export const articleContent: Record<string, ArticleContentData> = {
  "what-is-money": {
    keyTakeaways: [
      "Money is a tool that serves three functions: exchange, store of value, and unit of account",
      "Idle money loses value every year due to inflation (~6% in India)",
      "Understanding money is the first step to making smart investment decisions",
    ],
    content: <WhatIsMoneyContent />,
    quiz: [
      {
        question: "What are the three functions of money?",
        options: [
          "Spending, Saving, Investing",
          "Medium of Exchange, Store of Value, Unit of Account",
          "Cash, Digital, Crypto",
          "Income, Expense, Profit",
        ],
        correct: 1,
        explanation: "Money serves as a medium of exchange (buying), store of value (saving), and unit of account (measuring value).",
      },
      {
        question: "If inflation is 6% per year, what happens to ₹100 kept under your mattress for 10 years?",
        options: [
          "It stays at ₹100",
          "It grows to ₹160",
          "Its purchasing power drops to about ₹55-60",
          "It loses all value",
        ],
        correct: 2,
        explanation: "At 6% inflation, prices roughly double every 12 years. After 10 years, your ₹100 can only buy what ₹55-60 buys today.",
      },
    ],
  },

  "inflation-silent-wealth-killer": {
    keyTakeaways: [
      "Inflation means rising prices — your money buys less over time",
      "India's average inflation is 5-7%, meaning your savings lose 5-7% in buying power each year",
      "To grow wealth, your investments must beat inflation (earn more than 6% after tax)",
    ],
    prerequisites: [
      { title: "What is Money and Why It Matters", href: "/learn/foundations-of-money/what-is-money" },
    ],
    content: <InflationContent />,
    quiz: [
      {
        question: "If your FD gives 7% return and inflation is 6%, what is your REAL return?",
        options: ["7%", "6%", "1%", "13%"],
        correct: 2,
        explanation: "Real return = Nominal return - Inflation. 7% - 6% = 1%. Before tax, you're barely keeping up with inflation.",
      },
      {
        question: "Which of these investments has the best chance of beating 6% inflation over 10+ years?",
        options: [
          "Savings Account (3.5%)",
          "Fixed Deposit (7%)",
          "Nifty 50 Index Fund (12-14%)",
          "Keeping cash at home (0%)",
        ],
        correct: 2,
        explanation: "Nifty 50 index funds have historically returned 12-14% annually, significantly beating inflation. Savings accounts and cash actually LOSE value after inflation.",
      },
    ],
  },

  "magic-of-compounding": {
    keyTakeaways: [
      "Compounding means your returns earn their own returns — exponential growth",
      "Rule of 72: Divide 72 by annual return to find years to double your money",
      "Starting early matters more than investing large amounts — time is the key ingredient",
    ],
    prerequisites: [
      { title: "Time Value of Money", href: "/learn/foundations-of-money/time-value-of-money" },
    ],
    content: <MagicOfCompoundingContent />,
    quiz: [
      {
        question: "Using the Rule of 72, how long does it take to double your money at 12% annual returns?",
        options: ["4 years", "6 years", "8 years", "12 years"],
        correct: 1,
        explanation: "72 ÷ 12 = 6 years. At 12% compound interest, your money doubles every 6 years.",
      },
      {
        question: "Priya invests ₹5,000/month from age 25-35 (₹6L total). Rahul invests ₹5,000/month from 35-55 (₹12L total). At 12% returns, who has more at age 55?",
        options: [
          "Rahul — he invested twice as much money",
          "They end up with the same amount",
          "Priya — she started 10 years earlier",
          "Neither — both should have invested in FDs",
        ],
        correct: 2,
        explanation: "Priya ends up with ~₹1.76 crore vs Rahul's ~₹50 lakh. Starting early gives compounding 10 extra years to work, which matters more than the amount invested.",
      },
    ],
  },

  "time-value-of-money": {
    keyTakeaways: [
      "A rupee today is worth more than a rupee tomorrow — it can be invested to earn returns",
      "Use Future Value to calculate what today's investment becomes; Present Value for backward calculation",
      "This is why starting to invest early is so powerful, even with small amounts",
    ],
    prerequisites: [
      { title: "What is Money and Why It Matters", href: "/learn/foundations-of-money/what-is-money" },
      { title: "Inflation: The Silent Wealth Killer", href: "/learn/foundations-of-money/inflation-silent-wealth-killer" },
    ],
    content: <TimeValueOfMoneyContent />,
    quiz: [
      {
        question: "Why is ₹1,00,000 today worth more than ₹1,00,000 one year from now?",
        options: [
          "Because the government might demonetize notes",
          "Because today's money can be invested to earn returns and inflation reduces future value",
          "Because banks charge fees on deposits",
          "It's not — they're worth the same",
        ],
        correct: 1,
        explanation: "Today's ₹1L can be invested at 12% to become ₹1.12L next year. Plus, inflation means next year's ₹1L buys less. Time creates value.",
      },
      {
        question: "If you invest ₹1,00,000 today at 12% annual returns, what is the approximate value after 20 years?",
        options: ["₹3,40,000", "₹5,40,000", "₹9,65,000", "₹2,00,000"],
        correct: 2,
        explanation: "FV = 1,00,000 × (1.12)^20 = ~₹9,64,630. Compounding at 12% for 20 years nearly 10x your money!",
      },
    ],
  },

  "risk-vs-reward": {
    keyTakeaways: [
      "Every investment has a risk-reward trade-off — higher potential returns always come with higher risk",
      "Your risk profile depends on both tolerance (emotional) and capacity (financial)",
      "Risk can be managed through diversification, time horizon, and asset allocation",
    ],
    prerequisites: [
      { title: "What is Money and Why It Matters", href: "/learn/foundations-of-money/what-is-money" },
      { title: "The Magic of Compounding", href: "/learn/foundations-of-money/magic-of-compounding" },
    ],
    content: <RiskVsRewardContent />,
    quiz: [
      {
        question: "Which statement about risk and reward is correct?",
        options: [
          "High returns can be achieved without taking any risk",
          "Higher potential returns always come with higher potential losses",
          "Fixed Deposits are the best investment because they're risk-free",
          "Stock investing always loses money",
        ],
        correct: 1,
        explanation: "This is the fundamental law of investing. Anyone promising 'high returns, zero risk' is likely running a scam. Risk and reward are always linked.",
      },
      {
        question: "Your Nifty 50 investment drops 15% in a month. What's typically the best action?",
        options: [
          "Sell immediately and move to FDs",
          "Hold or invest more — historically every crash has recovered",
          "Borrow money to invest more",
          "Stop all SIPs permanently",
        ],
        correct: 1,
        explanation: "Since 1990, the Nifty 50 has recovered from every major crash within 1-3 years. Holding steady (or buying the dip with spare money) is historically the winning strategy.",
      },
    ],
  },

  "purchasing-power": {
    keyTakeaways: [
      "Purchasing power is how much real stuff your money can buy — it drops every year due to inflation",
      "₹1 lakh in 2005 could buy what takes ₹2.5 lakh today — same money, half the value",
      "Protecting purchasing power is the #1 reason to invest, not just to 'make more money'",
    ],
    prerequisites: [
      { title: "What is Money and Why It Matters", href: "/learn/foundations-of-money/what-is-money" },
      { title: "Inflation: The Silent Wealth Killer", href: "/learn/foundations-of-money/inflation-silent-wealth-killer" },
    ],
    content: <PurchasingPowerContent />,
    quiz: [
      {
        question: "If a plate of biryani cost ₹80 in 2010 and now costs ₹250, what happened?",
        options: [
          "The biryani got better quality",
          "Your money's purchasing power decreased due to inflation",
          "Restaurants became greedy",
          "Nothing — prices always stay the same",
        ],
        correct: 1,
        explanation: "The biryani is essentially the same. What changed is that your rupee buys less than it used to — that's declining purchasing power caused by inflation.",
      },
      {
        question: "To maintain your purchasing power over 20 years, your investments need to earn at least:",
        options: [
          "0% — just keep the money safe",
          "3-4% (savings account rate)",
          "5-7% (at least matching inflation)",
          "It doesn't matter — money always holds value",
        ],
        correct: 2,
        explanation: "Your investments must at minimum match inflation (5-7% in India) just to maintain purchasing power. To actually grow wealth, you need to beat inflation — that's why equity investing matters.",
      },
    ],
  },

  "saving-alone-will-fail": {
    keyTakeaways: [
      "Saving money is essential but not sufficient — inflation erodes savings faster than most people realize",
      "The gap between saving rate (3-4%) and inflation (5-7%) means savers lose 2-3% of purchasing power annually",
      "Investing is not optional — it's the only way to make your money grow faster than prices rise",
    ],
    prerequisites: [
      { title: "Inflation: The Silent Wealth Killer", href: "/learn/foundations-of-money/inflation-silent-wealth-killer" },
      { title: "Purchasing Power Explained Simply", href: "/learn/foundations-of-money/purchasing-power" },
    ],
    content: <SavingAloneWillFailContent />,
    quiz: [
      {
        question: "You save ₹5,000/month in a savings account (3.5% interest) for 20 years. Inflation is 6%. What happens?",
        options: [
          "You become wealthy because you saved consistently",
          "You have ₹12 lakh in the account — a great nest egg",
          "Your total savings lose purchasing power because interest < inflation",
          "The bank pays you bonus interest for being loyal",
        ],
        correct: 2,
        explanation: "At 3.5% interest vs 6% inflation, you lose ~2.5% purchasing power per year. After 20 years, your ₹17L in savings can only buy what ₹10L buys today. Saving alone fails you.",
      },
      {
        question: "What's the key difference between saving and investing?",
        options: [
          "Saving is for poor people, investing is for rich people",
          "Saving preserves money; investing makes money grow faster than inflation",
          "There's no difference — both keep your money safe",
          "Investing is gambling, saving is responsible",
        ],
        correct: 1,
        explanation: "Saving preserves your nominal amount but loses to inflation. Investing puts your money to work in assets (stocks, bonds, gold) that historically grow faster than inflation, actually increasing your wealth.",
      },
    ],
  },

  "financial-discipline": {
    keyTakeaways: [
      "Financial discipline is a habit, not a talent — anyone can build it with the right systems",
      "The Pay Yourself First rule means investing BEFORE spending, not saving what's left over",
      "Automating your finances (auto-SIP, auto-debit) removes willpower from the equation",
    ],
    prerequisites: [
      { title: "Why Saving Alone Will Fail You", href: "/learn/foundations-of-money/saving-alone-will-fail" },
    ],
    content: <FinancialDisciplineContent />,
    quiz: [
      {
        question: "What does 'Pay Yourself First' mean?",
        options: [
          "Buy yourself something nice before paying bills",
          "Set aside savings/investments BEFORE spending on anything else",
          "Pay off all debts before saving",
          "Always keep cash in your wallet",
        ],
        correct: 1,
        explanation: "Pay Yourself First means the moment your salary arrives, a fixed portion (ideally 20%+) goes to investments/savings BEFORE you spend on anything else. This ensures you always invest consistently.",
      },
      {
        question: "Which is the most effective way to maintain financial discipline?",
        options: [
          "Relying on willpower to save every month",
          "Setting up automatic SIPs that deduct from your salary account",
          "Keeping a handwritten ledger of expenses",
          "Checking your bank balance daily",
        ],
        correct: 1,
        explanation: "Automation beats willpower every time. An automatic SIP deducted right after salary day removes the temptation to skip investing. You can't spend what you've already invested.",
      },
    ],
  },

  "building-wealth-vs-salary": {
    keyTakeaways: [
      "A high salary does not automatically mean wealth — many high earners live paycheck to paycheck",
      "Wealth = Income − Expenses + (Investments × Time) — the investing part is what creates real wealth",
      "Building assets (investments that generate returns) is more important than increasing income alone",
    ],
    prerequisites: [
      { title: "The Magic of Compounding", href: "/learn/foundations-of-money/magic-of-compounding" },
      { title: "Financial Discipline: Building Habits That Stick", href: "/learn/foundations-of-money/financial-discipline" },
    ],
    content: <BuildingWealthContent />,
    quiz: [
      {
        question: "Person A earns ₹20L/year and invests 30%. Person B earns ₹50L/year and invests 0%. After 20 years, who is wealthier?",
        options: [
          "Person B — they earn more than double",
          "Person A — they invested consistently and compounding did the rest",
          "They're about the same",
          "Neither — salary doesn't matter for wealth",
        ],
        correct: 1,
        explanation: "Person A investing ₹6L/year at 12% for 20 years accumulates ~₹4.8 crore. Person B has ₹0 in investments despite earning ₹10 crore total. Income creates the potential for wealth — investing creates actual wealth.",
      },
      {
        question: "What's the difference between 'active income' and 'passive income'?",
        options: [
          "Active income is from a job; passive income is from inheritance",
          "Active income requires your time; passive income comes from assets working for you",
          "Active income is taxed; passive income is tax-free",
          "There's no real difference",
        ],
        correct: 1,
        explanation: "Active income stops when you stop working (salary, freelancing). Passive income comes from assets you own — dividends, rental income, mutual fund returns. Building passive income is the path to financial freedom.",
      },
    ],
  },
}

// ─── Article: Purchasing Power ─────────────────────────────────────
function PurchasingPowerContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        You might have ₹1,00,000 in your bank account. That number won&apos;t change.
        But what that ₹1 lakh can <em>buy</em> changes every single year. That&apos;s{" "}
        <JargonTooltip term="Purchasing Power" definition="How much goods and services your money can buy. As inflation rises, purchasing power falls.">
          purchasing power
        </JargonTooltip>
        {" "}— and it&apos;s quietly shrinking.
      </p>

      <Analogy>
        Imagine your money is a bar of soap. Every time you don&apos;t use it, it doesn&apos;t
        stay the same — it slowly dissolves. You can&apos;t see it day-to-day, but after a
        year, you realize the bar is noticeably smaller. That&apos;s what&apos;s happening to
        your money&apos;s purchasing power every year.
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Purchasing Power Timeline</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Let&apos;s look at what everyday items cost over time in India:
      </p>

      <ComparisonTable
        title="Price of Everyday Items Over the Years"
        headers={["Item", "2005", "2015", "2025"]}
        rows={[
          ["Movie Ticket", "₹30-50", "₹150-200", "₹250-350"],
          ["Plate of Biryani", "₹60-80", "₹150-180", "₹250-350"],
          ["Petrol (1 litre)", "₹40", "₹65", "₹100+"],
          ["College Tuition (annual)", "₹20,000", "₹80,000", "₹2,00,000+"],
          ["1 BHK Rent (metro city)", "₹3,000", "₹10,000", "₹18,000-25,000"],
        ]}
      />

      <IndianContext>
        In India, education and healthcare costs have risen at 10-15% per year — far
        higher than official inflation numbers (5-6%). If you&apos;re planning for your
        child&apos;s education or your own future medical needs, you need investments
        that grow at 12%+ just to keep pace.
      </IndianContext>

      <ConceptImage
        src="/learn/foundations/purchasing-power-decline.png"
        alt="₹1 lakh purchasing power declining over 20 years"
        caption="Your ₹1 lakh can buy less and less every year"
        prompt="A visual infographic showing a stack of rupee notes (₹1,00,000) on the left, with a timeline arrow going to the right spanning 20 years. Along the timeline, the stack gets progressively smaller at years 5, 10, 15, and 20. Next to each stack show what it can buy: Year 0 (iPhone + laptop + vacation), Year 10 (just iPhone + laptop), Year 20 (just iPhone). Clean, modern flat design style with green-to-red gradient indicating declining value. Indian context."
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">How to Protect Your Purchasing Power</h2>

      <KeyConcept title="The Simple Test">
        Ask yourself: &quot;Will my savings earn more than 6% per year after tax?&quot;<br /><br />
        If <strong>yes</strong> — your purchasing power is growing.<br />
        If <strong>no</strong> — your purchasing power is shrinking, even though your bank balance shows a bigger number.
      </KeyConcept>

      <ComparisonChart
        title="₹1,00,000 after 20 years — Nominal vs Real Value"
        items={[
          { label: "Savings Account (3.5%)", value: 200000 },
          { label: "Real Value (after 6% inflation)", value: 64000, color: "destructive" },
          { label: "Index Fund (12%)", value: 964000, color: "success" },
          { label: "Real Value (after 6% inflation)", value: 310000, color: "success" },
        ]}
      />

      <InteractiveScenario
        scenario="You want to buy a car worth ₹8,00,000 in 5 years. Inflation on car prices is ~8%/year. How much will the same car cost in 5 years?"
        options={[
          {
            text: "₹8,00,000 — cars don't get more expensive",
            feedback: "Cars absolutely get more expensive! New models, rising raw material costs, and inflation all push prices up year after year.",
            isRecommended: false,
          },
          {
            text: "₹10,00,000 — a little more",
            feedback: "Close but not enough. At 8% annual increase, ₹8L grows to ~₹11.75L in 5 years. You're underestimating how fast prices rise.",
            isRecommended: false,
          },
          {
            text: "₹11,75,000 — about 47% more due to 8% annual inflation",
            feedback: "Correct! ₹8L × (1.08)^5 = ₹11.75L. This means you need to save/invest enough to have ₹11.75L, not ₹8L. If you just save in a 4% FD, you'll fall short. ✅",
            isRecommended: true,
          },
        ]}
      />

      <DosDonts
        dos={[
          "Always plan for future prices, not today's prices",
          "Use inflation-adjusted calculations for long-term goals",
          "Invest in assets that grow faster than inflation (equity, gold)",
        ]}
        donts={[
          "Don't assume the price of things will stay the same",
          "Don't rely on savings accounts for long-term goals",
          "Don't forget that education and healthcare inflate faster than general prices",
        ]}
      />
    </>
  )
}

// ─── Article: Saving Alone Will Fail ───────────────────────────────
function SavingAloneWillFailContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Your parents probably told you: &quot;Save money, beta. Save as much as you can.&quot;
        And they&apos;re not wrong — saving is important. But here&apos;s what they didn&apos;t
        tell you: <strong>saving alone will not make you wealthy</strong>. In fact,
        if all you do is save, you&apos;re slowly getting poorer.
      </p>

      <Analogy>
        Think of your money as water in a bucket. Saving means you&apos;re adding water
        to the bucket every month. Great! But there&apos;s a small hole at the bottom —
        that&apos;s inflation, draining 5-7% of your water every year. No matter how fast
        you pour, the hole keeps draining. Investing is like plugging that hole AND
        adding a tap that pours extra water in.
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Math That Proves Saving Fails</h2>

      <ComparisonChart
        title="₹10,000/month for 20 years — Saving vs Investing"
        items={[
          { label: "Savings Account (3.5%)", value: 3482000 },
          { label: "Fixed Deposit (7%)", value: 5209000, color: "warning" },
          { label: "Nifty 50 Index (12%)", value: 9899000, color: "success" },
          { label: "Direct Equity (15%)", value: 15159000, color: "success" },
        ]}
      />

      <p className="mt-3 leading-relaxed text-muted-foreground">
        The same ₹10,000 per month over 20 years gives you ₹35L in savings vs
        <strong> ₹99L in index funds</strong> — nearly 3x more. And after adjusting
        for inflation, your savings account money is worth even less.
      </p>

      <KeyConcept title="The Savings Trap">
        Here&apos;s the uncomfortable math:<br /><br />
        • Savings account interest: <strong>3.5%</strong><br />
        • Inflation: <strong>6%</strong><br />
        • <strong>Net result: -2.5% per year</strong><br /><br />
        You&apos;re <em>losing</em> 2.5% of your purchasing power every year. Over 20 years, this compounds
        to a massive loss — your ₹24 lakh in savings can only buy what ₹14.5 lakh buys today.
      </KeyConcept>

      <h2 className="mt-8 text-xl font-semibold text-foreground">Saving vs Investing: What&apos;s the Difference?</h2>

      <ComparisonTable
        title="Saving vs Investing — Side by Side"
        headers={["Factor", "Saving", "Investing"]}
        rows={[
          ["Purpose", "Preservation of money", "Growth of money"],
          ["Returns", "3-7% (FD, savings)", "10-15% (equity, mutual funds)"],
          ["Risk", "Very low", "Moderate to high"],
          ["Beats Inflation?", "Usually not", "Yes, historically"],
          ["Best For", "Emergency fund, short-term", "Long-term wealth creation"],
          ["Effort", "None — just deposit", "Some learning required"],
        ]}
      />

      <ConceptImage
        src="/learn/foundations/saving-vs-investing-gap.png"
        alt="The widening gap between saving and investing over 30 years"
        caption="The gap between saving and investing grows exponentially over time"
        prompt="A line chart showing two curves over 30 years. Bottom curve (red/orange, labeled 'Savings Account 3.5%') grows slowly and linearly. Top curve (green, labeled 'Index Fund 12%') grows exponentially, with the gap between them getting wider and wider. At year 30, the saving line is at ~₹20L and the investing line is at ~₹1.5 Cr. The gap area between them is shaded and labeled 'The Cost of Not Investing'. Clean, modern infographic style. Indian rupee context with amounts in lakhs/crores."
      />

      <IndianContext>
        India has one of the lowest equity participation rates in the world. Only about
        3-4% of Indians invest in the stock market (directly or via mutual funds),
        compared to 55% in the US. Most Indians keep their wealth in savings accounts,
        FDs, and gold — which means most Indians are losing to inflation.
        The good news? Services like Zerodha, Groww, and Kite have made investing
        as easy as ordering food on Swiggy.
      </IndianContext>

      <CaseStudy title="Ravi and Sneha — Same Salary, Different Outcomes">
        Both Ravi and Sneha earn ₹6,00,000 per year after college at age 23.<br /><br />
        <strong>Ravi</strong> saves ₹10,000/month in a savings account. After 30 years
        at age 53, he has <strong>₹56 lakh</strong> (at 3.5%).<br /><br />
        <strong>Sneha</strong> invests ₹10,000/month in a Nifty 50 SIP. After 30 years
        at age 53, she has <strong>₹3.53 crore</strong> (at 12%).<br /><br />
        Same effort in, same amount per month, dramatically different results.
        The difference? Sneha let her money <em>work for her</em>.
      </CaseStudy>

      <InteractiveScenario
        scenario="You have ₹2,00,000 saved up. You won't need it for 10 years. A friend says 'Just keep it safe in FD.' What should you do?"
        options={[
          {
            text: "FD at 7% — at least it's safe",
            feedback: "After tax (30% bracket), your FD gives ~4.9% effective return. With 6% inflation, you're LOSING 1.1% real value per year. In 10 years, your ₹2L has the purchasing power of only ₹1.8L. 'Safe' isn't always safe.",
            isRecommended: false,
          },
          {
            text: "Split: ₹50K in emergency fund (liquid) + ₹1.5L in index fund SIP",
            feedback: "This is the smart approach! You keep safety money accessible, and invest the rest where it can actually beat inflation. ₹1.5L at 12% for 10 years = ₹4.66L. ✅",
            isRecommended: true,
          },
          {
            text: "Put it all in a single stock your colleague recommended",
            feedback: "Extremely risky. Single stocks can go to zero. Without proper knowledge, this is gambling, not investing. Diversified index funds are the beginner-friendly alternative.",
            isRecommended: false,
          },
        ]}
      />

      <DosDonts
        dos={[
          "Save FIRST for emergencies (3-6 months expenses in liquid fund)",
          "Invest EVERYTHING beyond your emergency fund",
          "Start with index fund SIPs — even ₹500/month",
          "Learn the basics before investing in individual stocks",
        ]}
        donts={[
          "Don't keep large sums in savings accounts for years",
          "Don't think FDs are 'good investments' — they barely keep up with inflation",
          "Don't wait until you 'know enough' — start small and learn by doing",
          "Don't confuse saving with investing — they serve different purposes",
        ]}
      />
    </>
  )
}

// ─── Article: Financial Discipline ─────────────────────────────────
function FinancialDisciplineContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Here&apos;s a secret that wealthy people know: financial discipline is not about
        willpower. It&apos;s about <strong>systems</strong>. If you have to decide every
        month whether to invest or buy that new gadget, the gadget will win most of
        the time. The trick is to make investing automatic and spending deliberate.
      </p>

      <Analogy>
        Think of financial discipline like brushing your teeth. You don&apos;t wake up
        every morning and debate whether to brush or not. It&apos;s automatic — you
        just do it. That&apos;s what your finances should feel like. Set up auto-SIPs,
        auto-bill payments, and auto-savings — and then you only need willpower for
        the things that aren&apos;t automated.
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Pay Yourself First Rule</h2>

      <KeyConcept title="Pay Yourself First">
        Most people: Salary → Expenses → Save what&apos;s left (usually nothing)<br /><br />
        Smart people: Salary → <strong>Invest 20%+ first</strong> → Live on what&apos;s left<br /><br />
        This simple flip changes everything. When you invest before spending,
        you&apos;re guaranteed to build wealth. When you save what&apos;s left, you&apos;re
        guaranteed to have nothing left.
      </KeyConcept>

      <h2 className="mt-8 text-xl font-semibold text-foreground">The 50-30-20 Budget Rule</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        A simple framework that works for almost everyone:
      </p>

      <ComparisonTable
        title="The 50-30-20 Budget Rule"
        headers={["Category", "% of Income", "What's Included", "Example (₹50K salary)"]}
        rows={[
          ["Needs", "50%", "Rent, groceries, EMIs, bills, transport", "₹25,000"],
          ["Wants", "30%", "Dining, entertainment, shopping, gadgets", "₹15,000"],
          ["Invest/Save", "20%", "SIPs, PPF, emergency fund, FD", "₹10,000"],
        ]}
      />

      <ConceptImage
        src="/learn/foundations/50-30-20-budget.png"
        alt="The 50-30-20 budget pie chart"
        caption="A simple rule: 50% needs, 30% wants, 20% investments"
        prompt="A beautiful, clean pie chart diagram showing the 50/30/20 budgeting rule. Three segments: 50% (blue) labeled 'Needs' with small icons for rent, groceries, EMI. 30% (green/teal) labeled 'Wants' with icons for dining, travel, shopping. 20% (gold/yellow) labeled 'Savings & Investments' with icons for piggy bank, stocks, SIP. Modern flat design, white background. At the bottom, show an example: For ₹50,000 salary — ₹25,000 Needs, ₹15,000 Wants, ₹10,000 Invest. Clean, professional infographic style."
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">Building Systems That Work</h2>

      <ComparisonTable
        title="Automate Your Financial Life"
        headers={["Day", "What Happens", "How"]}
        rows={[
          ["Day 1 (Salary Day)", "Salary arrives in account", "—"],
          ["Day 2", "SIP auto-deducted (20%)", "Set up auto-debit SIP"],
          ["Day 3", "Bills auto-paid (rent, EMI, utilities)", "Set up standing instructions"],
          ["Day 5", "Emergency fund auto-topped (if needed)", "Liquid fund auto-transfer"],
          ["Rest of month", "Spend remaining on needs & wants", "Use a separate spending account"],
        ]}
      />

      <IndianContext>
        Most Indian banks and investment platforms (Groww, Zerodha, Paytm Money)
        support auto-SIP setup. You can set your{" "}
        <JargonTooltip term="SIP" definition="Systematic Investment Plan — automatically investing a fixed amount every month into a mutual fund.">
          SIP
        </JargonTooltip>
        {" "}to auto-debit on the 2nd or 5th of every month — right after salary day.
        If your salary comes on the 1st, set SIP on the 2nd. You&apos;ll never notice
        the money is gone, but in 20 years, you&apos;ll notice the wealth it built.
      </IndianContext>

      <h2 className="mt-8 text-xl font-semibold text-foreground">Common Discipline Killers</h2>

      <DosDonts
        dos={[
          "Automate everything — SIPs, bills, transfers",
          "Use the 50-30-20 rule as your starting framework",
          "Track expenses for at least 3 months to find leaks",
          "Keep your investment account separate from spending account",
          "Review your finances once a month — not more, not less",
        ]}
        donts={[
          "Don't rely on willpower — build systems instead",
          "Don't increase lifestyle at the same rate as salary increases",
          "Don't use credit cards without a repayment plan",
          "Don't skip SIPs during market dips — that's when they work best",
          "Don't compare your spending to friends or influencers",
        ]}
      />

      <InteractiveScenario
        scenario="You just got a ₹10,000/month raise. Your current SIP is ₹5,000/month. What should you do?"
        options={[
          {
            text: "Upgrade your lifestyle — you've earned it!",
            feedback: "This is the 'lifestyle inflation' trap. If every raise goes to spending, you'll never build wealth. A ₹50L salary person who spends it all has less wealth than a ₹20L salary person who invests 30%.",
            isRecommended: false,
          },
          {
            text: "Increase SIP by ₹5,000 (50% of raise) and enjoy the rest",
            feedback: "The smart approach! The '50% of raise' rule means you enjoy some improvement in lifestyle while also accelerating your wealth building. Your SIP goes to ₹10,000/month. ✅",
            isRecommended: true,
          },
          {
            text: "Invest the entire ₹10,000 — sacrifice now, benefit later",
            feedback: "While admirable, this isn't sustainable for most people. You'll eventually feel deprived and may quit investing altogether. The 50% rule is more sustainable long-term.",
            isRecommended: false,
          },
        ]}
      />
    </>
  )
}

// ─── Article: Building Wealth vs Salary ────────────────────────────
function BuildingWealthContent() {
  return (
    <>
      <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        Here&apos;s a hard truth: your salary alone will never make you wealthy.
        A ₹1 crore annual salary sounds incredible, but if you spend it all,
        you&apos;re no wealthier than someone earning ₹3 lakh. Wealth is not what
        you <em>earn</em> — it&apos;s what you <em>keep and grow</em>.
      </p>

      <Analogy>
        Think of your salary as a river. The water flows in every month (income) and
        flows out (expenses). A river can be massive, but if all the water flows out,
        the river bed is empty. Wealth is like building a dam — capturing some of that
        water and creating a reservoir (investments). Over time, the reservoir grows
        and can sustain you even when the river dries up (retirement, job loss).
      </Analogy>

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Wealth Formula</h2>

      <FormulaBox
        title="The Real Wealth Formula"
        formula="Wealth = (Income − Expenses) × Investing × Time"
        variables={[
          { symbol: "Income", meaning: "Your salary, freelancing, side income" },
          { symbol: "Expenses", meaning: "Everything you spend — the lower, the better" },
          { symbol: "Investing", meaning: "Where you put the surplus — the higher the return, the better" },
          { symbol: "Time", meaning: "How long you let it compound — the longer, the better" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">Active Income vs Passive Income</h2>

      <ComparisonTable
        title="Two Types of Income"
        headers={["Type", "How You Earn It", "Examples", "Limitation"]}
        rows={[
          ["Active Income", "Trading your time for money", "Salary, freelancing, consulting", "Limited by hours in a day"],
          ["Passive Income", "Your assets earn money for you", "Dividends, rental, fund returns", "Limited only by how much you invest"],
        ]}
      />

      <KeyConcept title="The Path to Financial Freedom">
        <strong>Financial freedom</strong> = when your passive income exceeds your expenses.<br /><br />
        If your monthly expenses are ₹50,000 and your investments generate ₹50,000+
        per month in returns, you <em>never have to work again</em>. That&apos;s the
        goal of wealth building — not just a big salary.
      </KeyConcept>

      <ConceptImage
        src="/learn/foundations/wealth-vs-salary.png"
        alt="High salary vs actual wealth — two different paths"
        caption="A high salary gets you income. Smart investing gets you wealth."
        prompt="An illustration split into two paths diverging from a common starting point (college graduation). Left path (labeled 'High Salary, No Investing'): person in fancy car, big house, expensive lifestyle but with ₹0 assets at age 55 — stressed, dependent on paycheck. Right path (labeled 'Moderate Salary, Smart Investing'): person with modest lifestyle but growing investment portfolio shown as a tree with rupee symbols as leaves, reaching ₹3+ Cr at age 55 — relaxed, financially free. Modern, clean infographic style. Indian characters, rupee symbols."
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">The Power of Assets</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        An <strong>asset</strong> is something that puts money in your pocket. A <strong>liability</strong> is
        something that takes money out. Wealthy people build assets; everyone else buys liabilities
        thinking they&apos;re assets.
      </p>

      <ComparisonTable
        title="Assets vs Liabilities"
        headers={["Item", "Asset or Liability?", "Why"]}
        rows={[
          ["Stocks/Mutual Funds", "✅ Asset", "Generates returns, dividends"],
          ["Rental Property", "✅ Asset", "Generates rental income"],
          ["SIP Investments", "✅ Asset", "Grows via compounding"],
          ["Expensive Car (on EMI)", "❌ Liability", "Depreciates 15-20% per year + EMI cost"],
          ["Latest iPhone (on credit)", "❌ Liability", "Loses 50% value in 2 years"],
          ["Home You Live In", "⚠️ Depends", "If it appreciates > your EMI + costs, it's an asset"],
        ]}
      />

      <IndianContext>
        In India, there&apos;s a cultural obsession with property. Many middle-class families
        put 80% of their wealth into a single property (their home). While real estate
        <em> can</em> be an asset, it&apos;s illiquid, concentrated, and Indian residential
        real estate has returned only 5-7% in most cities (barely beating inflation).
        <br /><br />
        A balanced approach: own your home if you want, but don&apos;t make it your
        <em> only</em> investment. Diversify into equity, gold, and bonds too.
      </IndianContext>

      <CaseStudy title="The Autorickshaw Driver Who Built ₹1.2 Crore">
        In 2023, a news story went viral about an autorickshaw driver in Pune who had
        accumulated over ₹1.2 crore through 25 years of disciplined{" "}
        <JargonTooltip term="SIP" definition="Systematic Investment Plan — automatically investing a fixed amount every month into a mutual fund.">
          SIP
        </JargonTooltip>
        {" "}investments in mutual funds. He earned ₹15,000-20,000/month — far less
        than many IT professionals. But he consistently invested ₹3,000-5,000/month
        and let compounding do the rest.<br /><br />
        Meanwhile, many tech professionals earning ₹1.5L/month have zero investments
        because they spend everything. <strong>Income ≠ Wealth. Investing = Wealth.</strong>
      </CaseStudy>

      <InteractiveScenario
        scenario="You get a ₹3,00,000 annual bonus. Which option builds the most long-term wealth?"
        options={[
          {
            text: "Buy a new iPhone (₹1.5L) and spend the rest on a vacation",
            feedback: "Both are depreciating/one-time expenses. The iPhone loses 50% value in 2 years, and the vacation is a memory. You've consumed ₹3L and built ₹0 in assets.",
            isRecommended: false,
          },
          {
            text: "Invest ₹2L in index fund + keep ₹50K for vacation + ₹50K for gadget fund",
            feedback: "The balanced approach! ₹2L invested at 12% for 10 years becomes ₹6.2L. You still enjoy life but also build assets. This is sustainable wealth building. ✅",
            isRecommended: true,
          },
          {
            text: "Put the entire ₹3L in a Fixed Deposit for safety",
            feedback: "Better than spending it all, but FD at 7% barely beats inflation. After tax, you might even lose purchasing power. Equity gives you better long-term returns.",
            isRecommended: false,
          },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold text-foreground">Your Action Plan</h2>

      <DosDonts
        dos={[
          "Focus on building assets, not just increasing income",
          "Live below your means — especially in your 20s and 30s",
          "Invest at least 20% of your income from day one of your career",
          "Build multiple income streams (salary + investments + side projects)",
          "Define financial freedom as a specific number, not a vague dream",
        ]}
        donts={[
          "Don't confuse high income with wealth",
          "Don't buy liabilities that look like assets (fancy car on EMI)",
          "Don't keep up with the Sharma's — focus on your own financial journey",
          "Don't postpone investing until you earn 'enough'",
          "Don't work for money your entire life — make money work for you",
        ]}
      />

      <EmbeddedCalculatorLink
        type="goal-planner"
        title="Plan Your Financial Freedom Number"
        description="Calculate how much you need to invest monthly to reach your wealth goal →"
      />
    </>
  )
}

