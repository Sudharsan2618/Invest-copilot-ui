// ============================================================
// MOCK DATA FOR AI INVESTMENT LEARNING COPILOT
// ============================================================

export type Difficulty = "beginner" | "intermediate" | "advanced"

export interface Topic {
  id: number
  slug: string
  title: string
  description: string
  icon: string
  articleCount: number
  difficulty: Difficulty
  estimatedTime: string
  articles: Article[]
}

export interface Article {
  id: number
  slug: string
  title: string
  difficulty: Difficulty
  readTime: string
  topicSlug: string
  topicTitle: string
  content?: string
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar: string
  date: string
  readTime: string
  featured?: boolean
}

export interface Tool {
  id: number
  slug: string
  title: string
  description: string
  icon: string
}

export interface Trade {
  id: number
  symbol: string
  name: string
  type: "buy" | "sell"
  quantity: number
  price: number
  date: string
  currentPrice: number
}

export interface JournalEntry {
  id: number
  title: string
  date: string
  tradeRef?: string
  reasoning: string
  aiScore: number
  tags: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  earned: boolean
  earnedDate?: string
}

export interface UserProfile {
  name: string
  email: string
  level: number
  levelTitle: string
  xp: number
  xpToNext: number
  streak: number
  articlesRead: number
  quizScore: number
  totalTrades: number
  joinDate: string
}

// ============================================================
// TOPICS & ARTICLES
// ============================================================

export const topics: Topic[] = [
  {
    id: 1,
    slug: "foundations-of-money",
    title: "Foundations of Money",
    description: "Understand what money is, how it grows, and the basic building blocks of wealth creation.",
    icon: "Coins",
    articleCount: 9,
    difficulty: "beginner",
    estimatedTime: "55 min",
    articles: [
      { id: 1, slug: "what-is-money", title: "What is Money and Why It Matters", difficulty: "beginner", readTime: "5 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
      { id: 2, slug: "inflation-silent-wealth-killer", title: "Inflation: The Silent Wealth Killer", difficulty: "beginner", readTime: "6 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
      { id: 3, slug: "purchasing-power", title: "Purchasing Power Explained Simply", difficulty: "beginner", readTime: "5 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
      { id: 4, slug: "saving-alone-will-fail", title: "Why Saving Alone Will Fail You", difficulty: "beginner", readTime: "5 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
      { id: 5, slug: "time-value-of-money", title: "Time Value of Money: \u20B9100 Today vs Tomorrow", difficulty: "beginner", readTime: "7 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
      { id: 6, slug: "magic-of-compounding", title: "The Magic of Compounding", difficulty: "beginner", readTime: "8 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
      { id: 7, slug: "risk-vs-reward", title: "Risk vs Reward: The Fundamental Trade-off", difficulty: "beginner", readTime: "6 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
      { id: 8, slug: "financial-discipline", title: "Financial Discipline: Building Habits That Stick", difficulty: "beginner", readTime: "6 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
      { id: 9, slug: "building-wealth-vs-salary", title: "Building Wealth vs Earning a Salary", difficulty: "beginner", readTime: "7 min", topicSlug: "foundations-of-money", topicTitle: "Foundations of Money" },
    ],
  },
  {
    id: 2,
    slug: "personal-finance",
    title: "Personal Finance Fundamentals",
    description: "Master budgeting, emergency funds, debt management, and financial planning basics.",
    icon: "Wallet",
    articleCount: 9,
    difficulty: "beginner",
    estimatedTime: "56 min",
    articles: [
      { id: 10, slug: "income-management", title: "Income Management: Where Does Your Money Go?", difficulty: "beginner", readTime: "6 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
      { id: 11, slug: "budgeting-systems", title: "Budgeting Systems That Actually Work", difficulty: "beginner", readTime: "8 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
      { id: 12, slug: "emergency-funds", title: "Emergency Funds: Your Financial Safety Net", difficulty: "beginner", readTime: "5 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
      { id: 13, slug: "good-debt-vs-bad-debt", title: "Debt Management: Good Debt vs Bad Debt", difficulty: "beginner", readTime: "7 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
      { id: 14, slug: "high-interest-loans", title: "The Danger of High-Interest Loans", difficulty: "beginner", readTime: "5 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
      { id: 15, slug: "financial-health-score", title: "Your Financial Health Score", difficulty: "beginner", readTime: "6 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
      { id: 16, slug: "expense-tracking", title: "Expense Tracking Made Simple", difficulty: "beginner", readTime: "5 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
      { id: 17, slug: "financial-planning-beginners", title: "Financial Planning for Absolute Beginners", difficulty: "beginner", readTime: "8 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
      { id: 18, slug: "should-you-invest-yet", title: "Should You Be Investing Yet? (Honest Assessment)", difficulty: "beginner", readTime: "6 min", topicSlug: "personal-finance", topicTitle: "Personal Finance Fundamentals" },
    ],
  },
  {
    id: 3,
    slug: "financial-markets",
    title: "Understanding Financial Markets",
    description: "Learn how stock markets work, who the key players are, and how market cycles affect investments.",
    icon: "TrendingUp",
    articleCount: 7,
    difficulty: "beginner",
    estimatedTime: "43 min",
    articles: [
      { id: 19, slug: "what-is-stock-market", title: "What is a Stock Market? (Simple Explanation)", difficulty: "beginner", readTime: "6 min", topicSlug: "financial-markets", topicTitle: "Understanding Financial Markets" },
      { id: 20, slug: "how-stock-markets-work", title: "How Stock Markets Actually Work", difficulty: "beginner", readTime: "8 min", topicSlug: "financial-markets", topicTitle: "Understanding Financial Markets" },
      { id: 21, slug: "nse-bse-exchanges", title: "Stock Exchanges: NSE, BSE, and Beyond", difficulty: "beginner", readTime: "6 min", topicSlug: "financial-markets", topicTitle: "Understanding Financial Markets" },
      { id: 22, slug: "market-participants", title: "Who Participates in the Market?", difficulty: "beginner", readTime: "5 min", topicSlug: "financial-markets", topicTitle: "Understanding Financial Markets" },
      { id: 23, slug: "institutional-vs-retail", title: "Institutional vs Retail Investors", difficulty: "intermediate", readTime: "6 min", topicSlug: "financial-markets", topicTitle: "Understanding Financial Markets" },
      { id: 24, slug: "liquidity", title: "Liquidity: Why It Matters", difficulty: "intermediate", readTime: "5 min", topicSlug: "financial-markets", topicTitle: "Understanding Financial Markets" },
      { id: 25, slug: "market-cycles", title: "Market Cycles: Bulls, Bears, and Everything Between", difficulty: "beginner", readTime: "7 min", topicSlug: "financial-markets", topicTitle: "Understanding Financial Markets" },
    ],
  },
  {
    id: 4,
    slug: "asset-classes",
    title: "Asset Classes",
    description: "Explore stocks, bonds, mutual funds, ETFs, gold, real estate, and how to allocate your money.",
    icon: "PieChart",
    articleCount: 10,
    difficulty: "beginner",
    estimatedTime: "63 min",
    articles: [
      { id: 26, slug: "what-are-asset-classes", title: "What Are Asset Classes?", difficulty: "beginner", readTime: "5 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 27, slug: "stocks-explained", title: "Stocks: Owning a Piece of a Company", difficulty: "beginner", readTime: "7 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 28, slug: "bonds-explained", title: "Bonds: Lending Your Money for Returns", difficulty: "beginner", readTime: "6 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 29, slug: "mutual-funds", title: "Mutual Funds: Investing Made Collective", difficulty: "beginner", readTime: "7 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 30, slug: "etfs-explained", title: "ETFs: The Best of Stocks and Mutual Funds", difficulty: "beginner", readTime: "6 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 31, slug: "gold-investing", title: "Gold: The Traditional Safe Haven", difficulty: "beginner", readTime: "5 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 32, slug: "real-estate", title: "Real Estate Investing Basics", difficulty: "intermediate", readTime: "7 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 33, slug: "fixed-deposits", title: "Fixed Deposits and Government Securities", difficulty: "beginner", readTime: "5 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 34, slug: "index-funds-best-friend", title: "Index Funds: The Beginner's Best Friend", difficulty: "beginner", readTime: "7 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
      { id: 35, slug: "asset-allocation", title: "Asset Allocation: How to Spread Your Money", difficulty: "intermediate", readTime: "8 min", topicSlug: "asset-classes", topicTitle: "Asset Classes" },
    ],
  },
  {
    id: 5,
    slug: "index-investing",
    title: "Index Investing",
    description: "Master the art of passive investing with index funds, Nifty 50, and diversification strategies.",
    icon: "BarChart3",
    articleCount: 6,
    difficulty: "beginner",
    estimatedTime: "37 min",
    articles: [
      { id: 36, slug: "what-is-an-index", title: "What is an Index? (Nifty 50 Explained)", difficulty: "beginner", readTime: "6 min", topicSlug: "index-investing", topicTitle: "Index Investing" },
      { id: 37, slug: "how-index-funds-work", title: "How Index Funds Work", difficulty: "beginner", readTime: "7 min", topicSlug: "index-investing", topicTitle: "Index Investing" },
      { id: 38, slug: "active-vs-passive", title: "Active vs Passive Investing", difficulty: "beginner", readTime: "6 min", topicSlug: "index-investing", topicTitle: "Index Investing" },
      { id: 39, slug: "diversification-beats-picking", title: "Why Diversification Beats Stock Picking", difficulty: "beginner", readTime: "6 min", topicSlug: "index-investing", topicTitle: "Index Investing" },
      { id: 40, slug: "long-term-index-strategy", title: "Long-Term Index Strategy", difficulty: "beginner", readTime: "7 min", topicSlug: "index-investing", topicTitle: "Index Investing" },
      { id: 41, slug: "market-benchmarks", title: "Market Benchmarks You Should Know", difficulty: "intermediate", readTime: "5 min", topicSlug: "index-investing", topicTitle: "Index Investing" },
    ],
  },
  {
    id: 6,
    slug: "risk-management",
    title: "Risk Management",
    description: "Learn to identify, measure, and manage portfolio risk through diversification and analysis.",
    icon: "Shield",
    articleCount: 8,
    difficulty: "intermediate",
    estimatedTime: "48 min",
    articles: [
      { id: 42, slug: "portfolio-risk", title: "What is Portfolio Risk?", difficulty: "beginner", readTime: "6 min", topicSlug: "risk-management", topicTitle: "Risk Management" },
      { id: 43, slug: "diversification", title: "Diversification: Don't Put All Eggs in One Basket", difficulty: "beginner", readTime: "6 min", topicSlug: "risk-management", topicTitle: "Risk Management" },
      { id: 44, slug: "concentration-risk", title: "Concentration Risk: The Silent Portfolio Killer", difficulty: "intermediate", readTime: "5 min", topicSlug: "risk-management", topicTitle: "Risk Management" },
      { id: 45, slug: "market-volatility", title: "Understanding Market Volatility", difficulty: "intermediate", readTime: "7 min", topicSlug: "risk-management", topicTitle: "Risk Management" },
      { id: 46, slug: "drawdowns", title: "Drawdowns: When Your Portfolio Drops", difficulty: "intermediate", readTime: "6 min", topicSlug: "risk-management", topicTitle: "Risk Management" },
      { id: 47, slug: "behavioral-risk", title: "Behavioral Risk: Your Biggest Enemy", difficulty: "beginner", readTime: "7 min", topicSlug: "risk-management", topicTitle: "Risk Management" },
      { id: 48, slug: "risk-tolerance-capacity", title: "Risk Tolerance vs Risk Capacity", difficulty: "intermediate", readTime: "6 min", topicSlug: "risk-management", topicTitle: "Risk Management" },
      { id: 49, slug: "investment-horizon", title: "Investment Horizon: Time is Your Superpower", difficulty: "beginner", readTime: "5 min", topicSlug: "risk-management", topicTitle: "Risk Management" },
    ],
  },
  {
    id: 7,
    slug: "behavioral-finance",
    title: "Behavioral Finance",
    description: "Understand the psychological biases that destroy investment returns and how to overcome them.",
    icon: "Brain",
    articleCount: 7,
    difficulty: "intermediate",
    estimatedTime: "45 min",
    articles: [
      { id: 50, slug: "emotions-destroy-returns", title: "Why Emotions Destroy Investment Returns", difficulty: "beginner", readTime: "7 min", topicSlug: "behavioral-finance", topicTitle: "Behavioral Finance" },
      { id: 51, slug: "fomo-investing", title: "FOMO Investing: The Social Media Trap", difficulty: "beginner", readTime: "6 min", topicSlug: "behavioral-finance", topicTitle: "Behavioral Finance" },
      { id: 52, slug: "panic-selling", title: "Panic Selling: Why You Lose When Markets Drop", difficulty: "beginner", readTime: "6 min", topicSlug: "behavioral-finance", topicTitle: "Behavioral Finance" },
      { id: 53, slug: "overconfidence-bias", title: "Overconfidence Bias: Thinking You Can Beat the Market", difficulty: "intermediate", readTime: "6 min", topicSlug: "behavioral-finance", topicTitle: "Behavioral Finance" },
      { id: 54, slug: "herd-behavior", title: "Herd Behavior: Following the Crowd Off a Cliff", difficulty: "beginner", readTime: "5 min", topicSlug: "behavioral-finance", topicTitle: "Behavioral Finance" },
      { id: 55, slug: "loss-aversion", title: "Loss Aversion: Why Losses Hurt More Than Gains Feel Good", difficulty: "intermediate", readTime: "7 min", topicSlug: "behavioral-finance", topicTitle: "Behavioral Finance" },
      { id: 56, slug: "cognitive-biases", title: "Cognitive Biases Every Investor Must Know", difficulty: "intermediate", readTime: "8 min", topicSlug: "behavioral-finance", topicTitle: "Behavioral Finance" },
    ],
  },
  {
    id: 8,
    slug: "investment-strategies",
    title: "Investment Strategies",
    description: "Explore value investing, growth investing, SIPs, and portfolio rebalancing strategies.",
    icon: "Target",
    articleCount: 8,
    difficulty: "intermediate",
    estimatedTime: "55 min",
    articles: [
      { id: 57, slug: "long-term-investing", title: "Long-Term Investing: The Most Boring (and Best) Strategy", difficulty: "beginner", readTime: "7 min", topicSlug: "investment-strategies", topicTitle: "Investment Strategies" },
      { id: 58, slug: "value-investing", title: "Value Investing: Buying Companies on Sale", difficulty: "intermediate", readTime: "8 min", topicSlug: "investment-strategies", topicTitle: "Investment Strategies" },
      { id: 59, slug: "growth-investing", title: "Growth Investing: Betting on the Future", difficulty: "intermediate", readTime: "7 min", topicSlug: "investment-strategies", topicTitle: "Investment Strategies" },
      { id: 60, slug: "dividend-investing", title: "Dividend Investing: Getting Paid to Hold", difficulty: "intermediate", readTime: "6 min", topicSlug: "investment-strategies", topicTitle: "Investment Strategies" },
      { id: 61, slug: "sip-dollar-cost-averaging", title: "SIP/Dollar Cost Averaging: Invest on Autopilot", difficulty: "beginner", readTime: "6 min", topicSlug: "investment-strategies", topicTitle: "Investment Strategies" },
      { id: 62, slug: "asset-allocation-strategies", title: "Asset Allocation Strategies for Every Age", difficulty: "intermediate", readTime: "8 min", topicSlug: "investment-strategies", topicTitle: "Investment Strategies" },
      { id: 63, slug: "portfolio-rebalancing", title: "Portfolio Rebalancing: Keeping Your Plan on Track", difficulty: "intermediate", readTime: "6 min", topicSlug: "investment-strategies", topicTitle: "Investment Strategies" },
      { id: 64, slug: "lessons-from-buffett", title: "Lessons from Warren Buffett", difficulty: "beginner", readTime: "7 min", topicSlug: "investment-strategies", topicTitle: "Investment Strategies" },
    ],
  },
  {
    id: 9,
    slug: "company-analysis",
    title: "Company Analysis",
    description: "Learn to analyze companies through revenue, cash flow, balance sheets, and competitive moats.",
    icon: "Building2",
    articleCount: 8,
    difficulty: "intermediate",
    estimatedTime: "54 min",
    articles: [
      { id: 65, slug: "good-company-to-invest", title: "What Makes a Good Company to Invest In?", difficulty: "beginner", readTime: "6 min", topicSlug: "company-analysis", topicTitle: "Company Analysis" },
      { id: 66, slug: "revenue-vs-profit", title: "Revenue vs Profit: Understanding the Difference", difficulty: "beginner", readTime: "5 min", topicSlug: "company-analysis", topicTitle: "Company Analysis" },
      { id: 67, slug: "balance-sheet-basics", title: "Balance Sheet Basics for Beginners", difficulty: "intermediate", readTime: "8 min", topicSlug: "company-analysis", topicTitle: "Company Analysis" },
      { id: 68, slug: "cash-flow", title: "Cash Flow: The Lifeblood of a Company", difficulty: "intermediate", readTime: "7 min", topicSlug: "company-analysis", topicTitle: "Company Analysis" },
      { id: 69, slug: "debt-analysis", title: "Debt Analysis: When Borrowing Goes Wrong", difficulty: "intermediate", readTime: "6 min", topicSlug: "company-analysis", topicTitle: "Company Analysis" },
      { id: 70, slug: "business-models", title: "Business Models Explained Simply", difficulty: "beginner", readTime: "7 min", topicSlug: "company-analysis", topicTitle: "Company Analysis" },
      { id: 71, slug: "competitive-moats", title: "Competitive Advantage (Moats)", difficulty: "intermediate", readTime: "7 min", topicSlug: "company-analysis", topicTitle: "Company Analysis" },
      { id: 72, slug: "industry-analysis", title: "Industry Analysis: Picking the Right Sector", difficulty: "intermediate", readTime: "6 min", topicSlug: "company-analysis", topicTitle: "Company Analysis" },
    ],
  },
  {
    id: 10,
    slug: "valuation-basics",
    title: "Valuation Basics",
    description: "Understand PE ratios, market cap, intrinsic value, and how to spot overvalued stocks.",
    icon: "Calculator",
    articleCount: 6,
    difficulty: "intermediate",
    estimatedTime: "40 min",
    articles: [
      { id: 73, slug: "pe-ratio", title: "PE Ratio: The Most Popular Valuation Metric", difficulty: "intermediate", readTime: "7 min", topicSlug: "valuation-basics", topicTitle: "Valuation Basics" },
      { id: 74, slug: "market-cap", title: "Market Cap: How Big is This Company?", difficulty: "beginner", readTime: "5 min", topicSlug: "valuation-basics", topicTitle: "Valuation Basics" },
      { id: 75, slug: "growth-vs-value", title: "Growth vs Value: Two Ways to Pick Stocks", difficulty: "intermediate", readTime: "7 min", topicSlug: "valuation-basics", topicTitle: "Valuation Basics" },
      { id: 76, slug: "intrinsic-value", title: "Intrinsic Value: What is a Stock Really Worth?", difficulty: "intermediate", readTime: "8 min", topicSlug: "valuation-basics", topicTitle: "Valuation Basics" },
      { id: 77, slug: "overvalued-undervalued", title: "How to Spot Overvalued and Undervalued Stocks", difficulty: "intermediate", readTime: "7 min", topicSlug: "valuation-basics", topicTitle: "Valuation Basics" },
      { id: 78, slug: "earnings-growth", title: "Earnings Growth and Why It Matters", difficulty: "intermediate", readTime: "6 min", topicSlug: "valuation-basics", topicTitle: "Valuation Basics" },
    ],
  },
  {
    id: 11,
    slug: "macroeconomics",
    title: "Macroeconomics for Investors",
    description: "How interest rates, inflation, GDP, and central bank policies affect your investments.",
    icon: "Globe",
    articleCount: 5,
    difficulty: "intermediate",
    estimatedTime: "34 min",
    articles: [
      { id: 79, slug: "interest-rates", title: "How Interest Rates Affect Your Investments", difficulty: "intermediate", readTime: "7 min", topicSlug: "macroeconomics", topicTitle: "Macroeconomics for Investors" },
      { id: 80, slug: "inflation-stock-market", title: "Inflation and the Stock Market", difficulty: "intermediate", readTime: "6 min", topicSlug: "macroeconomics", topicTitle: "Macroeconomics for Investors" },
      { id: 81, slug: "gdp-growth", title: "GDP Growth: What It Means for Investors", difficulty: "intermediate", readTime: "6 min", topicSlug: "macroeconomics", topicTitle: "Macroeconomics for Investors" },
      { id: 82, slug: "monetary-policy-rbi", title: "Monetary Policy Made Simple (RBI Edition)", difficulty: "intermediate", readTime: "7 min", topicSlug: "macroeconomics", topicTitle: "Macroeconomics for Investors" },
      { id: 83, slug: "recession-cycles", title: "Recession Cycles: History and Impact", difficulty: "intermediate", readTime: "8 min", topicSlug: "macroeconomics", topicTitle: "Macroeconomics for Investors" },
    ],
  },
  {
    id: 12,
    slug: "market-events",
    title: "Market Events & Case Studies",
    description: "Learn from famous market crashes, bull/bear markets, and real-world economic events.",
    icon: "Newspaper",
    articleCount: 5,
    difficulty: "intermediate",
    estimatedTime: "36 min",
    articles: [
      { id: 84, slug: "famous-crashes", title: "Famous Market Crashes and What They Teach Us", difficulty: "beginner", readTime: "8 min", topicSlug: "market-events", topicTitle: "Market Events & Case Studies" },
      { id: 85, slug: "bull-vs-bear", title: "Bull vs Bear Markets Explained", difficulty: "beginner", readTime: "6 min", topicSlug: "market-events", topicTitle: "Market Events & Case Studies" },
      { id: 86, slug: "economic-crises", title: "Economic Crises: 2008, COVID, and More", difficulty: "intermediate", readTime: "8 min", topicSlug: "market-events", topicTitle: "Market Events & Case Studies" },
      { id: 87, slug: "sector-booms-busts", title: "Sector Booms and Busts: IT, Pharma, Crypto", difficulty: "intermediate", readTime: "7 min", topicSlug: "market-events", topicTitle: "Market Events & Case Studies" },
      { id: 88, slug: "historical-lessons", title: "Historical Investment Lessons for Beginners", difficulty: "beginner", readTime: "7 min", topicSlug: "market-events", topicTitle: "Market Events & Case Studies" },
    ],
  },
  {
    id: 13,
    slug: "portfolio-building",
    title: "Portfolio Building Guide",
    description: "Step-by-step guide to building your first portfolio with proper asset allocation.",
    icon: "Briefcase",
    articleCount: 5,
    difficulty: "beginner",
    estimatedTime: "33 min",
    articles: [
      { id: 89, slug: "first-portfolio", title: "Your First Portfolio: A Step-by-Step Guide", difficulty: "beginner", readTime: "8 min", topicSlug: "portfolio-building", topicTitle: "Portfolio Building Guide" },
      { id: 90, slug: "allocation-models", title: "Asset Allocation Models for Beginners", difficulty: "beginner", readTime: "7 min", topicSlug: "portfolio-building", topicTitle: "Portfolio Building Guide" },
      { id: 91, slug: "risk-balanced-portfolio", title: "Building a Risk-Balanced Portfolio", difficulty: "intermediate", readTime: "7 min", topicSlug: "portfolio-building", topicTitle: "Portfolio Building Guide" },
      { id: 92, slug: "long-term-wealth", title: "Long-Term Wealth Strategy", difficulty: "intermediate", readTime: "6 min", topicSlug: "portfolio-building", topicTitle: "Portfolio Building Guide" },
      { id: 93, slug: "portfolio-review", title: "Portfolio Review: When and How to Check", difficulty: "intermediate", readTime: "5 min", topicSlug: "portfolio-building", topicTitle: "Portfolio Building Guide" },
    ],
  },
  {
    id: 14,
    slug: "beginner-roadmap",
    title: "Beginner Investment Roadmap",
    description: "Your complete step-by-step journey from financial basics to building your first portfolio.",
    icon: "Map",
    articleCount: 5,
    difficulty: "beginner",
    estimatedTime: "33 min",
    articles: [
      { id: 94, slug: "step-1-fix-finances", title: "Step 1: Fix Your Finances First", difficulty: "beginner", readTime: "6 min", topicSlug: "beginner-roadmap", topicTitle: "Beginner Investment Roadmap" },
      { id: 95, slug: "step-2-learn-assets", title: "Step 2: Learn the Asset Classes", difficulty: "beginner", readTime: "6 min", topicSlug: "beginner-roadmap", topicTitle: "Beginner Investment Roadmap" },
      { id: 96, slug: "step-3-simulate", title: "Step 3: Start Simulation Investing", difficulty: "beginner", readTime: "7 min", topicSlug: "beginner-roadmap", topicTitle: "Beginner Investment Roadmap" },
      { id: 97, slug: "step-4-first-portfolio", title: "Step 4: Build Your First Real Portfolio", difficulty: "beginner", readTime: "8 min", topicSlug: "beginner-roadmap", topicTitle: "Beginner Investment Roadmap" },
      { id: 98, slug: "step-5-long-term-mindset", title: "Step 5: Long-Term Investing Mindset", difficulty: "beginner", readTime: "6 min", topicSlug: "beginner-roadmap", topicTitle: "Beginner Investment Roadmap" },
    ],
  },
  {
    id: 15,
    slug: "tools-calculators",
    title: "Tools & Calculators",
    description: "Interactive financial tools to help you calculate returns, assess risk, and plan goals.",
    icon: "Wrench",
    articleCount: 5,
    difficulty: "beginner",
    estimatedTime: "N/A",
    articles: [],
  },
  {
    id: 16,
    slug: "common-mistakes",
    title: "Common Mistakes",
    description: "Avoid the most frequent investing mistakes that destroy beginner portfolios.",
    icon: "AlertTriangle",
    articleCount: 7,
    difficulty: "beginner",
    estimatedTime: "38 min",
    articles: [
      { id: 99, slug: "investing-without-knowledge", title: "Investing Without Knowledge", difficulty: "beginner", readTime: "5 min", topicSlug: "common-mistakes", topicTitle: "Common Mistakes" },
      { id: 100, slug: "chasing-returns", title: "Chasing Returns: The Performance Trap", difficulty: "beginner", readTime: "6 min", topicSlug: "common-mistakes", topicTitle: "Common Mistakes" },
      { id: 101, slug: "timing-the-market", title: "Timing the Market: Why It Never Works", difficulty: "beginner", readTime: "6 min", topicSlug: "common-mistakes", topicTitle: "Common Mistakes" },
      { id: 102, slug: "following-finfluencers", title: "Following Finfluencers Blindly", difficulty: "beginner", readTime: "5 min", topicSlug: "common-mistakes", topicTitle: "Common Mistakes" },
      { id: 103, slug: "ignoring-risk", title: "Ignoring Risk Until It's Too Late", difficulty: "beginner", readTime: "5 min", topicSlug: "common-mistakes", topicTitle: "Common Mistakes" },
      { id: 104, slug: "overtrading", title: "Overtrading: More Trades \u2260 More Profit", difficulty: "intermediate", readTime: "6 min", topicSlug: "common-mistakes", topicTitle: "Common Mistakes" },
      { id: 105, slug: "cost-of-impatience", title: "The Cost of Impatience", difficulty: "beginner", readTime: "5 min", topicSlug: "common-mistakes", topicTitle: "Common Mistakes" },
    ],
  },
  {
    id: 17,
    slug: "ai-learning",
    title: "AI Learning Integration",
    description: "Understand how the AI mentor works and how it helps improve your investing decisions.",
    icon: "Bot",
    articleCount: 4,
    difficulty: "beginner",
    estimatedTime: "26 min",
    articles: [
      { id: 106, slug: "how-ai-mentor-works", title: "How the AI Mentor Works", difficulty: "beginner", readTime: "6 min", topicSlug: "ai-learning", topicTitle: "AI Learning Integration" },
      { id: 107, slug: "ai-investment-feedback", title: "Understanding Your AI Investment Feedback", difficulty: "beginner", readTime: "7 min", topicSlug: "ai-learning", topicTitle: "AI Learning Integration" },
      { id: 108, slug: "decision-analysis", title: "How Decision Analysis Improves Your Investing", difficulty: "beginner", readTime: "6 min", topicSlug: "ai-learning", topicTitle: "AI Learning Integration" },
      { id: 109, slug: "portfolio-simulations", title: "How Portfolio Simulations Help You Learn", difficulty: "beginner", readTime: "7 min", topicSlug: "ai-learning", topicTitle: "AI Learning Integration" },
    ],
  },
]

// ============================================================
// BLOG POSTS
// ============================================================

export const blogPosts: BlogPost[] = [
  { id: 1, slug: "nifty-50-2025-review", title: "Nifty 50 Performance Review: What Happened in 2025", excerpt: "A comprehensive look at how India's benchmark index performed this year, sector by sector.", category: "Market Updates", author: "Priya Sharma", authorAvatar: "PS", date: "2026-02-20", readTime: "8 min", featured: true },
  { id: 2, slug: "sip-vs-lumpsum", title: "SIP vs Lump Sum: Which Is Better for Beginners?", excerpt: "We break down the math and psychology behind both approaches with real Indian market data.", category: "Beginner Tips", author: "Arjun Mehta", authorAvatar: "AM", date: "2026-02-18", readTime: "6 min" },
  { id: 3, slug: "rbi-rate-cut-impact", title: "How the Latest RBI Rate Cut Affects Your Investments", excerpt: "Understanding what falling interest rates mean for your bonds, stocks, and fixed deposits.", category: "Market Updates", author: "Priya Sharma", authorAvatar: "PS", date: "2026-02-15", readTime: "7 min" },
  { id: 4, slug: "beginner-mistakes-real-stories", title: "5 Real Stories of Beginner Investing Mistakes", excerpt: "Learn from others' expensive lessons so you don't have to make the same ones.", category: "Case Studies", author: "Vikram Reddy", authorAvatar: "VR", date: "2026-02-12", readTime: "9 min" },
  { id: 5, slug: "emergency-fund-guide", title: "The Ultimate Emergency Fund Guide for Indians", excerpt: "How much to save, where to keep it, and when to use it. A complete practical guide.", category: "Personal Finance", author: "Arjun Mehta", authorAvatar: "AM", date: "2026-02-10", readTime: "7 min" },
  { id: 6, slug: "ai-simulator-launch", title: "Introducing the AI Portfolio Simulator", excerpt: "Practice investing with virtual money while our AI gives you real-time feedback on your decisions.", category: "Product Updates", author: "Team InvestCopilot", authorAvatar: "IC", date: "2026-02-08", readTime: "5 min" },
]

// ============================================================
// TOOLS
// ============================================================

export const tools: Tool[] = [
  { id: 1, slug: "compound-interest", title: "Compound Interest Calculator", description: "See how your money grows over time with the power of compounding. Input your principal, monthly contribution, interest rate, and time period.", icon: "TrendingUp" },
  { id: 2, slug: "portfolio-simulator", title: "Portfolio Simulator Preview", description: "Build a sample portfolio and see how it would have performed historically against market benchmarks.", icon: "PieChart" },
  { id: 3, slug: "risk-score", title: "Risk Score Calculator", description: "Take a quick 10-question quiz to discover your risk profile: Conservative, Moderate, or Aggressive.", icon: "Shield" },
  { id: 4, slug: "financial-health", title: "Financial Health Score", description: "Input your income, expenses, savings, and debt to get a comprehensive financial health score from 0-100.", icon: "Heart" },
  { id: 5, slug: "goal-planner", title: "Investment Goal Planner", description: "Set a financial goal, specify your timeline, and discover exactly how much you need to invest monthly.", icon: "Target" },
]

// ============================================================
// ROADMAP STEPS
// ============================================================

export const roadmapSteps = [
  { step: 1, title: "Fix Your Finances", description: "Build a solid financial foundation with budgeting, emergency funds, and debt management.", topics: ["Foundations of Money", "Personal Finance Fundamentals"], status: "completed" as const },
  { step: 2, title: "Understand the Markets", description: "Learn how financial markets work, who the players are, and what drives prices.", topics: ["Understanding Financial Markets", "Asset Classes", "Index Investing"], status: "in-progress" as const },
  { step: 3, title: "Learn Strategies", description: "Master risk management, behavioral finance, and proven investment strategies.", topics: ["Risk Management", "Behavioral Finance", "Investment Strategies"], status: "locked" as const },
  { step: 4, title: "Analyze & Build", description: "Develop skills in company analysis, valuation, and macroeconomics to make informed decisions.", topics: ["Company Analysis", "Valuation Basics", "Macroeconomics", "Market Events"], status: "locked" as const },
  { step: 5, title: "Start Your Portfolio", description: "Apply everything you've learned to build and manage your first real investment portfolio.", topics: ["Portfolio Building Guide", "Beginner Investment Roadmap"], status: "locked" as const },
]

// ============================================================
// APP MOCK DATA
// ============================================================

export const mockUser: UserProfile = {
  name: "Rahul Kumar",
  email: "rahul@example.com",
  level: 4,
  levelTitle: "Smart Saver",
  xp: 4200,
  xpToNext: 6000,
  streak: 7,
  articlesRead: 23,
  quizScore: 78,
  totalTrades: 15,
  joinDate: "2025-11-15",
}

export const mockTrades: Trade[] = [
  { id: 1, symbol: "RELIANCE", name: "Reliance Industries", type: "buy", quantity: 5, price: 2450.50, date: "2026-02-01", currentPrice: 2520.30 },
  { id: 2, symbol: "TCS", name: "Tata Consultancy Services", type: "buy", quantity: 3, price: 3820.00, date: "2026-01-28", currentPrice: 3780.50 },
  { id: 3, symbol: "HDFCBANK", name: "HDFC Bank", type: "buy", quantity: 10, price: 1650.25, date: "2026-01-20", currentPrice: 1720.80 },
  { id: 4, symbol: "INFY", name: "Infosys", type: "buy", quantity: 8, price: 1580.00, date: "2026-01-15", currentPrice: 1610.25 },
  { id: 5, symbol: "WIPRO", name: "Wipro", type: "sell", quantity: 15, price: 485.50, date: "2026-02-10", currentPrice: 478.90 },
  { id: 6, symbol: "ICICIBANK", name: "ICICI Bank", type: "buy", quantity: 12, price: 1085.30, date: "2026-01-10", currentPrice: 1140.75 },
  { id: 7, symbol: "NIFTY50ETF", name: "Nifty 50 ETF", type: "buy", quantity: 50, price: 245.20, date: "2025-12-15", currentPrice: 258.40 },
]

export const mockJournalEntries: JournalEntry[] = [
  { id: 1, title: "Bought Reliance - Long term growth bet", date: "2026-02-01", tradeRef: "RELIANCE", reasoning: "Reliance has strong fundamentals across telecom, retail, and energy. I believe the diversified business model provides stability. The stock dipped 3% from recent highs, giving a decent entry point.", aiScore: 82, tags: ["fundamental-analysis", "long-term", "diversification"] },
  { id: 2, title: "Why I sold Wipro", date: "2026-02-10", tradeRef: "WIPRO", reasoning: "IT sector showing weakness. Wipro's quarterly results were disappointing. I sold to reduce IT exposure in my portfolio from 40% to 25%.", aiScore: 75, tags: ["sector-rotation", "risk-management", "rebalancing"] },
  { id: 3, title: "Added to HDFC Bank position", date: "2026-01-20", tradeRef: "HDFCBANK", reasoning: "Banking sector expected to benefit from rate cuts. HDFC Bank is a high-quality compounder. Increasing allocation to financials.", aiScore: 88, tags: ["macro-analysis", "quality-investing", "sector-bet"] },
  { id: 4, title: "Started SIP in Nifty 50 ETF", date: "2025-12-15", tradeRef: "NIFTY50ETF", reasoning: "Following the index strategy from Topic 5. Starting small monthly investments regardless of market conditions. Goal: build a core index position.", aiScore: 95, tags: ["index-investing", "sip", "long-term"] },
  { id: 5, title: "Market thoughts after budget", date: "2026-02-05", reasoning: "Markets reacted negatively to budget. Decided not to panic sell. Writing this to remind myself that short-term volatility is normal.", aiScore: 90, tags: ["behavioral", "patience", "market-event"] },
]

export const mockAchievements: Achievement[] = [
  { id: "first-steps", title: "First Steps", description: "Complete Topic 1: Foundations of Money", icon: "Sprout", earned: true, earnedDate: "2025-12-20" },
  { id: "market-explorer", title: "Market Explorer", description: "Complete Topics 3 & 4", icon: "BarChart3", earned: true, earnedDate: "2026-01-15" },
  { id: "bias-buster", title: "Bias Buster", description: "Complete Topic 7: Behavioral Finance", icon: "Brain", earned: false },
  { id: "strategy-master", title: "Strategy Master", description: "Complete Topic 8: Investment Strategies", icon: "Target", earned: false },
  { id: "reflection-pro", title: "Reflection Pro", description: "Write 10 journal entries", icon: "BookOpen", earned: false },
  { id: "simulator-champion", title: "Simulator Champion", description: "Complete 50 trades in simulator", icon: "Trophy", earned: false },
  { id: "seven-day-streak", title: "7-Day Streak", description: "Learn 7 days in a row", icon: "Flame", earned: true, earnedDate: "2026-02-15" },
  { id: "thirty-day-streak", title: "30-Day Streak", description: "Learn 30 days in a row", icon: "Flame", earned: false },
  { id: "calculator-whiz", title: "Calculator Whiz", description: "Use all 5 tools/calculators", icon: "Calculator", earned: false },
  { id: "investing-iq-80", title: "Investing IQ 80+", description: "Reach AI score of 80+", icon: "Star", earned: false },
  { id: "first-green", title: "First Green", description: "First profitable trade in simulator", icon: "TrendingUp", earned: true, earnedDate: "2026-01-22" },
  { id: "risk-aware", title: "Risk Aware", description: "Zero high-risk alerts for 30 days", icon: "Shield", earned: false },
  { id: "graduate", title: "Graduate", description: "Complete all 17 topics", icon: "GraduationCap", earned: false },
]

export const portfolioChartData = [
  { date: "Dec 15", value: 12260 },
  { date: "Dec 22", value: 12450 },
  { date: "Dec 29", value: 12180 },
  { date: "Jan 5", value: 12580 },
  { date: "Jan 12", value: 13200 },
  { date: "Jan 19", value: 13580 },
  { date: "Jan 26", value: 14100 },
  { date: "Feb 2", value: 14650 },
  { date: "Feb 9", value: 14280 },
  { date: "Feb 16", value: 14950 },
  { date: "Feb 23", value: 15320 },
]

export const learningProgressData = [
  { topic: "Foundations", progress: 100 },
  { topic: "Personal Finance", progress: 100 },
  { topic: "Markets", progress: 71 },
  { topic: "Assets", progress: 40 },
  { topic: "Index", progress: 0 },
  { topic: "Risk", progress: 0 },
  { topic: "Behavioral", progress: 0 },
  { topic: "Strategies", progress: 0 },
]

export const riskAlerts = [
  { id: 1, type: "warning" as const, title: "High IT Sector Exposure", description: "Your portfolio has 35% allocation to IT stocks. Consider diversifying.", severity: "medium" },
  { id: 2, type: "info" as const, title: "Good Diversification Score", description: "You're invested across 4 different sectors. Keep it up!", severity: "low" },
  { id: 3, type: "danger" as const, title: "Single Stock Concentration", description: "HDFC Bank makes up 28% of your portfolio. The recommended max is 15%.", severity: "high" },
]

export const recentActivity = [
  { id: 1, type: "article" as const, title: "Read: Liquidity: Why It Matters", date: "2 hours ago" },
  { id: 2, type: "trade" as const, title: "Sold 15 shares of WIPRO", date: "1 day ago" },
  { id: 3, type: "journal" as const, title: "Wrote: Why I sold Wipro", date: "1 day ago" },
  { id: 4, type: "quiz" as const, title: "Scored 4/5 on Market Cycles quiz", date: "2 days ago" },
  { id: 5, type: "article" as const, title: "Read: Market Cycles: Bulls, Bears, and Everything Between", date: "2 days ago" },
]
