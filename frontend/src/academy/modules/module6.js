// src/academy/modules/module6.js

const module6 = {
  id: 6,

  title: "6. Risk Management & Trading Psychology",

  description:
    "Learn emotional discipline, capital protection, stop losses, position sizing, and professional risk management concepts.",

  level: "Advanced",

  estimatedTime: "6 Hours",

  chartInfo: {
    title: "Volume Analysis",

    description:
      "Volume spikes help confirm strong market participation.",

    type: "volume",
  },

  visualLearning: true,
  chartPractice: true,
  replayMode: true,
  liveSimulation: true,
  skillTracking: true,

  topics: [
    {
      id: "m6-1",

      title: "Why Traders Lose Money",

      duration: "18 min",

      content: `
        <h2>Why Traders Lose Money</h2>

        <p>
          Most beginners do not lose because of bad indicators.
          They lose because of:
        </p>

        <ul>
          <li>Poor discipline</li>
          <li>No risk management</li>
          <li>Emotional decisions</li>
          <li>Overtrading</li>
          <li>Fear & greed</li>
        </ul>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Knowledge alone does not create successful traders.
          <br/><br/>
          Discipline and emotional control matter more.
        </div>

        <h3>Common Beginner Mistakes</h3>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Mistake</th>
              <th class="border border-gray-700 p-3">Result</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">No stop loss</td>
              <td class="border border-gray-700 p-3">Large losses</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Emotional entries</td>
              <td class="border border-gray-700 p-3">Poor decisions</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Overtrading</td>
              <td class="border border-gray-700 p-3">Mental exhaustion</td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m6-2",

      title: "Importance of Risk Management",

      duration: "22 min",

      content: `
        <h2>Importance of Risk Management</h2>

        <p>
          Risk management protects traders from losing too much money.
        </p>

        <p>
          Professional traders focus on:
        </p>

        <ul>
          <li>Protecting capital first</li>
          <li>Managing losses</li>
          <li>Surviving long-term</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Capital Protection
          <br/>
          ↓
          <br/>
          Long-Term Survival
          <br/>
          ↓
          <br/>
          Trading Consistency
        </div>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Successful traders are not people who never lose.
          <br/><br/>
          They are people who control losses professionally.
        </div>
      `,
    },

    {
      id: "m6-3",

      title: "What is Stop Loss?",

      duration: "20 min",

      content: `
        <h2>What is Stop Loss?</h2>

        <p>
          A stop loss automatically exits a trade
          when price reaches a certain level.
        </p>

        <h3>Purpose of Stop Loss</h3>

        <ul>
          <li>Limit losses</li>
          <li>Protect capital</li>
          <li>Reduce emotional decisions</li>
        </ul>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Entry Price → Price Falls → Stop Loss Activated
        </div>

        <h3>Example</h3>

        <p>
          Buy at ₹100
          <br/>
          Stop Loss at ₹95
        </p>

        <p>
          Maximum loss:
          ₹5 per share
        </p>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Professional traders ALWAYS define risk before entering trades.
        </div>
      `,
    },

    {
      id: "m6-4",

      title: "Target Price & Risk Reward",

      duration: "22 min",

      content: `
        <h2>Target Price & Risk Reward</h2>

        <p>
          A target price is the planned profit-taking level.
        </p>

        <h3>Risk Reward Ratio</h3>

        <p>
          Risk reward compares possible loss with possible gain.
        </p>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Risk ₹100
          <br/>
          Reward ₹300
          <br/>
          Ratio = 1:3
        </div>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Bad Setup</th>
              <th class="border border-gray-700 p-3">Good Setup</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Risk 500 to make 100
              </td>

              <td class="border border-gray-700 p-3">
                Risk 100 to make 300
              </td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m6-5",

      title: "Position Sizing",

      duration: "18 min",

      content: `
        <h2>Position Sizing</h2>

        <p>
          Position sizing determines how much money
          should be used in a trade.
        </p>

        <h3>Why It Matters</h3>

        <ul>
          <li>Controls overall risk</li>
          <li>Protects account balance</li>
          <li>Reduces emotional pressure</li>
        </ul>

        <h3>Professional Rule</h3>

        <p>
          Many traders risk only 1%–2% of capital per trade.
        </p>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Small Position Size
          <br/>
          ↓
          <br/>
          Smaller Emotional Pressure
        </div>
      `,
    },

    {
      id: "m6-6",

      title: "Capital Management",

      duration: "18 min",

      content: `
        <h2>Capital Management</h2>

        <p>
          Capital management means protecting overall trading capital.
        </p>

        <h3>Good Capital Management Includes</h3>

        <ul>
          <li>Avoiding oversized trades</li>
          <li>Using stop losses</li>
          <li>Limiting daily losses</li>
          <li>Controlling risk exposure</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Protecting capital is more important than chasing profits.
        </div>
      `,
    },

    {
      id: "m6-7",

      title: "Emotional Trading",

      duration: "22 min",

      content: `
        <h2>Emotional Trading</h2>

        <p>
          Emotional trading happens when traders make decisions
          based on feelings instead of structured analysis.
        </p>

        <h3>Common Emotional Triggers</h3>

        <ul>
          <li>Fear</li>
          <li>Greed</li>
          <li>Excitement</li>
          <li>Panic</li>
        </ul>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Emotional decisions often lead to impulsive trades.
        </div>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Professionals follow systems —
          not emotions.
        </div>
      `,
    },

    {
      id: "m6-8",

      title: "Fear & Greed",

      duration: "20 min",

      content: `
        <h2>Fear & Greed</h2>

        <h3>Fear</h3>

        <p>
          Fear causes traders to:
        </p>

        <ul>
          <li>Exit too early</li>
          <li>Avoid good opportunities</li>
          <li>Panic sell</li>
        </ul>

        <h3>Greed</h3>

        <p>
          Greed causes traders to:
        </p>

        <ul>
          <li>Overtrade</li>
          <li>Take excessive risk</li>
          <li>Ignore exits</li>
        </ul>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Fear</th>
              <th class="border border-gray-700 p-3">Greed</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">
                Panic selling
              </td>

              <td class="border border-gray-700 p-3">
                Overconfidence
              </td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">
                Early exits
              </td>

              <td class="border border-gray-700 p-3">
                Holding too long
              </td>
            </tr>
          </tbody>
        </table>
      `,
    },

    {
      id: "m6-9",

      title: "Revenge Trading & FOMO",

      duration: "22 min",

      content: `
        <h2>Revenge Trading & FOMO</h2>

        <h3>Revenge Trading</h3>

        <p>
          Revenge trading happens when traders try recovering losses emotionally.
        </p>

        <h3>FOMO</h3>

        <p>
          FOMO means:
          Fear Of Missing Out.
        </p>

        <p>
          Traders enter impulsively because they fear missing opportunities.
        </p>

        <div class="bg-red-500/10 border border-red-500 rounded-2xl p-5 my-6">
          Revenge trading and FOMO often destroy discipline.
        </div>

        <h3>Correct Approach</h3>

        <ul>
          <li>Wait patiently</li>
          <li>Follow setups only</li>
          <li>Accept losses calmly</li>
        </ul>
      `,
    },

    {
      id: "m6-10",

      title: "Discipline & Patience",

      duration: "18 min",

      content: `
        <h2>Discipline & Patience</h2>

        <p>
          Discipline means following trading rules consistently.
        </p>

        <p>
          Patience means waiting for quality opportunities.
        </p>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Discipline
          <br/>
          ↓
          <br/>
          Better Decisions
          <br/>
          ↓
          <br/>
          Long-Term Consistency
        </div>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Professional traders are patient observers —
          not emotional gamblers.
        </div>
      `,
    },

    {
      id: "m6-11",

      title: "Building a Trader Mindset",

      duration: "20 min",

      content: `
        <h2>Building a Trader Mindset</h2>

        <p>
          A professional trader mindset focuses on:
        </p>

        <ul>
          <li>Consistency</li>
          <li>Discipline</li>
          <li>Risk management</li>
          <li>Continuous learning</li>
        </ul>

        <h3>Professional Thinking</h3>

        <ul>
          <li>Losses are normal</li>
          <li>No strategy wins always</li>
          <li>Capital protection matters most</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Trading is a long-term skill-building journey.
        </div>
      `,
    },

    {
      id: "m6-12",

      title: "Trading Journal & Habit Building",

      duration: "22 min",

      content: `
        <h2>Trading Journal & Habit Building</h2>

        <p>
          A trading journal helps traders track:
        </p>

        <ul>
          <li>Entries & exits</li>
          <li>Profit & loss</li>
          <li>Mistakes</li>
          <li>Emotional behavior</li>
        </ul>

        <h3>Why Journaling Matters</h3>

        <ul>
          <li>Improves discipline</li>
          <li>Tracks progress</li>
          <li>Identifies repeated mistakes</li>
        </ul>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Track Trades
          <br/>
          ↓
          <br/>
          Learn Mistakes
          <br/>
          ↓
          <br/>
          Improve Decisions
        </div>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Small daily habits create long-term trading consistency.
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
          "What is the purpose of a stop loss?",

        options: [
          "Increase emotions",
          "Limit losses",
          "Guarantee profits",
          "Increase taxes",
        ],

        correctAnswer: 1,
      },

      {
        id: 2,

        question:
          "What does FOMO stand for?",

        options: [
          "Fear Of Missing Out",
          "Fast Order Market Operation",
          "Fixed Opportunity Market Order",
          "Future Option Market Output",
        ],

        correctAnswer: 0,
      },

      {
        id: 3,

        question:
          "Professional traders focus primarily on:",

        options: [
          "Revenge trading",
          "Capital protection",
          "Random entries",
          "Overtrading",
        ],

        correctAnswer: 1,
      },

      {
        id: 4,

        question:
          "Why is journaling important?",

        options: [
          "Entertainment",
          "Tracking improvement & mistakes",
          "Increasing emotions",
          "Avoiding charts",
        ],

        correctAnswer: 1,
      },
    ],
  },
};

export default module6;