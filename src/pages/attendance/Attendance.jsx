import { Bar } from 'react-chartjs-2';
import { FaCalendarAlt, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import Greeting from '../../components/Greeting';
import AttendanceCard from './components/AttendanceCard';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Attendance() {

  const chartData = {
    labels: [''],
    datasets: [
      { label: 'Absent%', data: [20], backgroundColor: '#FFD700', barThickness: 30 },
      { label: 'Present%', data: [80], backgroundColor: '#009345', barThickness: 30 },
    ],
  };

  const chartOptions = {
    indexAxis: 'x',
    scales: { x: { stacked: true }, y: { stacked: true } },
    responsive: true,
    maintainAspectRatio: true, // Maintain the aspect ratio to fit the container
    aspectRatio: 2, // Adjust as needed to fit the container
    plugins: {
      legend: {
        display: false, // This removes the default legend
      },
      tooltip: {
        enabled: true, // Enables tooltips on hover
      },
    },
  };


  return (
    <div className="px-4 py-6 md:px-12">
      <Greeting text="Welcome back! Here’s your attendance overview." />
      
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <AttendanceCard header="My office time:" time="8:10:59 AM" btnText="Clock In" url="clock-in"  />
          <AttendanceCard time="7:00:01 PM" btnText="Clock Out" url="clock-out" />
        </div>

        {/* Chart Container with fixed height */}
        <div className="w-3/5 h-[400px] py-6 px-10 bg-white border border-gray-200 rounded mb-10 shadow">
          <h2 className="text-lg font-semibold mb-10">Daily Attendance Statistics</h2>
          <div className="flex items-center justify-between mb-4">
            <FaCalendarAlt className="text-green-500 text-2xl" />
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-green-500"></div>
                <span className="text-sm">Present%</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-yellow-500"></div>
                <span className="text-sm">Absent%</span>
              </div>
            </div>
          </div>
          {/* Chart component without inline height */}
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Attendance History Section */}
      <h1 className="text-2xl font-extrabold text-gray-700 mt-12 mb-6">Attendance History</h1>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4 lg:gap-0">
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded-md p-2 text-gray-700">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <label className="text-sm text-gray-700">entries per page</label>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full md:w-64"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">NAME</th>
              <th className="py-3 px-4 text-left">DATE</th>
              <th className="py-3 px-4 text-left">CLOCK IN AT</th>
              <th className="py-3 px-4 text-left">CLOCK OUT AT</th>
              <th className="py-3 px-4 text-left">LOCATION</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">John Doe</td>
                <td className="py-2 px-4">2024-10-27</td>
                <td className="py-2 px-4">
                  <p className="border-2 border-green-700 px-4 text-green-600 w-fit">08:10 AM</p>
                </td>
                <td className="py-2 px-4">
                  <p className="border-2 border-green-700 px-4 text-green-600 w-fit">07:10 PM</p>
                </td>
                <td className="py-2 px-4 text-center">
                  <FaMapMarkerAlt className="text-green-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
