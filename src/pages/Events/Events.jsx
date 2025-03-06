import React, { useEffect, useRef } from "react";
import { EventData } from "../../Features/Event";
import EventsCard from "../../Components/EventsCard/EventsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Events = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {

    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    })

    // Staggered animation for event cards
    cardsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  });

  return (
    <section
      className="mx-auto py-28 px-6 lg:px-8 container-events bg-gradient-to-r from-purple-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center" ref={headingRef}>
          <h2
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-4xl lg:text-5xl font-bold text-center text-[#00ffcc] mb-4 tracking-wider leading-tight"
          >
            Our Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mb-6"></div>
        </div>

        {/* Events Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {EventData.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex justify-center transform transition-transform hover:scale-105"
            >
              <EventsCard
                id={event.id}
                title={event.title}
                poweredBy={event.poweredBy}
                image={event.image}
                description={event.description}
              />
            </div>
          ))}
        </div>

        {/* Conditional display for when no events are available */}
        {EventData.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No events currently scheduled. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
