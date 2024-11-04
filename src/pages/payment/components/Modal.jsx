import { IoClose } from "react-icons/io5";

function Modal({ onClose, message, img }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
      <div className={`relative rounded-lg max-w-md w-full bg-primary-color p-8 px-16`}>
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          <IoClose size={24} />
        </button>
        <img src={img} alt="Modal Content" className="mb-4 mx-auto w-40" />
        <p className="text-center text-white text-lg mb-8">{message}</p>
      </div>
    </div>
  );
}

export default Modal;
