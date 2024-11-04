import { FaCog, FaBell } from 'react-icons/fa';
import { useState } from 'react';
import Avatar from "../assets/avi.png";

function NavBar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotificationPopup = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <nav className="h-20 w-full bg-white flex items-center justify-between shadow-md px-8 relative">
      <h1 className="text-2xl text-db-dark-heading font-extrabold">Dashboard</h1>
      <div className="w-1/3 mx-6">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-3 bg-dashboard-bg py-2 border rounded-xl focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex items-center space-x-6 relative">
        {/* Bell Icon */}
        <div className="relative">
          <FaBell 
            className="text-xl text-db-nav-icon cursor-pointer" 
            onClick={toggleNotificationPopup} 
          />
          {/* Notification Popup */}
          {isNotificationOpen && (
            <div 
              className="fixed top-0 right-0 w-screen max-w-md h-96 bg-white shadow-lg rounded-lg p-6 z-20"
              onClick={(e) => e.stopPropagation()} // Prevents closing on clicking inside the modal
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
                <button 
                  onClick={() => setIsNotificationOpen(false)} 
                  className="text-xl font-bold text-gray-600 cursor-pointer"
                >
                  X
                </button>
              </div>
              <ul className="space-y-3 text-gray-600 overflow-y-auto">
                <li className="text-sm">Admin Paid your salary for the month of may</li>
                <li className="text-sm">Admin approved your new account number</li>
                <li className="text-sm">Admin approved your new account number</li>
                {/* Add more messages here if needed */}
              </ul>
            </div>
          )}
        </div>

        {/* Settings Icon */}
        <FaCog className="text-xl text-db-nav-icon" />

        {/* Profile Avatar */}
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
