// DashBoard.js
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function DashBoard() {
  return (
    <>
      <SideBar />
      <Outlet /> {/* Nested dashboard routes will render here */}
    </>
  );
}

export default DashBoard;
