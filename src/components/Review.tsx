import React from 'react';

interface StepProps {
  prevStep: () => void;
}

const Review: React.FC<StepProps> = ({ prevStep }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Review & Confirm</h2>
      <p>Summary of all inputs here...</p>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="text-gray-600">Back</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Confirm</button>
      </div>
    </div>
  );
};

export default Review;
