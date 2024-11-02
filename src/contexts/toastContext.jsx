import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatErrorMessage } from "../utils/errorMessageFormatter";

export const ToastProvider = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export const useToast = () => {
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(formatErrorMessage(message));

  return {
    showSuccess,
    showError,
  };
};
