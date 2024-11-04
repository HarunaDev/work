import React from 'react';

function AdhocDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border-b-[1px] border-gray-200">
      <table className="w-full text-gray-800">
        <tbody>
          <tr>
            <td className="font-semibold pr-4">Adhoc Name:</td>
            <td className="pr-8">Jake Godwin</td>
            <td className="font-semibold pr-4">D.O.P:</td>
            <td>30 October, 2024</td>
          </tr>
          <tr>
            <td className="font-semibold pr-4">Bank Name:</td>
            <td className="pr-8">Access Bank</td>
            <td className="font-semibold pr-4">D.O.C:</td>
            <td>01 November, 2024</td>
          </tr>
          <tr>
            <td className="font-semibold pr-4">Transaction ID:</td>
            <td className="pr-8">PHC26602921</td>
            <td className="font-semibold pr-4">Amount:</td>
            <td>150,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdhocDetails;
