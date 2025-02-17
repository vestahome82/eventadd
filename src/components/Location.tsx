"use client";
import { useState } from "react";

const mockLocations = [
  "L'Auberge Del Mar",
  "La Valencia Hotel",
  "San Diego Mission Bay Resort",
  "Balboa Park",
  "Gaslamp Quarter",
  "The Rady Shell",
];

const Location = ({ nextStep }: { nextStep: () => void }) => {
  const [location, setLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);

  // Handle input change and filter suggestions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setLocation(inputValue);

    // Filter mock locations based on input
    if (inputValue.length > 0) {
      const filtered = mockLocations.filter((loc) =>
        loc.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations([]);
    }
  };

  // Select a suggestion
  const selectLocation = (selected: string) => {
    setLocation(selected);
    setFilteredLocations([]); // Hide suggestions after selection
  };

  return (
    <div className="p-6">
      <h2 className="font-semibold text-lg">Where is it?</h2>
      
      <input
        type="text"
        value={location}
        onChange={handleChange}
        placeholder="Enter location..."
        className="w-full p-2 border border-gray-300 rounded-md mt-2"
      />

      {/* Suggestions Dropdown */}
      {filteredLocations.length > 0 && (
        <ul className="border border-gray-300 mt-2 rounded-md shadow-md bg-white">
          {filteredLocations.map((loc, index) => (
            <li
              key={index}
              onClick={() => selectLocation(loc)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {loc}
            </li>
          ))}
        </ul>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-end mt-4">
        <button onClick={nextStep} className="bg-amber-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Location;
