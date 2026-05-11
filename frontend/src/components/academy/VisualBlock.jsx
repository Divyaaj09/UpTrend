const VisualBlock = ({ visuals }) => {
  if (!visuals || visuals.length === 0) return null;

  return (
    <div className="space-y-6 mt-10">
      {visuals.map((visual, index) => {
        if (visual.type === "image") {
          return (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden"
            >
              <img
                src={visual.src}
                alt={visual.caption}
                className="w-full object-cover"
              />

              <div className="p-5">
                <p className="text-gray-400 text-sm">
                  {visual.caption}
                </p>
              </div>
            </div>
          );
        }

        if (visual.type === "card") {
          return (
            <div
              key={index}
              className="bg-blue-500/10 border border-blue-500 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {visual.title}
              </h3>

              <p className="text-gray-300">
                {visual.description}
              </p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default VisualBlock;