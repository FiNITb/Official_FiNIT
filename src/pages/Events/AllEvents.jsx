import React from "react";
import { useParams } from "react-router-dom";
import { AllEventData } from "../../Features/AllEvents"; // Import your event data
import EventCard from "../../components/EventCard/EventCard"; // Import your card component

const AllEvents = () => {
  const { title } = useParams(); // Get event name from the URL

  // Fetch events based on the event name
  const eventList = AllEventData[title] || [];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-950 to-black">
    <div className="container mx-auto px-6">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title ? title.toUpperCase() : "EVENTS"}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mb-6"></div>
      </div>
  
      {/* Events Grid Section */}
      {eventList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventList.map((event) => (
            <div key={event.id} className="flex justify-center">
              <EventCard {...event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-purple-900/30 rounded-lg p-12 text-center max-w-md mx-auto">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 mx-auto text-gray-400 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <p className="text-gray-400 text-lg mb-2">No events found</p>
          <p className="text-gray-500 text-sm">Check back later for upcoming events</p>
        </div>
      )}
    </div>
  </section>
  );
};

export default AllEvents;
