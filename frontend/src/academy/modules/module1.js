const module1 = {
  id: 1,

  title: "1. Basics of Trading & Stock Market Foundations",

  description:
    "Understand how trading works, how the stock market functions, and learn beginner-level trading concepts.",

  level: "Beginner",

  estimatedTime: "4.5 Hours",

  visualLearning: true,
  chartPractice: false,
  replayMode: false,
  liveSimulation: true,
  skillTracking: true,

  topics: [
    {
      id: "m1-1",

      title: "What is Trading?",

      duration: "15 min",

      content: `
        <h2>What is Trading?</h2>

        <p>
          Trading is the process of buying and selling financial assets such as stocks,
          commodities, currencies, or cryptocurrencies with the goal of earning profit
          from price movement.
        </p>

        <p>
          In stock market trading, traders buy shares when they believe prices may increase.
          Once prices rise, they sell those shares to earn profit from the difference between
          buying and selling price.
        </p>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Buy Shares
          <br/>
          ↓
          <br/>
          Price Changes
          <br/>
          ↓
          <br/>
          Sell Shares
          <br/>
          ↓
          <br/>
          Profit or Loss
        </div>

        <h3>Key Characteristics of Trading</h3>

        <ul>
          <li>Focuses on market price movement</li>
          <li>Involves active buying and selling</li>
          <li>Requires timing and analysis</li>
          <li>Can generate both profits and losses</li>
        </ul>

        <div class="bg-yellow-500/10 border border-yellow-500 rounded-2xl p-5 my-6">
          Important Insight:
          <br/>
          Trading is NOT easy money.
          Successful trading requires discipline, patience, and learning.
        </div>

        <h3>Quick Recap</h3>

        <ul>
          <li>Trading means buying and selling assets</li>
          <li>Traders profit from price movement</li>
          <li>Markets continuously change</li>
          <li>Trading includes both opportunity and risk</li>
        </ul>
      `,
    },

    {
      id: "m1-2",

      title: "Difference Between Trading & Investing",

      duration: "18 min",

      content: `
        <h2>Difference Between Trading & Investing</h2>

        <p>
          Many beginners confuse trading and investing because both involve buying stocks.
          However, their goals and timeframes are very different.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Trading</th>
              <th class="border border-gray-700 p-3">Investing</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Short-term approach</td>
              <td class="border border-gray-700 p-3">Long-term approach</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Frequent buying/selling</td>
              <td class="border border-gray-700 p-3">Hold for years</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Focus on price movement</td>
              <td class="border border-gray-700 p-3">Focus on company growth</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Requires active monitoring</td>
              <td class="border border-gray-700 p-3">Comparatively less active</td>
            </tr>
          </tbody>
        </table>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Trading:
          Buy → Sell Quickly → Profit/Loss
          <br/><br/>
          Investing:
          Buy → Hold for Years → Wealth Growth
        </div>

        <h3>Quick Recap</h3>

        <ul>
          <li>Trading focuses on short-term movement</li>
          <li>Investing focuses on long-term growth</li>
          <li>Traders analyze charts</li>
          <li>Investors analyze businesses</li>
        </ul>
      `,
    },

    {
      id: "m1-3",

      title: "What is the Stock Market?",

      duration: "15 min",

      content: `
        <h2>What is the Stock Market?</h2>

        <p>
          The stock market is a marketplace where buyers and sellers trade shares of companies.
        </p>

        <p>
          Whenever people buy or sell company shares, those transactions happen through the stock market.
        </p>

        <div class="bg-purple-500/10 border border-purple-500 rounded-2xl p-5 my-6">
          Companies
          <br/>
          ↓
          <br/>
          Shares Listed
          <br/>
          ↓
          <br/>
          People Buy & Sell
          <br/>
          ↓
          <br/>
          Prices Move Continuously
        </div>

        <h3>How the Stock Market Works</h3>

        <ul>
          <li>Companies list shares publicly</li>
          <li>Investors and traders buy those shares</li>
          <li>Prices move based on demand and supply</li>
          <li>Market sentiment affects prices</li>
        </ul>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Beginner Insight:
          <br/>
          Buying a stock means becoming a small owner of that company.
        </div>
      `,
    },

    {
      id: "m1-4",

      title: "What are Stocks & Shares?",

      duration: "12 min",

      content: `
        <h2>What are Stocks & Shares?</h2>

        <p>
          A stock or share represents a small ownership unit of a company.
        </p>

        <div class="bg-orange-500/10 border border-orange-500 rounded-2xl p-5 my-6">
          Company
          <br/>
          ↓
          <br/>
          Divided into Shares
          <br/>
          ↓
          <br/>
          People Buy Shares
          <br/>
          ↓
          <br/>
          Ownership Distributed
        </div>

        <h3>Simple Analogy</h3>

        <p>
          Imagine a pizza divided into slices.
          Each slice represents a share.
        </p>

        <h3>Why Share Prices Change</h3>

        <ul>
          <li>Company performance</li>
          <li>Demand & supply</li>
          <li>Investor confidence</li>
          <li>Market news</li>
        </ul>
      `,
    },

    {
      id: "m1-5",

      title: "NSE & BSE",

      duration: "10 min",

      content: `
        <h2>NSE & BSE</h2>

        <p>
          NSE and BSE are India's two major stock exchanges.
        </p>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">NSE</th>
              <th class="border border-gray-700 p-3">BSE</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">National Stock Exchange</td>
              <td class="border border-gray-700 p-3">Bombay Stock Exchange</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">High trading volume</td>
              <td class="border border-gray-700 p-3">Asia's oldest exchange</td>
            </tr>
          </tbody>
        </table>

        <div class="bg-green-500/10 border border-green-500 rounded-2xl p-5 my-6">
          Traders & Investors
          <br/>
          ↓
          <br/>
          NSE / BSE
          <br/>
          ↓
          <br/>
          Buy & Sell Shares
        </div>
      `,
    },

    {
      id: "m1-6",

      title: "Demat & Trading Accounts",

      duration: "15 min",

      content: `
        <h2>Demat & Trading Accounts</h2>

        <table class="w-full border border-gray-700 my-6">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-3">Demat Account</th>
              <th class="border border-gray-700 p-3">Trading Account</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="border border-gray-700 p-3">Stores shares</td>
              <td class="border border-gray-700 p-3">Executes trades</td>
            </tr>

            <tr>
              <td class="border border-gray-700 p-3">Like a digital locker</td>
              <td class="border border-gray-700 p-3">Like a trading app</td>
            </tr>
          </tbody>
        </table>

        <h3>Why Demat Accounts Matter</h3>

        <ul>
          <li>Stores shares digitally</li>
          <li>Removes paperwork</li>
          <li>Makes online trading easier</li>
        </ul>
      `,
    },

    {
      id: "m1-7",

      title: "Profit & Loss",

      duration: "12 min",

      content: `
        <h2>Profit & Loss</h2>

        <p>
          Profit happens when selling price becomes higher than buying price.
        </p>

        <p>
          Loss happens when selling price becomes lower than buying price.
        </p>

        <div class="bg-blue-500/10 border border-blue-500 rounded-2xl p-5 my-6">
          Profit = Selling Price - Buying Price
        </div>

        <h3>Example</h3>

        <p>
          Bought at ₹100
          <br/>
          Sold at ₹150
          <br/>
          Profit = ₹50
        </p>

        <h3>Loss Example</h3>

        <p>
          Bought at ₹100
          <br/>
          Sold at ₹70
          <br/>
          Loss = ₹30
        </p>
      `,
    },
  ],

  quiz: {
    passingScore: 85,

    questions: [
      {
        id: 1,

        question: "What does a Demat account store?",

        options: [
          "Cash",
          "Shares",
          "Gold",
          "Crypto",
        ],

        correctAnswer: 1,
      },

      {
        id: 2,

        question: "What is an IPO?",

        options: [
          "Market crash",
          "Company entering stock market",
          "Trading strategy",
          "Tax system",
        ],

        correctAnswer: 1,
      },

      {
        id: 3,

        question: "What happens in a bull market?",

        options: [
          "Prices fall",
          "Prices rise",
          "Market closes",
          "No trading",
        ],

        correctAnswer: 1,
      },

      {
        id: 4,

        question: "Trading mainly focuses on:",

        options: [
          "Long-term holding",
          "Price movement",
          "Tax calculation",
          "Savings account",
        ],

        correctAnswer: 1,
      },
    ],
  },
};

export default module1;