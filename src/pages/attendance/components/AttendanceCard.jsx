import { Link } from "react-router-dom";

function AttendanceCard({ header, time, btnText, url }) {
  return (
    <div className="border border-gray-300 rounded shadow bg-white w-full md:w-64 py-2">
      <div className="border-b px-6 py-3">
        <h2 className="text-sm font-medium">Mark Attendance</h2>
      </div>
      <div className="px-6 py-4">
        {header && <h4 className="text-gray-500">{header}</h4>}
        <p className="text-gray-900 text-2xl font-extrabold">{time}</p>
        {/* Wrap button in a Link component */}
        <Link to={url} className="mt-4 w-full inline-block">
          <button
            className={`w-full py-2 rounded text-white 
              ${btnText === "Clock In" ? 'bg-green-600 hover:bg-green-400' : 'bg-red-600 hover:bg-red-400'}`}
          >
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AttendanceCard;
