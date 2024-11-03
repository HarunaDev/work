// import { FaCloudUploadAlt } from 'react-icons/fa';
import CloudIcon from "../../assets/svg/cloud-svg.svg"
import Upload from './components/Uploads';

function UploadCV() {
  const supportedTypes = "PDF"; // Define supported file types

  return (
    <div className="flex items-center justify-center min-h-fit py-8 px-4">
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-lg border-2 border-gray-100 shadow-lg">
        <form className="flex flex-col items-center gap-4 w-full">
          {/* Label outside the dashed border */}
          <label className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Upload Your CV
          </label>

          {/* Upload Component with supported file types */}
          <Upload
            supportedTypes={supportedTypes}
            icon={<img src={CloudIcon} className='w-10 h-10 mb-3' alt='' />}
            text1={
              <p className="text-gray-600">
                Drop your PDF file here or{" "}
                <span className="text-green-600 font-medium cursor-pointer">
                  Browse
                </span>
              </p>
            }
            text2={
              <p className="text-gray-600">Supported: {supportedTypes}</p>
            }
          />

          {/* Hidden File Input - If you need this, ensure it's connected properly */}
          <input
            type="file"
            className="hidden"
            accept=".pdf"
            aria-label="Upload CV"
          />
        </form>
      </div>
    </div>
  );
}

export default UploadCV;
