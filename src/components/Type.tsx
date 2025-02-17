import React from 'react';

interface StepProps {
  nextStep: () => void;
  prevStep: () => void;
}

const Type: React.FC<StepProps> = ({ nextStep, prevStep }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">What type of event?</h2>
      <button className="block w-full border p-2 rounded mt-2">Rock</button>
      <button className="block w-full border p-2 rounded mt-2">Comedy</button>
      <button className="block w-full border p-2 rounded mt-2">Theater</button>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="text-gray-600">Back</button>
        <button onClick={nextStep} className="bg-amber-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default Type;
