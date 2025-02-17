"use client";
import { FaHome, FaPlus, FaUser } from "react-icons/fa";
import { useState } from "react";

const BottomNav = ({ setActivePage, setShowModal }: { 
  setActivePage: (page: string) => void;
  setShowModal: (show: boolean) => void;
}) => {
  const [active, setActive] = useState("home");

  const handleNavClick = (page: string) => {
    if (page === "add") {
      setShowModal(true); // Open modal instead of switching page
    } else {
      setActive(page);
      setActivePage(page);
    }
  };

  return (
    <>
      {/* Floating bottom nav for MOBILE ONLY */}
      <nav
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md 
                   shadow-lg flex justify-around items-center w-[90%] max-w-[400px] p-3 
                   rounded-full border md:hidden" // Hide on md+ screens
      >
        <button
          className={`flex flex-col items-center ${active === "home" ? "text-amber-500" : "text-gray-600"}`}
          onClick={() => handleNavClick("home")}
        >
          <FaHome size={20} />
          <span className="text-xs">Home</span>
        </button>
        
        {/* + Button Opens Modal */}
        <button
          className="flex flex-col items-center bg-amber-500 text-white p-3 rounded-full shadow-md"
          onClick={() => handleNavClick("add")}
        >
          <FaPlus size={24} />
        </button>

        <button
          className={`flex flex-col items-center ${active === "profile" ? "text-amber-500" : "text-gray-600"}`}
          onClick={() => handleNavClick("profile")}
        >
          <FaUser size={20} />
          <span className="text-xs">Profile</span>
        </button>
      </nav>

      {/* Desktop "Add Event" Button - Shows ONLY on desktop */}
      <div className="hidden md:flex justify-end p-4">
        <button
          className="bg-amber-500 text-white px-4 py-2 rounded shadow-md"
          onClick={() => setShowModal(true)}
        >
          Add Event
        </button>
      </div>
    </>
  );
};

export default BottomNav;
