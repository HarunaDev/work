import { AiOutlineEye } from "react-icons/ai"; // Import the Eye icon from React Icons

function InputField({ placeholder, type, name, onChange, value }) {
  return (
    <div className="relative">
      <input
      onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className="mt-1 block w-80 px-3 py-2 border-2 border-gray-500 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
      />
      {type === "password" && (
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {/* Eye Icon from React Icons */}
          <AiOutlineEye className="w-5 h-5 text-gray-500" />
        </span>
      )}
    </div>
  );
}

export default InputField;
