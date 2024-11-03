import { FaCog, FaBell } from 'react-icons/fa';
import Avatar from "../assets/avi.png"

function NavBar() {
  return (
    <nav className="h-20 w-full bg-white flex items-center justify-between shadow-md px-8">
      <h1 className="text-2xl text-db-dark-heading font-extrabold">Dashboard</h1>
      <div className="w-1/3 mx-6">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-3 bg-dashboard-bg py-2 border rounded-xl focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-xl text-db-nav-icon" />
        <FaCog className="text-xl text-db-nav-icon" />
        <img
          src={Avatar}
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </nav>
  );
}

export default NavBar;
