import React from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void; // Function to close the modal
  prevStep?: () => void;  // Function for previous step (optional)
  nextStep?: () => void;  // Function for next step (optional)
}

const Modal: React.FC<ModalProps> = ({ children, closeModal, prevStep }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full h-full md:max-w-lg md:h-auto md:rounded-lg shadow-lg flex flex-col relative">
        
        {/* Top Navigation (Back & Close) */}
        {prevStep && (
          <div className="absolute top-4 left-4">
            <button onClick={prevStep} className="text-gray-600 flex items-center">
              <FaArrowLeft className="mr-2" /> Back
            </button>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <button onClick={closeModal} className="text-gray-600">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-grow p-6 overflow-y-auto">{children}</div>

      </div>
    </div>
  );
};

export default Modal;
