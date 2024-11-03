import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHelpCircle, FiSettings } from "react-icons/fi"; // Import react-icons
import HomeSvg from "../assets/svg/home-svg.svg";
import RecruitmentSvg from "../assets/svg/recruitment-svg.svg";
import AttendanceSvg from "../assets/svg/attendance-svg.svg";
import PaymentSvg from "../assets/svg/payment-svg.svg";
import HelpSvg from "../assets/svg/help-svg.svg";
import SideBarLogo from "../assets/PHC-logo_1.png";

const SIDEBAR_ITEMS = [
  { name: "Home", icon: HomeSvg, url: "/home" },
  { name: "Recruitment", icon: RecruitmentSvg, url: "/recruitment" },
  { name: "Attendance", icon: AttendanceSvg, url: "/attendance" },
  { name: "Payment", icon: PaymentSvg, url: "/payment" },
  { name: "Help", icon: HelpSvg, url: "/help" },
];

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsCollapsed(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-white h-full ${isCollapsed ? 'w-16' : 'w-1/5'} fixed flex flex-col justify-between px-4 pt-6 pb-10 shadow-lg transition-all duration-300`}
    >
      {/* Logo */}
      <img src={SideBarLogo} alt="Logo" className={`mb-8 ${isCollapsed ? 'hidden' : 'block'}`} />

      {/* Sidebar List */}
      <ul className="space-y-2 w-full font-semibold">
        {SIDEBAR_ITEMS.map((item) => (
          <li key={item.name} className="flex justify-center items-center">
            <Link
              to={item.url}
              className={`flex items-center w-full px-4 py-3 rounded transition-colors duration-300 ${
                location.pathname === item.url ? 'text-secondary-color' : 'text-gray-600'
              } hover:bg-gray-100`}
            >
              <img
                src={item.icon}
                alt={`${item.name} Icon`}
                className={`w-6 h-6 ${
                  location.pathname === item.url ? 'text-secondary-color' : 'text-gray-600'
                }`}
              />
              <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Bottom Links */}
      <div className="space-y-4 mt-auto">
        {/* Get Help Link */}
        <Link
          to="/help"
          className="flex items-center text-gray-600 hover:text-secondary-color transition-colors duration-300"
        >
          <FiHelpCircle
            className={`w-6 h-6 ${isCollapsed ? 'm-auto' : 'mr-2'} ${
              location.pathname === '/help' ? 'text-secondary-color' : 'text-gray-600'
            }`}
          />
          <span className={`${isCollapsed ? 'hidden' : 'block'} ml-2`}>Get Help</span>
        </Link>

        {/* Settings Link */}
        <Link
          to="/settings"
          className="flex items-center text-gray-600 hover:text-secondary-color transition-colors duration-300"
        >
          <FiSettings
            className={`w-6 h-6 ${isCollapsed ? 'm-auto' : 'mr-2'} ${
              location.pathname === '/settings' ? 'text-secondary-color' : 'text-gray-600'
            }`}
          />
          <span className={`${isCollapsed ? 'hidden' : 'block'} ml-2`}>Settings</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
