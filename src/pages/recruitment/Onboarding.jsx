import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Greeting from "../../components/Greeting";

function Onboarding() {
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { name: 'Profile Info', path: 'profile-info', title: 'Profile Information' },
    { name: 'Upload CV', path: 'upload-cv', title: 'Upload Your CV' },
    { name: 'Awaiting Approval', path: 'awaiting-approval', title: 'Approval Status' },
  ];

  // Determine the current step index and the next step
  const currentStepIndex = steps.findIndex(step => location.pathname.includes(step.path));
  const isLastStep = currentStepIndex === steps.length - 1;
  const nextStepPath = !isLastStep ? steps[currentStepIndex + 1].path : null;

  return (
    <div className="px-16 py-8 flex flex-col justify-around">
      {location.pathname.includes("profile-info") ? (<Greeting text="Here is what's happening with your job search application from July 19 - July 25." />) : ""}

      <ol className="flex gap-16 mt-10 items-center">
        {steps.map((step, index) => {
          const isActive = location.pathname.includes(step.path);
          const isAwaitingApproval = step.path === 'awaiting-approval' && isActive;
          
          return (
            <li key={index} className="flex items-center">
              <Link
                to={step.path}
                className={`flex items-center ${
                  isAwaitingApproval 
                    ? 'text-red-600 font-semibold' 
                    : isActive 
                    ? 'text-primary-color font-semibold' 
                    : 'text-secondary-color'
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isAwaitingApproval
                      ? 'bg-red-600 text-white'
                      : isActive 
                      ? 'bg-primary-color text-white' 
                      : 'bg-secondary-color text-white'
                  }`}
                >
                  {index + 1}
                </span>
                <span className="ml-2">{step.name}</span>
              </Link>
              {/* Add horizontal line except for the last step */}
              {index < steps.length - 1 && (
                <div className="w-12 h-0.5 bg-gray-300 mx-4"></div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="bg-white mt-6 text-lg font-semibold text-gray-700 w-full pb-1">
        <h3 className="border-b-2 w-fit border-green-700"> 
          {location.pathname.includes("awaiting-approval") ? "Currently Awaiting Approval and Job Scheduled" : steps.find(step => location.pathname.includes(step.path))?.title}
        </h3>
      </div>

      <div className="mt-4 p-4 bg-white rounded-md shadow">
        <Outlet />
        {/* Conditionally render "Next" button only for profile-info and upload-cv */}
        {nextStepPath && (
          <button 
            onClick={() => navigate(nextStepPath)}
            className="mt-4 px-4 w-full py-2 bg-primary-color text-white rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Onboarding;
