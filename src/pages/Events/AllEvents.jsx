import React from "react";
import { useParams } from "react-router-dom";
import { AllEventData } from "../../Features/AllEvents"; // Import your event data
import EventCard from "../../components/EventCard/EventCard"; // Import your card component

const AllEvents = () => {
  const { title } = useParams(); // Get event name from the URL

  // Fetch events based on the event name
  const eventList = AllEventData[title] || [];

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-purple-950 to-black">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        {title ? title.toUpperCase() : "Events"}
      </h2>

      {eventList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventList.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No events found.</p>
      )}
    </div>
  );
};

export default AllEvents;
