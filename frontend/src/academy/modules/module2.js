// src/academy/modules/module2.js
const module2 = {
  id: 2,

  title: "2. Understanding Charts & Market Movement",

  description:
    "Learn how traders read charts, identify trends, understand support & resistance, and analyze market movement visually.",

  level: "Beginner",

  estimatedTime: "5 Hours",

  chartInfo: {
    title: "Support & Resistance Zones",

    description:
      "This chart demonstrates how price reacts near support and resistance levels.",

    type: "supportResistance",
  },

  visualLearning: true,
  chartPractice: true,
  replayMode: true,
  liveSimulation: true,
  skillTracking: true,

  topics: [
    {
      id: "m2-1",

      title: "What are Stock Charts?",

      duration: "15 min",

      content: `
        <h2>What are Stock Charts?</h2>

        <p>
          Stock charts are visual representations of a stock’s price movement
          over a specific period of time.
        </p>

        <p>
          Instead of reading large amounts of numerical data,
          traders use charts to understand:
        </p>

        <ul>
          <li>Whether prices are rising or falling</li>
          <li>Trend strength</li>
          <li>Buying & selling opportunities</li>
          <li>Market behavior</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Price Movement
          <br/>
          ↓
          <br/>
          Charts Organize Data
          <br/>
          ↓
          <br/>
          Traders Analyze
          <br/>
          ↓
          <br/>
          Decision Making
        </div>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Beginner Insight:
          <br/>
          Trading without charts is like driving without looking at the road.
        </div>
      `,
    },

    {
      id: "m2-2",

      title: "Why Charts Matter",

      duration: "14 min",

      content: `
        <h2>Why Charts Matter</h2>

        <p>
          Charts simplify complex market behavior into visual information.
        </p>

        <h3>Charts Help Traders:</h3>

        <ul>
          <li>Identify trends</li>
          <li>Spot opportunities</li>
          <li>Understand momentum</li>
          <li>Analyze reversals</li>
          <li>Improve timing</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Professional traders rely heavily on charts
          because charts reduce emotional decision-making.
        </div>
      `,
    },

    {
      id: "m2-3",

      title: "Types of Charts",

      duration: "22 min",

      content: `
        <h2>Types of Stock Charts</h2>

        <p>
          Different chart types display price movement differently.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Chart Type</th>
              <th class="border border-gray-700 p-3">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Line Chart</td>
              <td class="border border-gray-700 p-3">
                Simple long-term direction
              </td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Bar Chart</td>
              <td class="border border-gray-700 p-3">
                Detailed price information
              </td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Candlestick Chart</td>
              <td class="border border-gray-700 p-3">
                Market psychology & momentum
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Line Chart</h3>

        <p>
          Connects closing prices using a single line.
        </p>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
              /\\
             /  \\
          ___/    \\____
        </div>

        <h3>Candlestick Chart</h3>

        <p>
          Most popular chart type among traders because it clearly shows:
        </p>

        <ul>
          <li>Buyer strength</li>
          <li>Seller strength</li>
          <li>Momentum</li>
          <li>Market psychology</li>
        </ul>
      `,
    },

    {
      id: "m2-4",

      title: "Understanding Timeframes",

      duration: "18 min",

      content: `
        <h2>Understanding Timeframes</h2>

        <p>
          A timeframe represents the duration each candle covers.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Timeframe</th>
              <th class="border border-gray-700 p-3">Mostly Used By</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">1 Minute</td>
              <td class="border border-gray-700 p-3">Scalpers</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">5 Minute</td>
              <td class="border border-gray-700 p-3">Intraday Traders</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">15 Minute</td>
              <td class="border border-gray-700 p-3">Short-term Traders</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Daily</td>
              <td class="border border-gray-700 p-3">Swing Traders</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Weekly</td>
              <td class="border border-gray-700 p-3">Long-term Investors</td>
            </tr>
          </tbody>
        </table>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Beginner Insight:
          <br/>
          Larger timeframes are smoother and easier for beginners.
        </div>
      `,
    },

    {
      id: "m2-5",

      title: "What is Price Action?",

      duration: "18 min",

      content: `
        <h2>What is Price Action?</h2>

        <p>
          Price action means analyzing raw price movement without relying heavily on indicators.
        </p>

        <h3>Price Action Traders Focus On:</h3>

        <ul>
          <li>Chart structure</li>
          <li>Trend behavior</li>
          <li>Support & resistance</li>
          <li>Candle movement</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Most professional traders first learn price action
          before using advanced indicators.
        </div>
      `,
    },

    {
      id: "m2-6",

      title: "Support & Resistance",

      duration: "25 min",

      content: `
        <h2>Support & Resistance</h2>

        <p>
          Support and resistance are among the most important concepts in trading.
        </p>

        <h3>Support</h3>

        <p>
          Support is a price zone where buying pressure becomes strong enough
          to stop prices from falling further.
        </p>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Price Falls
          <br/>
          ↓
          <br/>
          SUPPORT
          <br/>
          ↓
          <br/>
          Price Bounces Up
        </div>

        <h3>Resistance</h3>

        <p>
          Resistance is a price zone where selling pressure becomes strong enough
          to stop prices from rising further.
        </p>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Price Rises
          <br/>
          ↓
          <br/>
          RESISTANCE
          <br/>
          ↓
          <br/>
          Price Falls
        </div>

        <h3>Why They Matter</h3>

        <ul>
          <li>Help identify entries</li>
          <li>Help identify exits</li>
          <li>Help manage risk</li>
          <li>Help identify reversals</li>
        </ul>
      `,
    },

    {
      id: "m2-7",

      title: "Trends & Trend Lines",

      duration: "22 min",

      content: `
        <h2>Trends & Trend Lines</h2>

        <h3>Uptrend</h3>

        <p>
          Prices form higher highs and higher lows.
        </p>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
             /\\
            /  \\
           /    \\
        __/______\\___
        </div>

        <h3>Downtrend</h3>

        <p>
          Prices form lower highs and lower lows.
        </p>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          \\____
               \\__
                  \\___
        </div>

        <h3>Sideways Market</h3>

        <p>
          Prices move within a range without clear direction.
        </p>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          ────────────
          ~~~~~~~~~~~~
          ────────────
        </div>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Beginner Insight:
          <br/>
          Trading becomes easier when market direction is clear.
        </div>
      `,
    },

    {
      id: "m2-8",

      title: "Market Momentum",

      duration: "15 min",

      content: `
        <h2>Market Momentum</h2>

        <p>
          Momentum refers to the strength and speed of price movement.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Weak Momentum</th>
              <th class="border border-gray-700 p-3">Strong Momentum</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Slow movement
              </td>

              <td class="border border-gray-700 p-3">
                Aggressive movement
              </td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">
                Uncertainty
              </td>

              <td class="border border-gray-700 p-3">
                Strong conviction
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Strong trends with strong momentum are usually more reliable.
        </p>
      `,
    },

    {
      id: "m2-9",

      title: "Chart Psychology",

      duration: "16 min",

      content: `
        <h2>Chart Psychology</h2>

        <p>
          Charts represent human emotions:
        </p>

        <ul>
          <li>Fear</li>
          <li>Greed</li>
          <li>Excitement</li>
          <li>Panic</li>
          <li>Confidence</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Fear → Prices Fall
          <br/><br/>
          Excitement → Prices Rise
        </div>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Understanding psychology is just as important as understanding charts.
        </div>
      `,
    },

    {
      id: "m2-10",

      title: "Reading Market Movement Visually",

      duration: "18 min",

      content: `
        <h2>Reading Market Movement Visually</h2>

        <p>
          Experienced traders begin understanding charts visually without relying heavily on calculations.
        </p>

        <h3>Charts Tell a Story Through:</h3>

        <ul>
          <li>Candles</li>
          <li>Momentum</li>
          <li>Trend direction</li>
          <li>Reactions at key levels</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Buyers Strong
          <br/>
          ↓
          <br/>
          Prices Rise
          <br/>
          ↓
          <br/>
          Resistance Reached
          <br/>
          ↓
          <br/>
          Sellers Become Active
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
          "Which chart type is most commonly used by traders?",

        options: [
          "Pie Chart",
          "Candlestick Chart",
          "Flowchart",
          "Histogram",
        ],

        correctAnswer: 1,
      },

      {
        id: 2,

        question:
          "What does support represent?",

        options: [
          "Selling pressure",
          "Buying pressure",
          "Broker fees",
          "Market closure",
        ],

        correctAnswer: 1,
      },

      {
        id: 3,

        question:
          "An uptrend forms when:",

        options: [
          "Prices make lower lows",
          "Prices stay flat",
          "Prices make higher highs and higher lows",
          "Prices stop moving",
        ],

        correctAnswer: 2,
      },

      {
        id: 4,

        question:
          "Momentum represents:",

        options: [
          "Company profit",
          "Taxes",
          "Speed and strength of movement",
          "Broker fees",
        ],

        correctAnswer: 2,
      },
    ],
  },
};

export default module2;