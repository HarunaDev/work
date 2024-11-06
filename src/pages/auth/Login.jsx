import { useState } from "react";
import { Link } from 'react-router-dom';
import InputField from "./components/InputField";
import LandingLogo from "../../assets/PHC-logo_1.png";
// import { useLoginMutation } from "../../redux/slices/authApiSlice";
import useLogin from "./hooks/useLogin";
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import AuthMedia from "../../components/AuthMedia";


function Login() {
  // const [loginResponse, setLoginResponse] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const { handleLogin} = useLogin();

  const handleOnLogin = async (event) => {
    event.preventDefault();
    await handleLogin({email, password});
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* right section */}
      <div className="bg-auth-bg w-full md:w-3/5 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center rounded-lg w-full max-w-lg h-auto p-6">
          <img src={LandingLogo} alt="Logo" className="mx-auto lg:w-auto md:w-64 sm:w-64 mb-4" />
          <h1 className="text-xl md:text-4xl text-dark-heading font-bold text-center mb-6">Welcome Back!</h1>

          <form className="space-y-6"  onSubmit={handleOnLogin}>
            <InputField placeholder="Email Address" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField placeholder="Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="text-right">
              <Link to="/reset-password" className="text-primary-color text-sm font-semibold">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="bg-primary-color hover:bg-secondary-color text-white px-4 py-2 rounded w-full">
              Login
            </button>

            <p className="text-dark-heading text-sm mt-4 text-center">
              Don't have an account? <Link to="/register" className="text-primary-color">Sign up</Link>
            </p>

            <div className="flex items-center mt-2">
              <hr className="w-1/6 border-gray-300" />
              <span className="mx-auto text-gray-700 text-sm text-center">Or sign in with your work email</span>
              <hr className="w-1/6 border-gray-300" />
            </div>

            <div className="flex justify-center space-x-6 mt-4">
              <button className="text-gray-500 hover:text-red-600">
                <FaGoogle size={24} />
              </button>
              <button className="text-gray-500 hover:text-blue-700">
                <FaLinkedin size={24} />
              </button>
            </div>
          </form>

          <p className="w-auto mt-6 text-center text-gray-500">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service | Contact us
          </p>
        </div>
      </div>

      {/* second section */}
      <AuthMedia />
    </div>
  );
}

export default Login;
