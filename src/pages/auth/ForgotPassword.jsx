import { useState } from "react";
import InputField from "./components/InputField";
import LandingLogo from "../../assets/PHC-logo_1.png";
import useForgotPassword from "./hooks/useForgotPassword";
import AuthMedia from "../../components/AuthMedia";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { handleForgotPassword, isLoading, error } = useForgotPassword();

  const onSubmit = async (event) => {
    event.preventDefault();
    await handleForgotPassword(email);
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-auth-bg w-full md:w-3/5 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center rounded-lg w-full max-w-lg h-auto p-6">
          <img src={LandingLogo} alt="Logo" className="mx-auto lg:w-auto md:w-64 sm:w-64 mb-4" />

          <h1 className="text-xl md:text-4xl text-dark-heading font-bold text-center mb-6">Forgot Password</h1>

          {showMessage && (
            <p className="text-gray-600 text-center mb-4">
              We sent a code to <span className="font-semibold">your email</span>
            </p>
          )}

          <form className="space-y-6 mb-6" action="/auth/reset-password" method="post" onSubmit={onSubmit}>
            <InputField placeholder="Email Address" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />

            <button
              type="submit"
              className="bg-primary-color hover:bg-secondary-color text-white px-4 py-2 rounded w-full"
            >
              Reset Password
            </button>
          </form>

          <p className="w-auto mt-6 text-center text-gray-500">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service | Contact us
          </p>
        </div>
      </div>

      {/* left section */}
      <AuthMedia />
    </div>
  );
}

export default ForgotPassword;
