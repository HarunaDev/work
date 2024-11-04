import { Link } from "react-router-dom";

function AttendanceCard({ header, time, btnText, url, onButtonClick, isButtonDisabled }) {
  return (
    <div className="border border-gray-300 rounded shadow bg-white w-full md:w-64 py-2">
      <div className="border-b px-6 py-3 centered-left-border">
        <h2 className="text-base font-semibold text-gray-800">Mark Attendance</h2>
      </div>
      <div className="px-6 py-4">
        {header && <h4 className="text-gray-500">{header}</h4>}
        <p className="text-gray-900 text-2xl font-extrabold mb-3">{time}</p>

        {url ? (
          // Render Link-wrapped button if `url` is provided
          <Link to={url} className="mt-4 w-full inline-block">
            <button
              className={`w-full py-2 rounded text-white 
                ${btnText === "Clock In" ? 'bg-primary-color hover:bg-secondary-color' : 'bg-warning hover:bg-red-400'}`}
              disabled={isButtonDisabled}
            >
              {btnText}
            </button>
          </Link>
        ) : (
          // Render standalone button if no `url` is provided
          <button
            onClick={onButtonClick}
            disabled={isButtonDisabled}
            className={`w-full py-2 rounded text-white 
              ${btnText === "Clock In" ? 'bg-green-600 hover:bg-green-400' : 'bg-red-600 hover:bg-red-400'}
              ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}

export default AttendanceCard;
