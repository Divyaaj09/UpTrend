// src/academy/modules/module3.js
const module3 = {
  id: 3,

  title: "3. Candlesticks Mastery",

  description:
    "Understand candlestick behavior, market psychology, bullish/bearish patterns, and price action analysis.",

  level: "Intermediate",

  estimatedTime: "6 Hours",

  chartInfo: {
    title: "Understanding Candlesticks",

    description:
      "Green candles show buyers are stronger. Red candles show sellers are stronger.",

    type: "candlestick",
  },

  visualLearning: true,
  chartPractice: true,
  replayMode: true,
  liveSimulation: true,
  skillTracking: true,

  topics: [
    {
      id: "m3-1",

      title: "What are Candlesticks?",

      duration: "18 min",

      content: `
        <h2>What are Candlesticks?</h2>

        <p>
          Candlesticks are visual representations of price movement during a specific timeframe.
        </p>

        <p>
          Every candlestick tells a story about:
        </p>

        <ul>
          <li>Buyer strength</li>
          <li>Seller strength</li>
          <li>Market emotion</li>
          <li>Momentum</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Candlesticks help traders understand market psychology visually.
        </div>

        <h3>Each Candle Shows:</h3>

        <ul>
          <li>Opening Price</li>
          <li>Closing Price</li>
          <li>Highest Price</li>
          <li>Lowest Price</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Beginner Insight:
          <br/>
          Candlesticks do not predict the future perfectly —
          they provide clues about market behavior.
        </div>
      `,
    },

    {
      id: "m3-2",

      title: "Understanding Candlestick Structure",

      duration: "20 min",

      content: `
        <h2>Understanding Candlestick Structure</h2>

        <p>
          Every candlestick contains two important parts:
        </p>

        <ul>
          <li>Body</li>
          <li>Wick (Shadow)</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
               High
                │
            Upper Wick
                │
            ┌────────┐
            │ Body   │
            └────────┘
                │
            Lower Wick
                │
               Low
        </div>

        <h3>Candle Body</h3>

        <p>
          The body represents the difference between opening and closing price.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Body Size</th>
              <th class="border border-gray-700 p-3">Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Large Body</td>
              <td class="border border-gray-700 p-3">Strong momentum</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Small Body</td>
              <td class="border border-gray-700 p-3">Uncertainty</td>
            </tr>
          </tbody>
        </table>

        <h3>Wicks</h3>

        <p>
          Wicks show the highest and lowest prices reached during the timeframe.
        </p>
      `,
    },

    {
      id: "m3-3",

      title: "Green vs Red Candles",

      duration: "15 min",

      content: `
        <h2>Green vs Red Candles</h2>

        <h3>Green Candle (Bullish Candle)</h3>

        <p>
          A green candle forms when the closing price is higher than the opening price.
        </p>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Buyers Strong
          <br/>
          ↑
        </div>

        <h3>Red Candle (Bearish Candle)</h3>

        <p>
          A red candle forms when the closing price is lower than the opening price.
        </p>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Sellers Strong
          <br/>
          ↓
        </div>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Green Candle</th>
              <th class="border border-gray-700 p-3">Red Candle</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Buyers stronger
              </td>

              <td class="border border-gray-700 p-3">
                Sellers stronger
              </td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">
                Bullish momentum
              </td>

              <td class="border border-gray-700 p-3">
                Bearish momentum
              </td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m3-4",

      title: "Body & Wick Psychology",

      duration: "20 min",

      content: `
        <h2>Body & Wick Psychology</h2>

        <h3>Large Body Candles</h3>

        <ul>
          <li>Strong momentum</li>
          <li>Aggressive buying/selling</li>
          <li>Strong confidence</li>
        </ul>

        <h3>Long Upper Wick</h3>

        <p>
          Sellers pushed prices back down after buyers tried pushing higher.
        </p>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Long Upper Wick
          <br/>
          = Seller Rejection
        </div>

        <h3>Long Lower Wick</h3>

        <p>
          Buyers pushed prices back up after sellers pushed lower.
        </p>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Long Lower Wick
          <br/>
          = Buyer Rejection
        </div>
      `,
    },

    {
      id: "m3-5",

      title: "Single Candlestick Patterns",

      duration: "30 min",

      content: `
        <h2>Single Candlestick Patterns</h2>

        <h3>Doji</h3>

        <p>
          Opening and closing prices are almost equal.
        </p>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Doji = Market Indecision
        </div>

        <h3>Hammer</h3>

        <p>
          Small body with long lower wick.
        </p>

        <p>
          Often signals bullish reversal.
        </p>

        <h3>Shooting Star</h3>

        <p>
          Small body with long upper wick.
        </p>

        <p>
          Often signals bearish reversal.
        </p>

        <h3>Marubozu</h3>

        <p>
          Large body with almost no wicks.
        </p>

        <p>
          Indicates very strong momentum.
        </p>

        <h3>Spinning Top</h3>

        <p>
          Small body with upper & lower wicks.
        </p>

        <p>
          Indicates uncertainty.
        </p>
      `,
    },

    {
      id: "m3-6",

      title: "Double Candlestick Patterns",

      duration: "25 min",

      content: `
        <h2>Double Candlestick Patterns</h2>

        <h3>Bullish Engulfing</h3>

        <p>
          Large green candle completely covers previous red candle.
        </p>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Buyers suddenly become stronger than sellers.
        </div>

        <h3>Bearish Engulfing</h3>

        <p>
          Large red candle completely covers previous green candle.
        </p>

        <h3>Harami Pattern</h3>

        <p>
          Small candle forms inside previous large candle.
        </p>

        <p>
          Indicates weakening momentum.
        </p>

        <h3>Tweezer Top & Bottom</h3>

        <p>
          Candles reject the same price level.
        </p>

        <p>
          May indicate strong reversals.
        </p>
      `,
    },

    {
      id: "m3-7",

      title: "Triple Candlestick Patterns",

      duration: "25 min",

      content: `
        <h2>Triple Candlestick Patterns</h2>

        <h3>Morning Star</h3>

        <p>
          Usually appears after downtrend.
        </p>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Big Red Candle
          <br/>
          ↓
          <br/>
          Small Candle
          <br/>
          ↓
          <br/>
          Big Green Candle
        </div>

        <h3>Evening Star</h3>

        <p>
          Usually appears after uptrend.
        </p>

        <p>
          Signals bearish reversal.
        </p>

        <h3>Three White Soldiers</h3>

        <p>
          Three consecutive strong green candles.
        </p>

        <p>
          Indicates strong bullish momentum.
        </p>
      `,
    },

    {
      id: "m3-8",

      title: "Bullish vs Bearish Signals",

      duration: "18 min",

      content: `
        <h2>Bullish vs Bearish Signals</h2>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Bullish Patterns</th>
              <th class="border border-gray-700 p-3">Bearish Patterns</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Hammer</td>
              <td class="border border-gray-700 p-3">Shooting Star</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Bullish Engulfing</td>
              <td class="border border-gray-700 p-3">Bearish Engulfing</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Morning Star</td>
              <td class="border border-gray-700 p-3">Evening Star</td>
            </tr>
          </tbody>
        </table>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Candlestick patterns work best when combined with:
          <br/>
          • Trend analysis
          <br/>
          • Support & resistance
          <br/>
          • Volume confirmation
        </div>
      `,
    },

    {
      id: "m3-9",

      title: "Fake Signals & Beginner Mistakes",

      duration: "16 min",

      content: `
        <h2>Fake Signals & Beginner Mistakes</h2>

        <p>
          Not every candlestick pattern works perfectly.
        </p>

        <h3>Common Beginner Mistakes</h3>

        <ul>
          <li>Trading based on one candle only</li>
          <li>Ignoring trend direction</li>
          <li>Ignoring support & resistance</li>
          <li>Entering emotionally</li>
        </ul>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Always wait for proper confirmation before entering trades.
        </div>
      `,
    },

    {
      id: "m3-10",

      title: "Candlestick Psychology",

      duration: "18 min",

      content: `
        <h2>Candlestick Psychology</h2>

        <p>
          Candlesticks represent trader emotions:
        </p>

        <ul>
          <li>Fear</li>
          <li>Greed</li>
          <li>Confidence</li>
          <li>Panic</li>
          <li>Uncertainty</li>
        </ul>

        <h3>Examples</h3>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Candlestick Behavior</th>
              <th class="border border-gray-700 p-3">Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Large bullish candle
              </td>

              <td class="border border-gray-700 p-3">
                Buyers confident
              </td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">
                Long upper wick
              </td>

              <td class="border border-gray-700 p-3">
                Sellers rejected higher prices
              </td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">
                Small body
              </td>

              <td class="border border-gray-700 p-3">
                Market uncertainty
              </td>
            </tr>
          </tbody>
        </table>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Professional traders try understanding WHY candles form —
          not just memorizing names.
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
          "What does a green candle indicate?",

        options: [
          "Seller dominance",
          "Buyer dominance",
          "No movement",
          "Market closure",
        ],

        correctAnswer: 1,
      },

      {
        id: 2,

        question:
          "Which pattern usually signals indecision?",

        options: [
          "Hammer",
          "Marubozu",
          "Doji",
          "Engulfing",
        ],

        correctAnswer: 2,
      },

      {
        id: 3,

        question:
          "A Hammer candle often indicates:",

        options: [
          "Strong bearish trend",
          "Bullish reversal",
          "Sideways market",
          "No momentum",
        ],

        correctAnswer: 1,
      },

      {
        id: 4,

        question:
          "What does a long upper wick usually indicate?",

        options: [
          "Strong buyers",
          "Seller rejection",
          "No volatility",
          "Market crash",
        ],

        correctAnswer: 1,
      },
    ],
  },
};

export default module3;