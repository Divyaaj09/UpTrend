const replayData = {
  1: [
    {
      id: 1,

      title: "Basic Price Movement",

      price: 100,

      question:
        "If more buyers enter the market, what may happen next?",

      options: [
        "Price Rises",
        "Price Falls",
        "Market Closes",
      ],

      correct: 0,

      explanation:
        "When buyers become stronger than sellers, prices usually rise.",
    },

    {
      id: 2,

      title: "Selling Pressure",

      price: 120,

      question:
        "If sellers dominate the market, what happens?",

      options: [
        "Price Rises",
        "Price Falls",
        "Nothing Changes",
      ],

      correct: 1,

      explanation:
        "Heavy selling pressure usually pushes prices lower.",
    },
  ],

  2: [
    {
      id: 1,

      title: "Uptrend Recognition",

      price: 150,

      question:
        "Higher highs and higher lows indicate?",

      options: [
        "Downtrend",
        "Uptrend",
        "Sideways Market",
      ],

      correct: 1,

      explanation:
        "Higher highs and higher lows are signs of an uptrend.",
    },
  ],

  3: [
    {
      id: 1,

      title: "Hammer Candle",

      price: 180,

      question:
        "What does a Hammer candle usually indicate?",

      options: [
        "Bullish Reversal",
        "Bearish Breakdown",
        "No Momentum",
      ],

      correct: 0,

      explanation:
        "A Hammer candle often indicates buyers are regaining control.",
    },
  ],
};

export default replayData;