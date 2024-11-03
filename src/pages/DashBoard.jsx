import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

function DashBoard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 h-full bg-white shadow-lg">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Navbar at the top of main content */}
        <NavBar />

        {/* Page Content below the NavBar */}
        <div className="bg-dashboard-bg flex-1 py-12 px-16 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
