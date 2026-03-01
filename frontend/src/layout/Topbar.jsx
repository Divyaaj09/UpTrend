const Topbar = () => {
  return (
    <div className="bg-cardBg p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-400">Welcome, User</span>
        <div className="w-8 h-8 bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default Topbar;