import Upload from './components/Uploads';
import { FaImage } from 'react-icons/fa';

const BasicInfo = () => (
  <div className="mb-6 px-4 pt-4 pb-10 border-b-2">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Basic Information</h3>
    <p className="text-gray-600">
      This is your personal information that you can update anytime.
    </p>
  </div>
);

const ProfilePhoto = () => (
  <div className="mb-6 px-4 pt-4 pb-10 flex flex-col lg:flex-row items-start border-b-2 gap-6">
    <div className="w-full lg:w-1/2">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Profile Photo</h3>
      <p className="text-gray-600 mb-2 w-full lg:w-64">
        This image will be shown publicly as your profile picture. It will help recruiters recognize you!
      </p>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto mt-4 lg:mt-2">
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[320px] lg:h-[180px] rounded-full bg-gray-200 flex items-center justify-center">
        {/* Placeholder for Profile Image */}
      </div>
      <Upload
        supportedTypes="Image"
        icon={<FaImage className="text-gray-500 w-8 h-8" />}
        text1={<p className="text-gray-600"><span className="text-green-600 font-medium cursor-pointer">Click to replace</span> or drag and drop</p>}
        text2={<p className="text-gray-600">SVG, PNG, JPG, GIF (max: 400 X 400px)</p>}
      />
    </div>
  </div>
);

const PersonalDetails = () => (
  <div className="flex flex-col lg:flex-row mb-6 px-4">
    <div className="w-full lg:w-1/2">
      <h3 className="text-lg font-semibold text-gray-800">Personal Details</h3>
    </div>
    <form className="w-full lg:w-1/2 flex flex-col gap-4 mt-4">
      <label htmlFor="firstName" className="block text-gray-700 mb-2">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        className="border border-gray-300 rounded-md w-full p-2"
        placeholder="Enter your first name"
      />

      <label htmlFor="email" className="block text-gray-700 mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="border border-gray-300 rounded-md w-full p-2"
        placeholder="Enter your Email"
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:flex-1">
          <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="border border-gray-300 rounded-md w-full p-2"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="w-full sm:flex-1">
          <label htmlFor="partner" className="block text-gray-700 mb-2">
            Partner
          </label>
          <input
            type="text"
            id="partner"
            className="border border-gray-300 rounded-md w-full p-2"
            placeholder="Enter Partner..."
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:flex-1">
          <label htmlFor="dob" className="block text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="border border-gray-300 rounded-md w-full p-2"
          />
        </div>
        <div className="w-full sm:flex-1">
          <label htmlFor="gender" className="block text-gray-700 mb-2">
            Gender
          </label>
          <select
            id="gender"
            className="border border-gray-300 rounded-md w-full p-2"
          >
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:flex-1">
          <label htmlFor="account" className="block text-gray-700 mb-2">
            Account Number
          </label>
          <input
            type="number"
            id="account"
            placeholder="Enter your account number"
            className="border border-gray-300 rounded-md w-full p-2"
          />
        </div>
        <div className="w-full sm:flex-1">
          <label htmlFor="bank" className="block text-gray-700 mb-2">
            Bank Name
          </label>
          <select
            id="bank"
            className="border border-gray-300 rounded-md w-full p-2"
          >
            <option value="" disabled selected>Select Bank</option>
            <option value="UBA">United Bank Of Africa</option>
            <option value="ECO">Eco Bank</option>
            <option value="FBN">First Bank of Nigeria</option>
          </select>
        </div>
      </div>

      <p className="text-red-600 text-sm">
        Ensure full name matches name on your account number to avoid delays in payment
      </p>
    </form>
  </div>
);

function ProfileInfo() {
  return (
    <div className="pb-4 mb-6 flex flex-col">
      <BasicInfo />
      <ProfilePhoto />
      <PersonalDetails />
    </div>
  );
}

export default ProfileInfo;
