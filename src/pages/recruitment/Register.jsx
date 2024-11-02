import { useNavigate, Link } from 'react-router-dom';
import InputField from "./components/InputField";
import LandingLogo from "../../assets/PHC-logo_1.png";
import useCreateStaff from "./hooks/useCreateStaff";
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import AuthMedia from "../../components/AuthMedia";

function Register() {
  const navigate = useNavigate();
  const {
    handleCreateStaff,
    isLoading,
    isSubmitted,
    setIsSubmitted,
  } = useCreateStaff();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true); // Switch to the Verification Page
    await handleCreateStaff({ email: "admin@demol", password: "123456" });

    // Navigate to OTP verification page after successful registration
    navigate('/otp-verification');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-auth-bg w-full md:w-3/5 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center rounded-lg w-full max-w-lg h-auto p-6">
          <img src={LandingLogo} alt="Logo" className="mx-auto lg:w-auto md:w-64 sm:w-64 mb-4" />
          
          <h1 className="text-xl md:text-4xl text-dark-heading font-bold text-center mb-6">Ad-hoc Registration</h1>

          <form className="space-y-6" action="" onSubmit={handleOnSubmit}>
            <InputField placeholder="First Name" type="text" name="first-name"/>
            <InputField placeholder="Last Name" type="text" name="last-name"/>
            <InputField placeholder="Email" type="email" name="email"/>
            <InputField placeholder="Enter password" type="password" name="password1"/>
            <InputField placeholder="Confirm Password" type="password" name="password2"/>

            <button
              type="submit"
              className="bg-primary-color text-white px-4 py-2 rounded w-full"
            >
              Register
            </button>

            <div className="flex items-center mt-2">
              <hr className="w-1/6 border-gray-300" />
              <span className="mx-auto text-gray-500 text-sm text-center">Or sign in with your work email</span>
              <hr className="w-1/6 border-gray-300" />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-4">
              <button className="text-gray-500 hover:text-red-600">
                <FaGoogle size={24} />
              </button>
              <button className="text-gray-500 hover:text-blue-700">
                <FaLinkedin size={24} />
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-4 text-center">
              Already have an account? <Link to="/login" className="text-primary-color">Sign in</Link>
            </p>
          </form>
        </div>
      </div>

      {/* second section */}
      <AuthMedia />
    </div>
  );
}

export default Register;
