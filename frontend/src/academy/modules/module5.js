// src/academy/modules/module5.js

const module5 = {
  id: 5,

  title: "5. Technical Indicators & Smart Analysis",

  description:
    "Learn how traders use indicators like RSI, MACD, Moving Averages, VWAP and Bollinger Bands for smart market analysis.",

  level: "Intermediate",

  estimatedTime: "6 Hours",

  chartInfo: {
    title: "RSI & Indicator Analysis",

    description:
      "This chart demonstrates RSI movement and momentum analysis.",

    type: "rsi",
  },

  visualLearning: true,
  chartPractice: true,
  replayMode: true,
  liveSimulation: true,
  skillTracking: true,

  topics: [
    {
      id: "m5-1",

      title: "What are Technical Indicators?",

      duration: "15 min",

      content: `
        <h2>What are Technical Indicators?</h2>

        <p>
          Technical indicators are mathematical tools traders use
          to analyze market behavior and price movement.
        </p>

        <h3>Indicators Help Traders:</h3>

        <ul>
          <li>Identify trends</li>
          <li>Measure momentum</li>
          <li>Find entry & exit points</li>
          <li>Confirm trade setups</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Price Data
          <br/>
          ↓
          <br/>
          Indicator Calculations
          <br/>
          ↓
          <br/>
          Market Insights
        </div>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Important Insight:
          <br/>
          Indicators support decision-making —
          they should not be used blindly.
        </div>
      `,
    },

    {
      id: "m5-2",

      title: "Moving Averages",

      duration: "25 min",

      content: `
        <h2>Moving Averages</h2>

        <p>
          Moving averages smooth price movement
          and help traders identify trends.
        </p>

        <h3>Main Types</h3>

        <ul>
          <li>Simple Moving Average (SMA)</li>
          <li>Exponential Moving Average (EMA)</li>
        </ul>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">SMA</th>
              <th class="border border-gray-700 p-3">EMA</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Slower response
              </td>

              <td class="border border-gray-700 p-3">
                Faster response
              </td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">
                Smooth trend
              </td>

              <td class="border border-gray-700 p-3">
                More sensitive
              </td>
            </tr>
          </tbody>
        </table>

        <h3>How Traders Use Them</h3>

        <ul>
          <li>Price above MA = bullish trend</li>
          <li>Price below MA = bearish trend</li>
          <li>Crossovers may signal trend changes</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Moving averages help remove market noise.
        </div>
      `,
    },

    {
      id: "m5-3",

      title: "RSI (Relative Strength Index)",

      duration: "22 min",

      content: `
        <h2>RSI (Relative Strength Index)</h2>

        <p>
          RSI measures momentum and helps identify
          overbought or oversold conditions.
        </p>

        <h3>RSI Range</h3>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">RSI Level</th>
              <th class="border border-gray-700 p-3">Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Above 70</td>
              <td class="border border-gray-700 p-3">Overbought</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Below 30</td>
              <td class="border border-gray-700 p-3">Oversold</td>
            </tr>
          </tbody>
        </table>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Overbought does NOT always mean immediate reversal.
        </div>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          RSI helps traders understand momentum strength.
        </div>
      `,
    },

    {
      id: "m5-4",

      title: "MACD Indicator",

      duration: "25 min",

      content: `
        <h2>MACD Indicator</h2>

        <p>
          MACD stands for:
          <br/>
          Moving Average Convergence Divergence
        </p>

        <p>
          MACD helps traders analyze:
        </p>

        <ul>
          <li>Trend direction</li>
          <li>Momentum changes</li>
          <li>Possible reversals</li>
        </ul>

        <h3>Main Components</h3>

        <ul>
          <li>MACD Line</li>
          <li>Signal Line</li>
          <li>Histogram</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          MACD Crossovers
          <br/>
          ↓
          <br/>
          Momentum Shift Signals
        </div>

        <h3>Common Interpretation</h3>

        <ul>
          <li>MACD above Signal Line = bullish momentum</li>
          <li>MACD below Signal Line = bearish momentum</li>
        </ul>
      `,
    },

    {
      id: "m5-5",

      title: "VWAP Indicator",

      duration: "18 min",

      content: `
        <h2>VWAP (Volume Weighted Average Price)</h2>

        <p>
          VWAP calculates the average price weighted by trading volume.
        </p>

        <h3>Why Traders Use VWAP</h3>

        <ul>
          <li>Identify fair price</li>
          <li>Understand institutional activity</li>
          <li>Analyze trend strength</li>
        </ul>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Price Above VWAP</th>
              <th class="border border-gray-700 p-3">Price Below VWAP</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Bullish bias</td>
              <td class="border border-gray-700 p-3">Bearish bias</td>
            </tr>
          </tbody>
        </table>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Many institutional traders monitor VWAP carefully.
        </div>
      `,
    },

    {
      id: "m5-6",

      title: "Bollinger Bands",

      duration: "22 min",

      content: `
        <h2>Bollinger Bands</h2>

        <p>
          Bollinger Bands help traders understand:
        </p>

        <ul>
          <li>Volatility</li>
          <li>Overextended movement</li>
          <li>Potential reversals</li>
        </ul>

        <h3>Structure</h3>

        <ul>
          <li>Upper Band</li>
          <li>Middle Band</li>
          <li>Lower Band</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Wide Bands
          <br/>
          = High Volatility
          <br/><br/>
          Narrow Bands
          <br/>
          = Low Volatility
        </div>

        <h3>Basic Understanding</h3>

        <ul>
          <li>Price near upper band → strong buying</li>
          <li>Price near lower band → strong selling</li>
        </ul>
      `,
    },

    {
      id: "m5-7",

      title: "Volume Indicators",

      duration: "18 min",

      content: `
        <h2>Volume Indicators</h2>

        <p>
          Volume indicators help traders analyze
          participation and market strength.
        </p>

        <h3>Why Volume Matters</h3>

        <ul>
          <li>Confirms movement strength</li>
          <li>Shows market participation</li>
          <li>Helps validate breakouts</li>
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
              <td class="border border-gray-700 p-3">Weak conviction</td>
              <td class="border border-gray-700 p-3">Strong conviction</td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m5-8",

      title: "Trend vs Momentum Indicators",

      duration: "20 min",

      content: `
        <h2>Trend vs Momentum Indicators</h2>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Trend Indicators</th>
              <th class="border border-gray-700 p-3">Momentum Indicators</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Moving Average</td>
              <td class="border border-gray-700 p-3">RSI</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">VWAP</td>
              <td class="border border-gray-700 p-3">MACD</td>
            </tr>
          </tbody>
        </table>

        <h3>Difference</h3>

        <ul>
          <li>Trend indicators identify direction</li>
          <li>Momentum indicators identify movement strength</li>
        </ul>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Professional traders often combine both types together.
        </div>
      `,
    },

    {
      id: "m5-9",

      title: "Combining Indicators Correctly",

      duration: "22 min",

      content: `
        <h2>Combining Indicators Correctly</h2>

        <p>
          Using too many indicators creates confusion.
        </p>

        <h3>Smart Combination Example</h3>

        <ul>
          <li>Trend → Moving Average</li>
          <li>Momentum → RSI</li>
          <li>Confirmation → Volume</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Trend + Momentum + Volume
          <br/>
          = Stronger Confirmation
        </div>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Beginner Mistake:
          <br/>
          Using 10 indicators together creates analysis paralysis.
        </div>
      `,
    },

    {
      id: "m5-10",

      title: "Multi-Timeframe Analysis",

      duration: "20 min",

      content: `
        <h2>Multi-Timeframe Analysis</h2>

        <p>
          Professional traders analyze multiple timeframes
          before entering trades.
        </p>

        <h3>Example</h3>

        <ul>
          <li>Daily Chart → Main trend</li>
          <li>15-Min Chart → Entry timing</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Higher Timeframe
          <br/>
          ↓
          <br/>
          Market Direction
          <br/><br/>
          Lower Timeframe
          <br/>
          ↓
          <br/>
          Entry Precision
        </div>

        <h3>Why It Matters</h3>

        <ul>
          <li>Improves trade quality</li>
          <li>Improves confidence</li>
          <li>Reduces emotional decisions</li>
        </ul>
      `,
    },

    {
      id: "m5-11",

      title: "Screeners & Scanner Tools",

      duration: "18 min",

      content: `
        <h2>Screeners & Scanner Tools</h2>

        <p>
          Screeners help traders filter stocks
          based on specific conditions.
        </p>

        <h3>Examples</h3>

        <ul>
          <li>High Volume Stocks</li>
          <li>Stocks above Moving Average</li>
          <li>Breakout Stocks</li>
        </ul>

        <h3>Popular Scanner Platforms</h3>

        <ul>
          <li>TradingView</li>
          <li>Chartink</li>
          <li>Finviz</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Screeners save time by filtering opportunities automatically.
        </div>
      `,
    },

    {
      id: "m5-12",

      title: "Confirmation Trading",

      duration: "18 min",

      content: `
        <h2>Confirmation Trading</h2>

        <p>
          Confirmation trading means waiting for multiple signals
          before entering trades.
        </p>

        <h3>Examples of Confirmation</h3>

        <ul>
          <li>Breakout + Volume</li>
          <li>RSI + Trend Alignment</li>
          <li>Support + Bullish Candle</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          More confirmation
          <br/>
          = Higher probability setup
        </div>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Professional traders wait patiently for quality confirmations.
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
          "Which indicator measures momentum?",

        options: [
          "RSI",
          "Volume",
          "VWAP",
          "Moving Average",
        ],

        correctAnswer: 0,
      },

      {
        id: 2,

        question:
          "What does RSI above 70 usually indicate?",

        options: [
          "Oversold",
          "Market closed",
          "Overbought",
          "No momentum",
        ],

        correctAnswer: 2,
      },

      {
        id: 3,

        question:
          "Which indicator is commonly used for trend analysis?",

        options: [
          "Moving Average",
          "RSI",
          "MACD Histogram",
          "Volume Only",
        ],

        correctAnswer: 0,
      },

      {
        id: 4,

        question:
          "Why do traders use multiple confirmations?",

        options: [
          "To confuse themselves",
          "To increase probability of good setups",
          "To avoid charts",
          "To remove stop losses",
        ],

        correctAnswer: 1,
      },
    ],
  },
};

export default module5;