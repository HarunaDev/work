import React, { useState } from 'react';
import AttendanceCard from './components/AttendanceCard';
import Modal from './components/Modal';
import Greeting from '../../components/Greeting';
import Success from "../../assets/svg/success-svg.svg"

function ClockIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsButtonDisabled(true);  // Disable button when modal closes
  };

  return (
    <>
      <div className='mb-24'>
        <Greeting text="Welcome back to work at the Service Center, HMO Ward 3. Enjoy your stay" />
      </div>
      <div className="relative h-screen flex flex-col items-start justify-start">
        <div className="absolute top-42 left-5 z-10">
          <AttendanceCard
            header="Clock In Time:"
            time="8:10:59 AM"
            btnText="Clock In"
            buttonColor="bg-green-500"
            isButtonDisabled={isButtonDisabled}
            onButtonClick={handleButtonClick}
            controlledByClock={true} // New prop to isolate functionality
          />
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageSrc={Success} // Replace with your image URL
          message="You have Successfully Clocked In for the day at 8:10:59 AM"
          backgroundColor="bg-primary-color"
        />
      </div>
    </>
  );
}

export default ClockIn;
