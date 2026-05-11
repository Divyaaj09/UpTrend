// src/academy/modules/module4.js

const module4 = {
  id: 4,

  title: "4. Trading Types & Strategies",

  description:
    "Understand different trading styles, beginner strategies, breakouts, momentum trading, and strategy building concepts.",

  level: "Intermediate",

  estimatedTime: "6 Hours",

  chartInfo: {
    title: "Breakout Strategy Visualization",

    description:
      "This chart shows price consolidating before a breakout with strong momentum.",

    type: "breakout",
  },

  visualLearning: true,
  chartPractice: true,
  replayMode: true,
  liveSimulation: true,
  skillTracking: true,

  topics: [
    {
      id: "m4-1",

      title: "Introduction to Trading Styles",

      duration: "15 min",

      content: `
        <h2>Introduction to Trading Styles</h2>

        <p>
          Different traders use different trading styles depending on:
        </p>

        <ul>
          <li>Personality</li>
          <li>Time availability</li>
          <li>Risk tolerance</li>
          <li>Goals</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          No trading style is perfect.
          <br/><br/>
          The best style is the one that matches your personality and discipline.
        </div>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Trading Style</th>
              <th class="border border-gray-700 p-3">Holding Time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Scalping</td>
              <td class="border border-gray-700 p-3">Seconds to Minutes</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Intraday</td>
              <td class="border border-gray-700 p-3">Within Same Day</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Swing Trading</td>
              <td class="border border-gray-700 p-3">Days to Weeks</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Positional Trading</td>
              <td class="border border-gray-700 p-3">Weeks to Months</td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m4-2",

      title: "Intraday Trading",

      duration: "20 min",

      content: `
        <h2>Intraday Trading</h2>

        <p>
          Intraday trading means buying and selling within the same trading day.
        </p>

        <h3>Key Features</h3>

        <ul>
          <li>Fast-paced</li>
          <li>No overnight positions</li>
          <li>Requires active monitoring</li>
          <li>Higher emotional pressure</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Buy → Trade During Day → Exit Before Market Closes
        </div>

        <h3>Advantages</h3>

        <ul>
          <li>Quick opportunities</li>
          <li>No overnight risk</li>
        </ul>

        <h3>Disadvantages</h3>

        <ul>
          <li>Emotionally intense</li>
          <li>Requires discipline</li>
        </ul>
      `,
    },

    {
      id: "m4-3",

      title: "Swing Trading",

      duration: "20 min",

      content: `
        <h2>Swing Trading</h2>

        <p>
          Swing traders hold positions for several days or weeks
          to capture medium-term price movement.
        </p>

        <h3>Why Beginners Prefer Swing Trading</h3>

        <ul>
          <li>Less stressful</li>
          <li>More analysis time</li>
          <li>Cleaner market movement</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Swing Trading
          <br/>
          = Patience + Trend Following
        </div>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Intraday</th>
              <th class="border border-gray-700 p-3">Swing Trading</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Fast-paced</td>
              <td class="border border-gray-700 p-3">Slower pace</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">High stress</td>
              <td class="border border-gray-700 p-3">Less stressful</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Same-day trades</td>
              <td class="border border-gray-700 p-3">Multi-day trades</td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m4-4",

      title: "Scalping",

      duration: "15 min",

      content: `
        <h2>Scalping</h2>

        <p>
          Scalping involves making multiple quick trades
          to capture very small price movements.
        </p>

        <h3>Scalpers Focus On:</h3>

        <ul>
          <li>Speed</li>
          <li>Quick execution</li>
          <li>Very small targets</li>
        </ul>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Beginner Insight:
          <br/>
          Scalping is difficult for beginners because it requires
          strong emotional control and fast decision-making.
        </div>
      `,
    },

    {
      id: "m4-5",

      title: "Positional Trading",

      duration: "14 min",

      content: `
        <h2>Positional Trading</h2>

        <p>
          Positional traders hold positions for weeks or months
          based on larger market trends.
        </p>

        <h3>Features</h3>

        <ul>
          <li>Longer holding periods</li>
          <li>Less market noise</li>
          <li>Focus on bigger trends</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Positional Trading
          <br/>
          = Long-Term Trend Participation
        </div>
      `,
    },

    {
      id: "m4-6",

      title: "Risk vs Reward",

      duration: "20 min",

      content: `
        <h2>Risk vs Reward</h2>

        <p>
          Risk vs reward compares possible loss with possible profit.
        </p>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Risk ₹100
          <br/>
          Reward ₹300
          <br/>
          Risk-Reward Ratio = 1:3
        </div>

        <h3>Why Risk Reward Matters</h3>

        <ul>
          <li>Protects traders from large losses</li>
          <li>Improves consistency</li>
          <li>Creates structured trading</li>
        </ul>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Bad Trade</th>
              <th class="border border-gray-700 p-3">Good Trade</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Risk 500 to make 100</td>
              <td class="border border-gray-700 p-3">Risk 100 to make 300</td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m4-7",

      title: "Trend Following Strategy",

      duration: "22 min",

      content: `
        <h2>Trend Following Strategy</h2>

        <p>
          Trend following means trading in the direction of the overall market trend.
        </p>

        <h3>Basic Logic</h3>

        <ul>
          <li>Buy during uptrends</li>
          <li>Sell during downtrends</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Uptrend
          <br/>
          = Buyers Dominating
        </div>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Downtrend
          <br/>
          = Sellers Dominating
        </div>

        <h3>Why Trend Following Works</h3>

        <p>
          Strong trends often continue longer than beginners expect.
        </p>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          “Trend is your friend”
        </div>
      `,
    },

    {
      id: "m4-8",

      title: "Breakout Strategy",

      duration: "22 min",

      content: `
        <h2>Breakout Strategy</h2>

        <p>
          A breakout occurs when price moves strongly beyond support or resistance.
        </p>

        <h3>Why Breakouts Matter</h3>

        <ul>
          <li>Can signal strong momentum</li>
          <li>May start new trends</li>
          <li>Often attract trader attention</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Resistance Break
          <br/>
          ↓
          <br/>
          Buyers Become Aggressive
          <br/>
          ↓
          <br/>
          Price Moves Up
        </div>

        <h3>Good Breakout Confirmation</h3>

        <ul>
          <li>Strong volume</li>
          <li>Momentum increase</li>
          <li>Trend alignment</li>
        </ul>
      `,
    },

    {
      id: "m4-9",

      title: "Reversal Strategy",

      duration: "20 min",

      content: `
        <h2>Reversal Strategy</h2>

        <p>
          Reversal trading focuses on identifying points
          where the market may change direction.
        </p>

        <h3>Reversal Signals</h3>

        <ul>
          <li>Support & resistance reactions</li>
          <li>Candlestick patterns</li>
          <li>Momentum weakening</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Downtrend Weakens
          <br/>
          ↓
          <br/>
          Buyers Become Stronger
          <br/>
          ↓
          <br/>
          Reversal Possible
        </div>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Beginner Warning:
          <br/>
          Reversal trading is risky without confirmation.
        </div>
      `,
    },

    {
      id: "m4-10",

      title: "Momentum Trading",

      duration: "18 min",

      content: `
        <h2>Momentum Trading</h2>

        <p>
          Momentum trading focuses on stocks moving strongly in one direction.
        </p>

        <h3>Momentum Traders Look For:</h3>

        <ul>
          <li>Strong price movement</li>
          <li>Volume increase</li>
          <li>Trend continuation</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Strong Momentum
          <br/>
          = Strong Buyer or Seller Activity
        </div>

        <p>
          Strong momentum often attracts more traders,
          which can continue movement further.
        </p>
      `,
    },

    {
      id: "m4-11",

      title: "Volume Breakout Concept",

      duration: "18 min",

      content: `
        <h2>Volume Breakout Concept</h2>

        <p>
          Volume represents the number of shares traded.
        </p>

        <h3>Why Volume Matters</h3>

        <ul>
          <li>Confirms breakout strength</li>
          <li>Shows trader participation</li>
          <li>Reveals market interest</li>
        </ul>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Low Volume</th>
              <th class="border border-gray-700 p-3">High Volume</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Weak conviction
              </td>

              <td class="border border-gray-700 p-3">
                Strong participation
              </td>
            </tr>
          </tbody>
        </table>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Strong breakout + High volume
          <br/>
          = More reliable setup
        </div>
      `,
    },

    {
      id: "m4-12",

      title: "Strategy Building Basics",

      duration: "22 min",

      content: `
        <h2>Strategy Building Basics</h2>

        <p>
          A trading strategy is a structured set of rules
          used for entering and exiting trades.
        </p>

        <h3>Basic Strategy Components</h3>

        <ul>
          <li>Entry rules</li>
          <li>Exit rules</li>
          <li>Risk management</li>
          <li>Confirmation methods</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Market Analysis
          <br/>
          ↓
          <br/>
          Strategy Rules
          <br/>
          ↓
          <br/>
          Trade Execution
        </div>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Professional traders follow systems —
          not emotions.
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
          "Which trading style involves buying and selling within the same day?",

        options: [
          "Swing Trading",
          "Investing",
          "Intraday Trading",
          "Positional Trading",
        ],

        correctAnswer: 2,
      },

      {
        id: 2,

        question:
          "What does a breakout mean?",

        options: [
          "Market closure",
          "Price strongly moving beyond key level",
          "Broker error",
          "Tax calculation",
        ],

        correctAnswer: 1,
      },

      {
        id: 3,

        question:
          "Trend following strategy means:",

        options: [
          "Trading against trend",
          "Ignoring trends",
          "Trading with overall market direction",
          "Random trading",
        ],

        correctAnswer: 2,
      },

      {
        id: 4,

        question:
          "Why is volume important in breakouts?",

        options: [
          "Shows taxes",
          "Shows broker profit",
          "Confirms strength of movement",
          "Reduces volatility",
        ],

        correctAnswer: 2,
      },
    ],
  },
};

export default module4;