// src/academy/modules/module8.js

const module8 = {
  id: 8,

  title: "8. Portfolio Building & Professional Trading",

  description:
    "Learn portfolio management, diversification, capital allocation, and professional trading workflows.",

  level: "Advanced",

  estimatedTime: "7 Hours",

  chartInfo: {
    title: "Risk Management & Portfolio",

    description:
      "Proper risk management protects traders from large losses.",

    type: "risk",
  },

  visualLearning: true,
  chartPractice: true,
  replayMode: true,
  liveSimulation: true,
  skillTracking: true,

  topics: [
    {
      id: "m8-1",

      title: "Creating a Trading Plan",

      duration: "25 min",

      content: `
        <h2>Creating a Trading Plan</h2>

        <p>
          Professional traders always trade with a structured plan.
        </p>

        <p>
          A trading plan helps remove emotional decision-making
          and creates consistency.
        </p>

        <h3>A Trading Plan Usually Includes:</h3>

        <ul>
          <li>Entry rules</li>
          <li>Exit rules</li>
          <li>Risk management rules</li>
          <li>Trading schedule</li>
          <li>Position sizing rules</li>
          <li>Psychological discipline</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Market Analysis
          <br/>
          ↓
          <br/>
          Trade Setup
          <br/>
          ↓
          <br/>
          Risk Calculation
          <br/>
          ↓
          <br/>
          Trade Execution
        </div>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Structured traders survive longer than emotional traders.
        </div>
      `,
    },

    {
      id: "m8-2",

      title: "Building a Daily Market Routine",

      duration: "22 min",

      content: `
        <h2>Building a Daily Market Routine</h2>

        <p>
          Professional traders follow routines consistently.
        </p>

        <h3>Morning Preparation</h3>

        <ul>
          <li>Check global markets</li>
          <li>Review important news</li>
          <li>Prepare watchlists</li>
          <li>Mark key levels</li>
        </ul>

        <h3>During Market Hours</h3>

        <ul>
          <li>Observe patiently</li>
          <li>Wait for setups</li>
          <li>Manage risk carefully</li>
        </ul>

        <h3>After Market Close</h3>

        <ul>
          <li>Review trades</li>
          <li>Track mistakes</li>
          <li>Journal emotions</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Preparation
          <br/>
          ↓
          <br/>
          Execution
          <br/>
          ↓
          <br/>
          Review
          <br/>
          ↓
          <br/>
          Improvement
        </div>
      `,
    },

    {
      id: "m8-3",

      title: "Professional Market Preparation",

      duration: "20 min",

      content: `
        <h2>Professional Market Preparation</h2>

        <p>
          Professional traders prepare before markets open.
        </p>

        <h3>What Professionals Analyze</h3>

        <ul>
          <li>Global sentiment</li>
          <li>Sector strength</li>
          <li>Volatility</li>
          <li>Institutional activity</li>
          <li>Important news</li>
        </ul>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Better preparation
          <br/>
          ↓
          <br/>
          Better decisions
        </div>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Random trading usually creates emotional trading behavior.
        </div>
      `,
    },

    {
      id: "m8-4",

      title: "Backtesting Basics",

      duration: "22 min",

      content: `
        <h2>Backtesting Basics</h2>

        <p>
          Backtesting means checking how a strategy
          would have performed in past market conditions.
        </p>

        <h3>Why Backtesting Matters</h3>

        <ul>
          <li>Builds confidence</li>
          <li>Improves discipline</li>
          <li>Reveals strategy weaknesses</li>
          <li>Improves consistency</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Strategy
          <br/>
          ↓
          <br/>
          Historical Testing
          <br/>
          ↓
          <br/>
          Performance Analysis
        </div>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Professionals test systems before risking capital.
        </div>
      `,
    },

    {
      id: "m8-5",

      title: "Paper Trading",

      duration: "18 min",

      content: `
        <h2>Paper Trading</h2>

        <p>
          Paper trading means practicing with virtual money.
        </p>

        <h3>Benefits</h3>

        <ul>
          <li>No real financial risk</li>
          <li>Improves confidence</li>
          <li>Helps test strategies</li>
          <li>Builds market understanding</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Practice First
          <br/>
          ↓
          <br/>
          Gain Experience
          <br/>
          ↓
          <br/>
          Improve Confidence
        </div>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Real emotions become stronger when real money is involved.
        </div>
      `,
    },

    {
      id: "m8-6",

      title: "Live Market Observation",

      duration: "20 min",

      content: `
        <h2>Live Market Observation</h2>

        <p>
          Observation is one of the most important learning tools in trading.
        </p>

        <h3>Professional Traders Observe:</h3>

        <ul>
          <li>Momentum changes</li>
          <li>Volume spikes</li>
          <li>Market reactions</li>
          <li>News impact</li>
          <li>Price behavior</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Observation
          <br/>
          ↓
          <br/>
          Pattern Recognition
          <br/>
          ↓
          <br/>
          Better Decision-Making
        </div>
      `,
    },

    {
      id: "m8-7",

      title: "Building Your Own Trading Strategy",

      duration: "25 min",

      content: `
        <h2>Building Your Own Trading Strategy</h2>

        <p>
          Every trader eventually develops a strategy
          matching their personality and lifestyle.
        </p>

        <h3>A Strategy Usually Includes</h3>

        <ul>
          <li>Entry conditions</li>
          <li>Exit conditions</li>
          <li>Risk management rules</li>
          <li>Timeframes</li>
          <li>Confirmation methods</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Market Understanding
          <br/>
          ↓
          <br/>
          Strategy Creation
          <br/>
          ↓
          <br/>
          Backtesting
          <br/>
          ↓
          <br/>
          Improvement
        </div>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Professionals build systems —
          not emotional habits.
        </div>
      `,
    },

    {
      id: "m8-8",

      title: "Portfolio Basics",

      duration: "18 min",

      content: `
        <h2>Portfolio Basics</h2>

        <p>
          A portfolio is the collection of all investments or trades.
        </p>

        <h3>Why Portfolios Matter</h3>

        <ul>
          <li>Reduce concentration risk</li>
          <li>Improve diversification</li>
          <li>Reduce emotional pressure</li>
        </ul>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Poor Diversification</th>
              <th class="border border-gray-700 p-3">Good Diversification</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                All money in one stock
              </td>

              <td class="border border-gray-700 p-3">
                Capital spread across assets
              </td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m8-9",

      title: "Long-Term Wealth Mindset",

      duration: "18 min",

      content: `
        <h2>Long-Term Wealth Mindset</h2>

        <p>
          Trading success is built through consistency,
          not overnight profits.
        </p>

        <h3>Professional Focus</h3>

        <ul>
          <li>Discipline</li>
          <li>Patience</li>
          <li>Survival</li>
          <li>Continuous learning</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Discipline
          <br/>
          ↓
          <br/>
          Consistency
          <br/>
          ↓
          <br/>
          Long-Term Growth
        </div>
      `,
    },

    {
      id: "m8-10",

      title: "Common Beginner Mistakes",

      duration: "22 min",

      content: `
        <h2>Common Beginner Mistakes</h2>

        <ul>
          <li>Overtrading</li>
          <li>Ignoring stop loss</li>
          <li>Following social media blindly</li>
          <li>Changing strategies constantly</li>
          <li>Emotional revenge trading</li>
        </ul>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Emotional behavior destroys consistency.
        </div>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Mistakes become valuable when traders learn from them.
        </div>
      `,
    },

    {
      id: "m8-11",

      title: "Trading Scams & Red Flags",

      duration: "20 min",

      content: `
        <h2>Trading Scams & Red Flags</h2>

        <h3>Common Trading Scams</h3>

        <ul>
          <li>"Guaranteed profits"</li>
          <li>"100% win rate"</li>
          <li>Fake screenshots</li>
          <li>Luxury lifestyle manipulation</li>
          <li>Secret indicators</li>
        </ul>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          No strategy wins all the time.
        </div>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Real trading requires:
          <br/>
          • Skill
          <br/>
          • Patience
          <br/>
          • Discipline
          <br/>
          • Risk management
        </div>
      `,
    },

    {
      id: "m8-12",

      title: "Trading Ethics & Professionalism",

      duration: "18 min",

      content: `
        <h2>Trading Ethics & Professionalism</h2>

        <p>
          Professional traders behave responsibly.
        </p>

        <h3>Good Trading Ethics Include</h3>

        <ul>
          <li>Honesty</li>
          <li>Discipline</li>
          <li>Continuous learning</li>
          <li>Respect for risk</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Professional behavior creates long-term consistency.
        </div>
      `,
    },

    {
      id: "m8-13",

      title: "Watchlists & Journaling",

      duration: "22 min",

      content: `
        <h2>Watchlists & Journaling</h2>

        <h3>Watchlists</h3>

        <p>
          Watchlists help traders focus on selected opportunities.
        </p>

        <h3>Trading Journal</h3>

        <p>
          Journals help track:
        </p>

        <ul>
          <li>Trade entries</li>
          <li>Trade exits</li>
          <li>Profit/loss</li>
          <li>Mistakes</li>
          <li>Emotions</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Track Trades
          <br/>
          ↓
          <br/>
          Find Weaknesses
          <br/>
          ↓
          <br/>
          Improve Consistency
        </div>
      `,
    },

    {
      id: "m8-14",

      title: "Continuous Learning Roadmap",

      duration: "18 min",

      content: `
        <h2>Continuous Learning Roadmap</h2>

        <p>
          Markets continuously evolve.
        </p>

        <h3>Successful Traders Continue Learning Through:</h3>

        <ul>
          <li>Chart study</li>
          <li>News analysis</li>
          <li>Trade reviews</li>
          <li>Backtesting</li>
          <li>Observation</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Learning Never Stops
          <br/>
          ↓
          <br/>
          Markets Keep Evolving
        </div>
      `,
    },

    {
      id: "m8-15",

      title: "Career Opportunities in Trading & Finance",

      duration: "18 min",

      content: `
        <h2>Career Opportunities in Trading & Finance</h2>

        <ul>
          <li>Trader</li>
          <li>Investor</li>
          <li>Financial Analyst</li>
          <li>Portfolio Manager</li>
          <li>Risk Manager</li>
          <li>Market Research Analyst</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Trading knowledge improves financial understanding even outside trading careers.
        </div>
      `,
    },

    {
      id: "m8-16",

      title: "Final Trading Checklist",

      duration: "20 min",

      content: `
        <h2>Final Trading Checklist</h2>

        <h3>Before Entering Any Trade:</h3>

        <ul>
          <li>Is the trend clear?</li>
          <li>Is volume supporting movement?</li>
          <li>Is risk manageable?</li>
          <li>Is stop loss defined?</li>
          <li>Am I emotionally calm?</li>
          <li>Am I following my plan?</li>
        </ul>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Analyze Setup
          <br/>
          ↓
          <br/>
          Check Risk
          <br/>
          ↓
          <br/>
          Control Emotions
          <br/>
          ↓
          <br/>
          Execute Professionally
        </div>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Consistency is built through disciplined repetition.
        </div>
      `,
    },
  ],

  quiz: {
    passingScore: 85,

    questions: [
      {
        id: 1,

        question:
          "Why is a trading plan important?",

        options: [
          "It guarantees profits",
          "It removes all losses",
          "It creates structure & discipline",
          "It predicts the future",
        ],

        correctAnswer: 2,
      },

      {
        id: 2,

        question:
          "What is paper trading?",

        options: [
          "Trading emotionally",
          "Trading with virtual money",
          "Manipulating markets",
          "Investing blindly",
        ],

        correctAnswer: 1,
      },

      {
        id: 3,

        question:
          "What helps traders improve consistently?",

        options: [
          "Random trading",
          "Journaling & review",
          "Ignoring mistakes",
          "Overtrading",
        ],

        correctAnswer: 1,
      },

      {
        id: 4,

        question:
          "What is the best long-term trading mindset?",

        options: [
          "Fast profits",
          "Emotional trading",
          "Discipline & consistency",
          "Revenge trading",
        ],

        correctAnswer: 2,
      },
    ],
  },
};

export default module8;