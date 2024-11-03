import React, { useState } from 'react';
import AttendanceCard from './components/AttendanceCard';
import Modal from './components/Modal';
import Greeting from '../../components/Greeting';

function ClockOut() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    setIsButtonDisabled(true);
  };

  return (
    <>
        <div className='mb-10'>
                <Greeting text="Welcome back to work at the Service Center, HMO Ward 3. Enjoy your stay" />
        </div>
        <div className="relative h-screen flex flex-col items-start justify-start">
        <div className="absolute top-5 left-5 z-10">
            <AttendanceCard
            header="Clock Out Time:"
            time="7:00:01 PM"
            btnText="Clock Out"
            buttonColor="bg-red-500"
            isButtonDisabled={isButtonDisabled}
            onButtonClick={handleButtonClick}
            />
        </div>

        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            imageSrc="YOUR_IMAGE_URL" // Replace with your image URL
            message="You have successfully clocked out!"
        />
        </div>
    </>
  );
}

export default ClockOut;
