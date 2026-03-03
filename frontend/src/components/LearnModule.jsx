import { useState } from "react";

const LearnModule = ({ title, children, index, onComplete, completed }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);

    if (!completed) {
      onComplete(index);
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl p-5 mb-6 border border-gray-800">
      <div
        onClick={handleToggle}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-gray-400">
          {completed ? "✓ Completed" : open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <div className="mt-4 text-gray-400 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export default LearnModule;