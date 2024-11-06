import { useState } from "react";
import { useLoginMutation } from "../../../redux/slices/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../contexts/toastContext";

const useLogin = () => {
  const [login, { isLoading, isError }] = useLoginMutation();
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (data) => {
    try {
      const response = await login(data).unwrap();
      console.log(response)
      setIsSuccess(true);
      showSuccess("Login successful");
      navigate("/home")
      return response;
    } catch (err) {
      console.log(err);

      // **Bug** !! **Issues**
      // I keep getting "No error message provided" if any of the errors below are encountered and Error message from the server if none of the error messages below are encountered 
      
      // Check if there is a specific error message from the server
      const serverMessage = err?.data?.detail || err?.data?.message || "An error occurred. Please try again.";
      
      // //setError(err?.data?.detail || "An error occurred");
      // setError(err?.data || "An error occurred");
      // setIsSuccess(false);
      // //showError(err?.data?.detail || "An error occurred");
      // showError(err || "Login unsuccessful");

      // Check for specific error status codes
      if (err?.status === 400) {
        setError("Invalid login credentials. Please try again.");
        showError("Invalid login credentials.");
      } else if (err?.status === 401) {
        setError("Unauthorized. Please check your credentials.");
        showError("Unauthorized access.");
      } else if (err?.status === 422) {
        setError("Invalid login. Please provide credentials");
        showError("Unauthorized access.");
      } else if (err?.status === 500) {
        setError("Server error. Please try again later.");
        showError("Server error occurred.");
      } else {
        // Default error message
        setError(serverMessage);
        showError(serverMessage);
      }

      setIsSuccess(false);
    }
  };

  return {
    handleLogin,
    isLoading,
    isError,
    isSuccess,
    error,
  };
};

export default useLogin;
