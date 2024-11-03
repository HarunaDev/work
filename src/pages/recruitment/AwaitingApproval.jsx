// import { FaCheckCircle } from 'react-icons/fa';
import Success from "../../assets/svg/success-svg.svg"

function AwaitingApproval() {
  return (
    <div className="flex items-center justify-center h-[60vh] py-8 px-4">
      <div className="flex flex-col items-center text-center">
        {/* Green Check Icon with Circular Background */}
        <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full mb-6">
          {/* <FaCheckCircle className="text-green-600 w-16 h-16 md:w-20 md:h-20" /> */}
          <img src={Success} alt="" />
        </div>
        
        {/* Success and Pending Approval Messages */}
        <p className="text-lg text-gray-700">
          Your CV has been successfully uploaded. <br />  account is pending approval.</p>
      </div>
    </div>
  );
}

export default AwaitingApproval;
