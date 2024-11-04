import { IoClose } from "react-icons/io5"; // Import X icon (install react-icons if needed)

const Modal = ({ isOpen, onClose, imageSrc, message, backgroundColor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
      <div className={`relative p-4 rounded-lg max-w-md w-full ${backgroundColor} p-8 px-16`}>
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          <IoClose size={24} /> {/* X icon */}
        </button>
        <img src={imageSrc} alt="Modal Content" className="mb-4 mx-auto text-white w-16" />
        <p className="text-center text-white text-lg mb-8">{message}</p>

        <p className="text-sm text-gray-300 text-center">You can only Clock Out once in a day</p>
      </div>
    </div>
  );
};

export default Modal;
