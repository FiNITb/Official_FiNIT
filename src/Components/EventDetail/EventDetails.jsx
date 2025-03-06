import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectEvent } from "../../Features/AllEvents";

const EventDetails = () => {
  const { title, eventTitle } = useParams(); // Get title and ID from URL
  const dispatch = useDispatch();
  

  // Get selected event from Redux store
  const selectedEvent = useSelector((state) => state.events.selectedEvent);

  useEffect(() => {
    if (title && eventTitle) {
      dispatch(selectEvent({ title, eventTitle })); // Ensure ID is a number
    }
  }, [title, eventTitle, dispatch]);

  return (
    <>      {selectedEvent ? (
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        {selectedEvent.image && (
          <img
            src={selectedEvent.image}
            alt={selectedEvent.title}
            className="w-full h-96 lg:h-[500px] object-cover mb-6 rounded-lg shadow-md"
          />
        )}
        <h1
          style={{ fontFamily: "fh1" }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500 mb-4 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {selectedEvent.title}
        </h1>
        <p style={{ fontFamily: "fh2" }} className="text-lg text-gray-700 mb-4">
          {selectedEvent.description || "No description available."}
        </p>
        {selectedEvent.poweredBy && (
          <p className="text-sm text-gray-500 italic">
            Powered by:
            <span className="font-semibold text-teal-600"> {selectedEvent.poweredBy}</span>
          </p>
        )}
      </div>
    ) : (
      <div className="text-center text-blue-500 text-lg font-medium">
        Fetching event details...
      </div>
    )}</>
  );
};

export default EventDetails;
