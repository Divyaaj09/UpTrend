// src/academy/modules/module7.js

const module7 = {
  id: 7,

  title: "7. Advanced Market Analysis",

  description:
    "Learn advanced trading concepts including trend continuation, institutional behavior, liquidity, and market structure.",

  level: "Advanced",

  estimatedTime: "7 Hours",

  chartInfo: {
    title: "Trend Following Strategy",

    description:
      "Trend continuation setups help traders follow market direction.",

    type: "trend",
  },

  visualLearning: true,
  chartPractice: true,
  replayMode: true,
  liveSimulation: true,
  skillTracking: true,

  topics: [
    {
      id: "m7-1",

      title: "Understanding Market Structure",

      duration: "22 min",

      content: `
        <h2>Understanding Market Structure</h2>

        <p>
          Market structure refers to the overall behavior and movement pattern of the market.
        </p>

        <h3>Main Market Structures</h3>

        <ul>
          <li>Uptrend</li>
          <li>Downtrend</li>
          <li>Range / Sideways Market</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Higher Highs + Higher Lows
          <br/>
          = Bullish Market Structure
        </div>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Lower Highs + Lower Lows
          <br/>
          = Bearish Market Structure
        </div>

        <h3>Why Market Structure Matters</h3>

        <ul>
          <li>Improves trade direction</li>
          <li>Improves timing</li>
          <li>Helps avoid emotional trades</li>
        </ul>
      `,
    },

    {
      id: "m7-2",

      title: "Institutional Trading Basics",

      duration: "20 min",

      content: `
        <h2>Institutional Trading Basics</h2>

        <p>
          Institutions are large financial participants such as:
        </p>

        <ul>
          <li>Banks</li>
          <li>Hedge funds</li>
          <li>Mutual funds</li>
          <li>Insurance companies</li>
        </ul>

        <h3>Why Institutions Matter</h3>

        <p>
          Institutions move large amounts of capital,
          which can strongly influence price movement.
        </p>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Institutional Buying
          <br/>
          ↓
          <br/>
          Increased Demand
          <br/>
          ↓
          <br/>
          Prices Rise
        </div>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Smart traders try understanding where institutions may be active.
        </div>
      `,
    },

    {
      id: "m7-3",

      title: "Smart Money Concepts",

      duration: "24 min",

      content: `
        <h2>Smart Money Concepts</h2>

        <p>
          Smart money refers to institutional participants
          believed to have deeper market knowledge and larger capital.
        </p>

        <h3>Smart Money Traders Analyze:</h3>

        <ul>
          <li>Liquidity zones</li>
          <li>Breakout traps</li>
          <li>Order flow</li>
          <li>Institutional behavior</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Smart Money Concepts focus on understanding
          how large players move markets.
        </div>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Beginner Warning:
          <br/>
          Avoid blindly copying “smart money” content without understanding it properly.
        </div>
      `,
    },

    {
      id: "m7-4",

      title: "Liquidity Zones",

      duration: "18 min",

      content: `
        <h2>Liquidity Zones</h2>

        <p>
          Liquidity refers to areas where many stop losses,
          orders, or trader activity exist.
        </p>

        <h3>Why Liquidity Matters</h3>

        <ul>
          <li>Institutions often target liquidity areas</li>
          <li>Markets react strongly near liquidity zones</li>
          <li>Breakouts often occur near liquidity clusters</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          High Liquidity
          <br/>
          ↓
          <br/>
          Faster Order Execution
        </div>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Liquidity zones often exist near:
          <br/>
          • Support
          <br/>
          • Resistance
          <br/>
          • Previous highs/lows
        </div>
      `,
    },

    {
      id: "m7-5",

      title: "Breakout Traps & False Breakouts",

      duration: "24 min",

      content: `
        <h2>Breakout Traps & False Breakouts</h2>

        <p>
          Not every breakout becomes a successful trend.
        </p>

        <h3>False Breakout</h3>

        <p>
          Price briefly breaks a level
          and then reverses back quickly.
        </p>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Resistance Break
          <br/>
          ↓
          <br/>
          Traders Enter
          <br/>
          ↓
          <br/>
          Price Reverses
        </div>

        <h3>Why False Breakouts Happen</h3>

        <ul>
          <li>Liquidity grabs</li>
          <li>Weak momentum</li>
          <li>Low volume confirmation</li>
        </ul>

        <h3>How Professionals Avoid Traps</h3>

        <ul>
          <li>Wait for confirmation candles</li>
          <li>Check volume</li>
          <li>Analyze momentum</li>
        </ul>
      `,
    },

    {
      id: "m7-6",

      title: "Gap Up & Gap Down",

      duration: "18 min",

      content: `
        <h2>Gap Up & Gap Down</h2>

        <p>
          A gap occurs when price opens significantly above or below
          the previous closing price.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Gap Up</th>
              <th class="border border-gray-700 p-3">Gap Down</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Strong bullish sentiment
              </td>

              <td class="border border-gray-700 p-3">
                Strong bearish sentiment
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Common Causes</h3>

        <ul>
          <li>Major news</li>
          <li>Earnings reports</li>
          <li>Global events</li>
        </ul>
      `,
    },

    {
      id: "m7-7",

      title: "Sector Analysis",

      duration: "18 min",

      content: `
        <h2>Sector Analysis</h2>

        <p>
          Stocks are grouped into sectors such as:
        </p>

        <ul>
          <li>Banking</li>
          <li>IT</li>
          <li>Pharma</li>
          <li>Energy</li>
        </ul>

        <h3>Why Sector Analysis Matters</h3>

        <ul>
          <li>Strong sectors attract capital</li>
          <li>Weak sectors reduce opportunities</li>
          <li>Sector trends influence stock movement</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Strong Sector
          <br/>
          ↓
          <br/>
          Stronger Stock Opportunities
        </div>
      `,
    },

    {
      id: "m7-8",

      title: "Global Market Impact",

      duration: "20 min",

      content: `
        <h2>Global Market Impact</h2>

        <p>
          Global markets influence each other continuously.
        </p>

        <h3>Examples</h3>

        <ul>
          <li>US market movement affects global sentiment</li>
          <li>Oil prices impact energy stocks</li>
          <li>Interest rate changes affect markets worldwide</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Global News
          <br/>
          ↓
          <br/>
          Investor Reactions
          <br/>
          ↓
          <br/>
          Market Volatility
        </div>
      `,
    },

    {
      id: "m7-9",

      title: "News-Based Trading",

      duration: "22 min",

      content: `
        <h2>News-Based Trading</h2>

        <p>
          Markets react strongly to important news events.
        </p>

        <h3>Examples</h3>

        <ul>
          <li>Earnings reports</li>
          <li>Economic data</li>
          <li>Government policies</li>
          <li>Global events</li>
        </ul>

        <h3>Why News Creates Volatility</h3>

        <p>
          Traders react emotionally and rapidly to new information.
        </p>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          High-impact news often creates sudden price movement.
        </div>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Beginner Warning:
          <br/>
          News trading can become extremely volatile.
        </div>
      `,
    },

    {
      id: "m7-10",

      title: "Option Chain Basics & Open Interest",

      duration: "26 min",

      content: `
        <h2>Option Chain Basics & Open Interest</h2>

        <h3>Option Chain</h3>

        <p>
          Option chains display:
        </p>

        <ul>
          <li>Call options</li>
          <li>Put options</li>
          <li>Strike prices</li>
          <li>Open interest</li>
        </ul>

        <h3>Open Interest (OI)</h3>

        <p>
          Open interest shows the number of active option contracts.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">High OI</th>
              <th class="border border-gray-700 p-3">Low OI</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Strong participation
              </td>

              <td class="border border-gray-700 p-3">
                Lower participation
              </td>
            </tr>
          </tbody>
        </table>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Open interest helps traders understand positioning and market sentiment.
        </div>
      `,
    },

    {
      id: "m7-11",

      title: "Volatility Basics",

      duration: "18 min",

      content: `
        <h2>Volatility Basics</h2>

        <p>
          Volatility measures how aggressively prices move.
        </p>

        <h3>High Volatility</h3>

        <ul>
          <li>Fast movement</li>
          <li>Large candles</li>
          <li>Higher emotional pressure</li>
        </ul>

        <h3>Low Volatility</h3>

        <ul>
          <li>Slow movement</li>
          <li>Smaller candles</li>
          <li>Calmer conditions</li>
        </ul>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Higher volatility increases both opportunity and risk.
        </div>
      `,
    },

    {
      id: "m7-12",

      title: "Advanced Chart Patterns",

      duration: "28 min",

      content: `
        <h2>Advanced Chart Patterns</h2>

        <h3>Head & Shoulders</h3>

        <p>
          Often signals bearish reversal.
        </p>

        <h3>Triangle Pattern</h3>

        <p>
          Represents price compression before breakout.
        </p>

        <h3>Flags</h3>

        <p>
          Short pauses during strong trends.
        </p>

        <h3>Cup & Handle</h3>

        <p>
          Bullish continuation structure.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Pattern</th>
              <th class="border border-gray-700 p-3">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Head & Shoulders</td>
              <td class="border border-gray-700 p-3">Bearish reversal</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Triangle</td>
              <td class="border border-gray-700 p-3">Breakout setup</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Flag</td>
              <td class="border border-gray-700 p-3">Trend continuation</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Cup & Handle</td>
              <td class="border border-gray-700 p-3">Bullish continuation</td>
            </tr>
          </tbody>
        </table>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Advanced patterns work best with:
          <br/>
          • Volume confirmation
          <br/>
          • Trend alignment
          <br/>
          • Market structure analysis
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
          "What does bullish market structure usually form?",

        options: [
          "Lower highs & lower lows",
          "Higher highs & higher lows",
          "Sideways candles only",
          "No movement",
        ],

        correctAnswer: 1,
      },

      {
        id: 2,

        question:
          "What is a false breakout?",

        options: [
          "Strong confirmed breakout",
          "Price breaking level and quickly reversing",
          "Long-term trend",
          "Market closure",
        ],

        correctAnswer: 1,
      },

      {
        id: 3,

        question:
          "What does Open Interest represent?",

        options: [
          "Broker taxes",
          "Company profits",
          "Active option contracts",
          "Stock ownership",
        ],

        correctAnswer: 2,
      },

      {
        id: 4,

        question:
          "Which chart pattern often signals bearish reversal?",

        options: [
          "Cup & Handle",
          "Flag",
          "Head & Shoulders",
          "Triangle",
        ],

        correctAnswer: 2,
      },
    ],
  },
};

export default module7;