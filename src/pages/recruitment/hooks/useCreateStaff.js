// src/pages/hooks/useCreateStaff.jsx

import { useState } from "react";
import { useCreateStaffMutation } from "../../../redux/slices/recruitmentApiSlice";
import { useToast } from "../../../contexts/toastContext";

const useCreateStaff = () => {
  const [createStaff, { isLoading, isError }] = useCreateStaffMutation();
  const { showSuccess, showError } = useToast();

  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleCreateStaff = async (data) => {
    try {
      const response = await createStaff(data).unwrap();
      setFormData(data);
      setIsSubmitted(true);
      setIsSuccess(true);
      showSuccess("Staff created successfully");
      return response;
    } catch (err) {
      console.log(err);
      setIsSuccess(false);
      setError(err?.data || "An error occurred");
      showError(err || "An error occurred");
    }
  };

  return {
    handleCreateStaff,
    isLoading,
    isError,
    isSuccess,
    error,
    isSubmitted,
    formData,
    setIsSubmitted,
  };
};

export default useCreateStaff;
