import React, { useState, useEffect } from "react";

const Learn = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completedModules, setCompletedModules] = useState([]);
  const [xp, setXp] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Load saved progress
  useEffect(() => {
    const savedModules = localStorage.getItem("learnProgress");
    const savedXP = localStorage.getItem("learnXP");

    if (savedModules) setCompletedModules(JSON.parse(savedModules));
    if (savedXP) setXp(parseInt(savedXP));
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem("learnProgress", JSON.stringify(completedModules));
  }, [completedModules]);

  useEffect(() => {
    localStorage.setItem("learnXP", xp);
  }, [xp]);

  const modules = [
    {
      title: "Stock Market Foundations",
      content: `
Stocks represent ownership in a company.

When you buy a stock:
• You own part of the business
• You may receive dividends
• You benefit from growth

Stock Market vs Share Market:
Stock market includes bonds, derivatives etc.
Share market deals specifically in company shares.

Important terms:
• Sensex – Top 30 BSE companies
• Nifty50 – Top 50 NSE companies
• SEBI – Regulator
• IPO – First public offering
• Bull Market – Rising market
• Bear Market – Falling market
• Moving Average – Trend indicator
`,
      quiz: [
        {
          question: "Buying a stock means?",
          options: [
            "Loaning money",
            "Owning part of a company",
            "Paying tax",
            "Opening savings account"
          ],
          answer: 1
        },
        {
          question: "Bull Market means?",
          options: ["Falling", "Rising", "Closed", "Slow"],
          answer: 1
        }
      ]
    },
    {
      title: "Market Participants & Orders",
      content: `
Participants:
• Retail investors
• Institutions
• Brokers
• Market makers

Order Types:
• Market Order – instant execution
• Limit Order – specific price
• Stop Loss – risk control
`,
      quiz: [
        {
          question: "Market Order does what?",
          options: ["Waits", "Instant execution", "Cancels trade", "Stops market"],
          answer: 1
        },
        {
          question: "Stop loss protects from?",
          options: ["Profit", "Loss", "Tax", "Dividend"],
          answer: 1
        }
      ]
    },
    {
      title: "Price Movement",
      content: `
Prices move due to:
• Demand & Supply
• Earnings
• News
• Global events

More buyers → price rises.
More sellers → price falls.
`,
      quiz: [
        {
          question: "Higher demand causes?",
          options: ["Price fall", "Price rise", "No change", "Market stop"],
          answer: 1
        },
        {
          question: "Company earnings impact?",
          options: ["Weather", "Stock price", "Roads", "Gold only"],
          answer: 1
        }
      ]
    },
    {
      title: "Risk & Return",
      content: `
Higher returns = higher risk.

Risk types:
• Market risk
• Company risk
• Liquidity risk

Diversification reduces overall risk.
`,
      quiz: [
        {
          question: "Higher return means?",
          options: ["Lower risk", "Higher risk", "No risk", "Free money"],
          answer: 1
        },
        {
          question: "Diversification helps?",
          options: ["Increase risk", "Reduce risk", "Avoid learning", "Double profit"],
          answer: 1
        }
      ]
    },
    {
      title: "Technical Analysis",
      content: `
Studies price charts.

Tools:
• Candlesticks
• Moving averages
• Support & resistance

Used for short-term decisions.
`,
      quiz: [
        {
          question: "Technical analysis studies?",
          options: ["Charts", "Weather", "GDP", "Tax"],
          answer: 0
        },
        {
          question: "Moving average shows?",
          options: ["Trend", "CEO", "Dividend", "IPO"],
          answer: 0
        }
      ]
    },
    {
      title: "Fundamental Analysis",
      content: `
Studies company health.

Check:
• Revenue
• Profit
• Debt
• Growth

Used for long-term investing.
`,
      quiz: [
        {
          question: "Fundamental analysis studies?",
          options: ["Charts", "Company health", "Volume only", "Rumors"],
          answer: 1
        },
        {
          question: "Long-term investors prefer?",
          options: ["Fundamental", "Random", "Gossip", "Lottery"],
          answer: 0
        }
      ]
    },
    {
      title: "Trading Psychology",
      content: `
Emotions cause losses.

Common mistakes:
• Fear
• Greed
• Overtrading

Discipline builds consistency.
`,
      quiz: [
        {
          question: "Biggest trader enemy?",
          options: ["Charts", "Broker", "Emotions", "Laptop"],
          answer: 2
        },
        {
          question: "Overtrading leads to?",
          options: ["Profit", "Loss", "Promotion", "Free trade"],
          answer: 1
        }
      ]
    },
    {
      title: "Risk Management",
      content: `
Protect capital first.

Rules:
• Risk 1–2% per trade
• Use stop loss
• Avoid all-in trades

Survival = success.
`,
      quiz: [
        {
          question: "Ideal risk per trade?",
          options: ["50%", "20%", "1-2%", "100%"],
          answer: 2
        },
        {
          question: "Stop loss helps?",
          options: ["Increase risk", "Protect capital", "Avoid study", "Boost ego"],
          answer: 1
        }
      ]
    }
  ];

  const module = modules[currentModule];
  const progress = (completedModules.length / modules.length) * 100;

  const getLevel = () => {
    if (xp >= 1000) return { level: 5, title: "Capital Protector" };
    if (xp >= 700) return { level: 4, title: "Structured Strategist" };
    if (xp >= 400) return { level: 3, title: "Disciplined Trader" };
    if (xp >= 200) return { level: 2, title: "Risk Aware Trader" };
    return { level: 1, title: "Market Beginner" };
  };

  const trader = getLevel();
  const currentQuestion = module.quiz[currentQuestionIndex];

  const handleAnswer = () => {
    if (selectedAnswer === null) return;

    let newScore = score;
    if (selectedAnswer === currentQuestion.answer) {
      newScore += 1;
      setScore(newScore);
      setFeedback("Correct answer.");
    } else {
      setFeedback("Incorrect. Review the module and try again.");
    }

    if (currentQuestionIndex < module.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      const percentage = (newScore / module.quiz.length) * 100;

      if (percentage >= 70) {
        if (!completedModules.includes(currentModule)) {
          setCompletedModules([...completedModules, currentModule]);
          setXp(prev => prev + 100);
        }

        setFeedback("Module passed successfully.");
        setShowQuiz(false);
        setCurrentModule(prev => prev + 1 < modules.length ? prev + 1 : prev);
      } else {
        setFeedback("You need at least 70% to pass. Try again.");
      }

      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">UpTrend Academy</h1>

      <div className="mb-6 p-4 bg-gray-900 border border-gray-700 rounded-lg">
        <p className="text-gray-400 text-sm">Trader Level</p>
        <h2 className="text-xl text-green-400 font-semibold">
          Level {trader.level} – {trader.title}
        </h2>
        <p className="text-gray-400">{xp} XP</p>
      </div>

      <div className="w-full bg-gray-700 h-3 rounded-full mb-6">
        <div
          className="bg-green-500 h-3 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!showQuiz ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">{module.title}</h2>
          <p className="whitespace-pre-line text-gray-300 mb-6">
            {module.content}
          </p>

          <div className="flex gap-4">
            {currentModule > 0 && (
              <button
                onClick={() => setCurrentModule(currentModule - 1)}
                className="px-4 py-2 bg-gray-700 rounded"
              >
                Back
              </button>
            )}

            <button
              onClick={() => setShowQuiz(true)}
              className="px-4 py-2 bg-green-600 rounded"
            >
              Take Quiz
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quiz – {module.title}
          </h3>

          <p className="mb-4">{currentQuestion.question}</p>

          <div className="space-y-2 mb-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`block w-full p-2 rounded ${
                  selectedAnswer === index
                    ? "bg-green-600"
                    : "bg-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && (
            <p className="mb-4 text-sm text-gray-300">{feedback}</p>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => setShowQuiz(false)}
              className="px-4 py-2 bg-gray-700 rounded"
            >
              Back to Module
            </button>

            <button
              onClick={handleAnswer}
              className="px-4 py-2 bg-blue-600 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;