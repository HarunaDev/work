import { useState } from "react";
import { useLoginMutation } from "../../../redux/slices/authApiSlice";
// import { useNavigate } from "react-router-dom";
import { useToast } from "../../../contexts/toastContext";

const useLogin = () => {
  const [login, { isLoading, isError }] = useLoginMutation();
  const { showSuccess, showError } = useToast();
  // const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (data) => {
    try {
      const response = await login(data).unwrap();
      setIsSuccess(true);
      showSuccess("Login successful");
      return response;
    } catch (err) {
      console.log(err);
      //showError(err?.data?.detail || "An error occurred");
      showError(err || "An error occurred");
      setIsSuccess(false);
      //setError(err?.data?.detail || "An error occurred");
      setError(err?.data || "An error occurred");
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
