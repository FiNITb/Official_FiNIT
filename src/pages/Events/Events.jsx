import React, { useRef } from "react";
import { EventData } from "../../Features/EventSlice";
import AllEventsCard from "../../Components/AllEventsCard/AllEventsCard"
const Events = ({}) => {

  return (
    <div className="mx-auto py-28 px-4 sm:px-6 lg:px-0 container-events bg-gradient-to-r from-purple-950 to-black">
      <h2
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-4xl lg:text-5xl font-bold text-center text-[#00ffcc] mb-12 tracking-wider leading-tight"
      >
        Our Events
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
        {EventData.map((event, index) => (
          <div key={event.id}>
            <AllEventsCard 
              id={event.id}
              title={event.title}
              poweredBy={event.poweredBy}
              image={event.image}
              description={event.description}
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
