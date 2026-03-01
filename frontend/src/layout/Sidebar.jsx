import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-sidebarBg min-h-screen p-6 hidden md:block">
      <h2 className="text-2xl font-bold text-primary mb-10">UpTrend</h2>

      <nav className="space-y-4">
        <NavLink
          to="/"
          className="block px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/wallet"
          className="block px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
        >
          Wallet
        </NavLink>

        <NavLink
          to="/transactions"
          className="block px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
        >
          Transactions
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;