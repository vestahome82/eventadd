"use client";

import { useState } from "react";

const mockEvents = [
  { id: "1", name: "Chris Duarte", location: "L'Auberge Del Mar", time: "11am-2pm", area: "Del Mar" },
  { id: "2", name: "Vicki Barbolak", location: "La Valencia Hotel", time: "11am-2pm", area: "La Jolla" },
  { id: "3", name: "The Hips", location: "San Diego Mission Bay Resort", time: "11am-2pm", area: "Mission Bay" },
];

const EventList = () => {
  const [search, setSearch] = useState("");

  // Filter events based on search input
  const filteredEvents = mockEvents.filter(
    (event) =>
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase()) ||
      event.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Bar */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search events..."
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      {/* Event List */}
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <div key={event.id} className="w-full border rounded-lg p-3 mt-2 bg-white shadow-md">
            <p className="font-semibold">{event.name}</p>
            <p className="text-sm">{event.location}</p>
            <p className="text-xs text-gray-500">
              {event.time} - {event.area}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-4">No events found</p>
      )}
    </div>
  );
};

export default EventList;
