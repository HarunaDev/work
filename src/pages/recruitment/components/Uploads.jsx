/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Upload({ supportedTypes, icon, text1, text2 }) {
  return (
    <div className="w-full border-2 border-dashed border-green-300 rounded-lg py-10 px-4 flex flex-col items-center justify-center text-center text-green-500">
      {icon}
      {text1}
      {text2}
    </div>
  );
}

export default Upload;
