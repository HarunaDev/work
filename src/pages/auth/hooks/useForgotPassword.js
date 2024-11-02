import { useState } from "react";
import { useForgotPasswordMutation } from "../../../redux/slices/authApiSlice";
import { useToast } from "../../../contexts/toastContext";

const useForgotPassword = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const { showSuccess, showError } = useToast();
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleForgotPassword = async (email) => {
    if (!validateEmail(email)) {
      showError("Please enter a valid email address.");
      setError("Invalid email address.");
      return;
    }

    try {
      const response = await forgotPassword({ email }).unwrap();
      showSuccess("Password reset link sent successfully.");
      return response;
    } catch (err) {
      showError(err?.data?.detail || "Failed to send password reset link.");
      setError(err?.data || "An error occurred");
    }
  };

  return {
    handleForgotPassword,
    isLoading,
    error,
  };
};

export default useForgotPassword;
