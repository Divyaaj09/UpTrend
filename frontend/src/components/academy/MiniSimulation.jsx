import { useState } from "react";

const MiniSimulation = ({ simulation }) => {
  const [selected, setSelected] = useState(null);

  if (!simulation) return null;

  return (
    <div className="mt-10 bg-gray-900 border border-gray-800 rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-4">
        Mini Simulation
      </h2>

      <p className="text-gray-400 mb-8">
        {simulation.question}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {simulation.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelected(option)}
            className={`p-4 rounded-2xl border transition ${
              selected === option
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-700 hover:border-gray-500"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-8 p-5 rounded-2xl bg-gray-800">
          <p className="text-green-400 font-medium">
            Selected:
          </p>

          <p className="mt-2 text-gray-300">
            {selected}
          </p>
        </div>
      )}
    </div>
  );
};

export default MiniSimulation;