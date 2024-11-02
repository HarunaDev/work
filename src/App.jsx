import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Register from "./pages/recruitment/Register";
import DashBoard from "./pages/DashBoard";
import Onboarding from "./pages/Onboarding";
import Payment from "./pages/payment/Payment";
import Attendance from "./pages/attendance/Attendance";
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
          <Route path="recruitment" element={<Onboarding />} />
          <Route path="payment" element={<Payment />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
