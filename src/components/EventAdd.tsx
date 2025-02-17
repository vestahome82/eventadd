'use client'
import React from 'react';
import Location from './Location';
import DateTime from './DateTime';
import Type from './Type';
import Details from './Details';
import Review from './Review';

interface EventAddProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

const EventAdd: React.FC<EventAddProps> = ({ step, nextStep, prevStep }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {step === 1 && <Location nextStep={nextStep} />}
      {step === 2 && <DateTime nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Type nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Details nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <Review prevStep={prevStep} />}
    </div>
  );
};

export default EventAdd;
