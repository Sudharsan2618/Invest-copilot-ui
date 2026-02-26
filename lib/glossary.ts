// Financial Glossary for Jargon Tooltips
// Usage: import { glossary } from "@/lib/glossary"
// Then use: glossary["SIP"] → returns the definition string

export const glossary: Record<string, string> = {
  // ─── Core Concepts ──────────────────────────────────────────────
  "Compounding": "When your investment returns earn their own returns. Your money grows exponentially over time.",
  "Inflation": "The rate at which prices rise over time, reducing purchasing power. India's average inflation is ~5-6% per year.",
  "Purchasing Power": "How much goods and services your money can buy. As inflation rises, purchasing power falls.",
  "Interest Rate": "The cost of borrowing money, or the reward for saving/investing it. Set by the RBI in India.",
  "Time Value of Money": "A rupee today is worth more than a rupee tomorrow, because today's rupee can be invested to earn returns.",
  "Liquidity": "How quickly you can convert an asset into cash without losing value. Stocks are liquid; real estate is not.",
  "Volatility": "How much a stock's price fluctuates. Higher volatility = higher risk and potentially higher returns.",
  "Diversification": "Spreading investments across different assets to reduce risk. 'Don't put all eggs in one basket.'",
  "Asset Allocation": "How you divide money between stocks, bonds, gold, real estate, and other asset classes.",
  "Portfolio": "Your complete collection of investments: stocks, bonds, mutual funds, gold, etc.",

  // ─── Stock Market ───────────────────────────────────────────────
  "Stock": "A share of ownership in a company. When you buy stock, you own a tiny piece of that business.",
  "Share": "A single unit of ownership in a company. Same as 'stock.'",
  "Equity": "Another word for stocks. Equity = ownership in a company.",
  "IPO": "Initial Public Offering — when a company sells shares to the public for the first time.",
  "NSE": "National Stock Exchange — India's largest stock exchange, home to the Nifty 50 index.",
  "BSE": "Bombay Stock Exchange — India's oldest stock exchange, home to the Sensex index.",
  "Nifty 50": "An index tracking the 50 largest companies listed on the NSE. Used as a benchmark for Indian markets.",
  "Sensex": "An index tracking the 30 largest companies listed on the BSE.",
  "SEBI": "Securities and Exchange Board of India — the regulator that protects investor interests.",
  "Demat Account": "A digital account where your shares are stored electronically. Required to buy/sell stocks in India.",
  "Bull Market": "A period when stock prices are rising and investor confidence is high.",
  "Bear Market": "A period when stock prices fall 20%+ from recent highs. Investors are pessimistic.",
  "Market Cap": "Total value of a company = share price × total number of shares. Classifies companies as Large/Mid/Small cap.",
  "Large Cap": "Companies with market cap above ₹20,000 crore. Generally safer, lower growth.",
  "Mid Cap": "Companies with market cap between ₹5,000-20,000 crore. Moderate risk and growth.",
  "Small Cap": "Companies with market cap below ₹5,000 crore. Higher risk but potentially higher growth.",
  "Blue Chip": "Well-established, financially stable large-cap companies like HDFC Bank, TCS, or Reliance.",
  "Dividend": "A portion of company profits paid to shareholders. Like a 'thank you' payment for being an owner.",

  // ─── Mutual Funds ───────────────────────────────────────────────
  "Mutual Fund": "A pool of money from many investors, managed by a professional fund manager who invests it in stocks/bonds.",
  "SIP": "Systematic Investment Plan — automatically investing a fixed amount every month into a mutual fund.",
  "NAV": "Net Asset Value — the price of one unit of a mutual fund.",
  "Expense Ratio": "Annual fee charged by a mutual fund, expressed as a percentage. Lower is better.",
  "ELSS": "Equity Linked Savings Scheme — a mutual fund that offers tax deduction under Section 80C.",
  "Index Fund": "A mutual fund that simply copies a market index (like Nifty 50). Low cost, passive investing.",
  "ETF": "Exchange-Traded Fund — like an index fund but traded on the stock exchange like a stock.",
  "AUM": "Assets Under Management — total amount of money managed by a mutual fund company.",
  "Direct Plan": "Buying mutual funds directly from the AMC without a broker. Lower expense ratio.",
  "Regular Plan": "Buying mutual funds through a broker/distributor. Higher expense ratio due to commissions.",
  "Lumpsum": "Investing a large one-time amount. Opposite of SIP.",

  // ─── Fixed Income ───────────────────────────────────────────────
  "Bond": "A loan you give to a company or government in exchange for regular interest payments.",
  "Fixed Deposit": "Money deposited in a bank for a fixed period at a guaranteed interest rate.",
  "PPF": "Public Provident Fund — a government-backed savings scheme with tax benefits and 15-year lock-in.",
  "NPS": "National Pension System — a retirement savings scheme with tax benefits.",
  "Government Securities": "Bonds issued by the Indian government. Very safe, lower returns.",
  "Yield": "The annual return on a bond or fixed deposit, expressed as a percentage.",
  "Coupon Rate": "The annual interest rate paid by a bond to its holder.",

  // ─── Valuation ──────────────────────────────────────────────────
  "PE Ratio": "Price-to-Earnings ratio — how much you pay for ₹1 of a company's earnings. Lower = potentially cheaper.",
  "EPS": "Earnings Per Share — company's profit divided by number of shares. Higher = more profitable per share.",
  "Book Value": "The net worth of a company according to its balance sheet. Assets minus liabilities.",
  "ROE": "Return on Equity — measures how efficiently a company uses shareholder money to generate profit.",
  "ROCE": "Return on Capital Employed — measures how efficiently a company uses ALL its capital.",
  "Intrinsic Value": "The 'true' value of a stock based on fundamentals, independent of its current market price.",

  // ─── Risk Metrics ───────────────────────────────────────────────
  "Beta": "Measures how much a stock moves relative to the market. Beta > 1 = more volatile than market.",
  "Sharpe Ratio": "Risk-adjusted return. Measures return per unit of risk. Higher = better risk/reward tradeoff.",
  "Drawdown": "Peak-to-trough decline in portfolio value. Max drawdown shows your worst-case loss.",
  "Stop-Loss": "An order to sell a stock when it drops to a certain price, limiting your losses.",
  "Risk Tolerance": "How much investment loss you can emotionally handle without panicking.",
  "Risk Capacity": "How much loss you can financially afford, based on your income, savings, and goals.",

  // ─── Personal Finance ───────────────────────────────────────────
  "Emergency Fund": "Cash savings covering 3-6 months of expenses. Your financial safety net.",
  "EMI": "Equated Monthly Installment — fixed monthly payment for a loan.",
  "CIBIL Score": "Credit score (300-900) that reflects your creditworthiness. Higher = better loan terms.",
  "80C": "Income Tax Section allowing ₹1.5 lakh deduction for ELSS, PPF, insurance premiums, etc.",
  "LTCG": "Long-Term Capital Gains — tax on profits from selling assets held for over 1 year.",
  "STCG": "Short-Term Capital Gains — tax on profits from selling assets held for less than 1 year.",

  // ─── Behavioral Finance ─────────────────────────────────────────
  "FOMO": "Fear Of Missing Out — buying stocks because everyone else is, without proper analysis.",
  "Herd Behavior": "Following what other investors do instead of thinking independently.",
  "Loss Aversion": "The tendency to feel losses more strongly than equivalent gains.",
  "Confirmation Bias": "Seeking information that confirms your existing beliefs while ignoring contradicting evidence.",
  "Anchoring": "Fixating on an irrelevant number (like your buy price) when making investment decisions.",
  "Sunk Cost Fallacy": "Holding a losing stock because you've already invested money in it.",

  // ─── Strategies ─────────────────────────────────────────────────
  "Value Investing": "Buying stocks that are priced below their intrinsic value. Warren Buffett's approach.",
  "Growth Investing": "Buying stocks of companies expected to grow faster than average.",
  "Dollar Cost Averaging": "Investing a fixed amount at regular intervals regardless of price. Same concept as SIP.",
  "Rebalancing": "Periodically adjusting your portfolio back to your target asset allocation.",
  "Rupee Cost Averaging": "Indian term for Dollar Cost Averaging — buying more units when prices are low through SIP.",

  // ─── Macro ──────────────────────────────────────────────────────
  "GDP": "Gross Domestic Product — total value of all goods and services produced in a country.",
  "RBI": "Reserve Bank of India — India's central bank that controls monetary policy and interest rates.",
  "Repo Rate": "The rate at which RBI lends money to banks. Affects your loan and deposit rates.",
  "FII": "Foreign Institutional Investors — foreign entities investing in Indian markets.",
  "DII": "Domestic Institutional Investors — Indian entities like mutual funds and insurance companies investing in markets.",
  "FDI": "Foreign Direct Investment — investment by foreign companies directly into Indian businesses.",
  "Fiscal Deficit": "When government spending exceeds its revenue. High deficit can lead to inflation.",
  "Current Account Deficit": "When India imports more than it exports. Affects the value of the rupee.",

  // ─── Practical ──────────────────────────────────────────────────
  "Rule of 72": "Divide 72 by annual return rate to estimate years to double your money. E.g., 72÷12% = 6 years.",
  "CAGR": "Compound Annual Growth Rate — the smoothed annual return of an investment over a period.",
  "TER": "Total Expense Ratio — the annual cost of owning a mutual fund, including management fees.",
  "Exit Load": "Fee charged when you sell mutual fund units before a specified period (usually 1 year).",
  "Lock-in Period": "Duration for which you cannot withdraw your investment. ELSS has 3 years, PPF has 15 years.",
}
