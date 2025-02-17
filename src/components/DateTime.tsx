interface StepProps {
    nextStep: () => void;
    prevStep: () => void;
  }
  
  const DateTime: React.FC<StepProps> = ({ nextStep, prevStep }) => {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold">When is it?</h2>
        <input type="date" className="w-full border p-2 rounded mt-2" />
        <input type="time" className="w-full border p-2 rounded mt-2" />
        <div className="flex justify-between mt-4">
          <button onClick={prevStep} className="text-gray-600">Back</button>
          <button onClick={nextStep} className="bg-amber-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      </div>
    );
  };
  
  export default DateTime;
  