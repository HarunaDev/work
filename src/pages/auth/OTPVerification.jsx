import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthMedia from "../../components/AuthMedia";
import LandingLogo from "../../assets/PHC-logo_1.png";

function OTPVerification() {
  const [timer, setTimer] = useState(120); // 2 minutes = 120 seconds
  const inputRefs = useRef([]); // Array of refs for each input field
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prevTimer) => prevTimer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      // Focus on the next input if current input has a single digit
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1].focus();
    }
  };

  const resendCode = () => {
    setTimer(120); // Reset timer
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate('/recruitment'); // Navigate to the recruitment page
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-auth-bg w-full md:w-3/5 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-12 h-2/3 w-full max-w-lg p-6">
          <img src={LandingLogo} alt="Logo" className="mx-auto lg:w-auto md:w-64 sm:w-64 mb-4" />
          <h1 className="text-xl md:text-4xl text-dark-heading font-bold text-center mb-6">OTP Verification</h1>
          <p className="text-gray-600 text-center">
            We sent a code to <span className="font-semibold">your email</span>
          </p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-4">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 border border-gray-300 text-center text-xl rounded-md focus:outline-none"
                  ref={(el) => (inputRefs.current[i] = el)} // Set ref for each input
                  onChange={(e) => handleInputChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
              ))}
            </div>
            
            <div className="flex justify-center items-center gap-4">
              <p className="text-secondary-color">({formatTime()})</p>
              <p className="text-gray-500 cursor-pointer" onClick={resendCode}>
                Didn't get a code? Resend
              </p>
            </div>

            <button
              type="submit"
              className="bg-primary-color text-white px-4 py-2 rounded w-80"
            >
              Create an Account
            </button>
          </form>

          <p className="w-auto text-center text-gray-500">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service | Contact us
          </p>
        </div>
      </div>
      {/* second section */}
      <AuthMedia />
    </div>
  );
}

export default OTPVerification;
