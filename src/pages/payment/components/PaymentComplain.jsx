import React, { useState } from 'react';

function PaymentComplain({ onSubmit }) {
  const [complaintText, setComplaintText] = useState('');
  const suggestions = [
    'Salary not received',
    'Incorrect payment amount',
    'Late payment',
    'Other payment issue'
  ];

  const handleSuggestionClick = (suggestion) => {
    setComplaintText(suggestion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Trigger the modal display
    setComplaintText(''); // Clear the textarea after submission
  };

  return (
    <div className="p-6 rounded-lg w-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          value={complaintText}
          onChange={(e) => setComplaintText(e.target.value)}
          placeholder="Enter your complaint here"
          className="w-full p-4 h-32 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
        <button
          type="submit"
          className="w-full px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          Send
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Suggestions</h3>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <span
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-green-100 transition-colors duration-200"
            >
              {suggestion}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentComplain;
