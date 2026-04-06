import { useTrading } from "../context/TradingContext";

const Journal = () => {
  const { trades = [] } = useTrading();

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Trade Journal 📓
      </h1>

      {trades.length === 0 ? (
        <p className="text-gray-400">
          No trades recorded yet.
        </p>
      ) : (
        <div className="space-y-4">
          {trades.map((t, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded"
            >
              <p>Asset: {t.asset}</p>
              <p>Type: {t.type}</p>
              <p>
                P/L:{" "}
                <span
                  className={
                    t.pl >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  ₹{t.pl}
                </span>
              </p>

              <p className="mt-2 text-gray-400">
                Emotion: {t.journal?.emotion || "N/A"}
              </p>

              <p className="text-gray-400">
                Note: {t.journal?.note || "No notes"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Journal;