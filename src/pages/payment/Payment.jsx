import React, { useState } from 'react';
import AdhocDetails from './components/AdhocDetails';
import Modal from './components/Modal';
import PaymentComplain from './components/PaymentComplain';
import Greeting from '../../components/Greeting';
import Paid from "../../assets/paid_success.png";
import NotPaid from "../../assets/success-img.png"; // Add an image for the "Not Paid" action

function Payment() {
  const [showModal, setShowModal] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [showComplain, setShowComplain] = useState(false);
  const [modalContent, setModalContent] = useState({ message: "", img: "" });

  const handlePaidClick = () => {
    setModalContent({
      message: "Congratulations!",
      img: Paid
    });
    setShowModal(true);
    setButtonsDisabled(true);
  };

  const handleNotPaidClick = () => {
    setShowComplain(true);
     // Disable both buttons after "Not Paid" is clicked
  };

  const handleComplainSubmit = () => {
    setModalContent({
      message: "Your complaint has been sent to admin; we're processing your payment.",
      img: NotPaid
    });
    setShowModal(true);
    setShowComplain(false); // Close the complaint form
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setButtonsDisabled(true);
  };

  return (
    <>
      <div className='mb-10'>
        <Greeting />
      </div>   
      <div className="flex justify-between py-8 h-screen">
        <div className="bg-[#0F5A02] w-auto h-fit px-6 py-4 rounded-lg flex flex-col justify-center items-center">
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 bg-transparent border-4 border-white rounded-full flex items-center justify-center text-white font-bold text-lg">
              76,000
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Salary Expectation</h3>
              <h6 className="text-white text-sm">Due Date</h6>
              <h6 className="text-white text-sm">March 28th 2024</h6>
            </div>
          </div>
          <button 
            onClick={handlePaidClick} 
            disabled={buttonsDisabled}
            className={`mt-4 w-full px-4 py-2 rounded ${
              buttonsDisabled ? 'bg-[#11380b] cursor-not-allowed' : 'bg-white text-green-500 hover:bg-primary-color'
            }`}
          >
            Paid
          </button>
          <button 
            onClick={handleNotPaidClick} 
            disabled={buttonsDisabled}
            className={`mt-4 w-full px-4 py-2 rounded border-2 ${
              buttonsDisabled ? 'bg-[#11380b] border-0 cursor-not-allowed' : 'bg-[#0F5A02] text-white border-white hover:bg-primary-color'
            }`}
          >
            Not Paid
          </button>
        </div>
        <div className="h-fit w-7/12 bg-white rounded-lg shadow px-8 py-6">
          {showComplain ? (
            <PaymentComplain onSubmit={handleComplainSubmit} />
          ) : (
            <>
              <div className='flex justify-between items-center mb-6 px-4'>
                <h1 className='text-gray-700 text-xl font-semibold'>Payment History</h1>
                <h4 className='text-primary-color font-semibold'>Approved</h4>
              </div>
              <AdhocDetails />
              <AdhocDetails />
              <AdhocDetails />
            </>
          )}
        </div>
        {showModal && (
          <Modal onClose={handleCloseModal} message={modalContent.message} img={modalContent.img} />
        )}
      </div>
    </>
  );
}

export default Payment;
