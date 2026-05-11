import { useState } from "react";

const paths = [
  "Beginner Trader",
  "Intraday Trader",
  "Swing Trader",
  "Long-Term Investor",
];

const LearningPaths = () => {
  const [selected, setSelected] = useState(
    localStorage.getItem("learning_path") || ""
  );

  const choosePath = (path) => {
    setSelected(path);

    localStorage.setItem("learning_path", path);
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">
        Personalized Learning Paths
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {paths.map((path, index) => (
          <button
            key={index}
            onClick={() => choosePath(path)}
            className={`p-6 rounded-3xl border transition text-left ${
              selected === path
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-800 bg-gray-900"
            }`}
          >
            <h3 className="text-xl font-semibold">
              {path}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;