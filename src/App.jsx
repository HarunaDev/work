import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Register from "./pages/recruitment/Register";
import DashBoard from "./pages/DashBoard";
import Onboarding from "./pages/recruitment/Onboarding";
import ProfileInfo from "./pages/recruitment/ProfileInfo";
import UploadCV from "./pages/recruitment/UploadCV";
import AwaitingApproval from "./pages/recruitment/AwaitingApproval";
import Home from "./pages/home/Home";
import Payment from "./pages/payment/Payment";
import Attendance from "./pages/attendance/Attendance";
import ClockIn from "./pages/attendance/ClockIn";
import ClockOut from "./pages/attendance/ClockOut";
import Help from "./pages/help/Help";
import OTPVerification from "./pages/auth/OTPVerification";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />

        {/* Dashboard routes */}
        <Route path="/" element={<DashBoard />}>
          <Route path="home" element={<Home />} />

          <Route path="recruitment" element={<Onboarding />}> 
            <Route index element={<ProfileInfo />} /> {/* Default to ProfileInfo */}
            <Route path="profile-info" element={<ProfileInfo />} />
            <Route path="upload-cv" element={<UploadCV />} />
            <Route path="awaiting-approval" element={<AwaitingApproval />} />
          </Route>

          <Route path="payment" element={<Payment />} />

          <Route path="attendance" element={<Attendance />} /> 
          <Route path="attendance/clock-in" element={<ClockIn />}/>
          <Route path="attendance/clock-out" element={<ClockOut />}/>
          

          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
