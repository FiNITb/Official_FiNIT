import React, { useRef } from "react";
import EventCard from "../../Components/EventCard/EventCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Events.css";
import { EventData } from "../../Features/EventSlice";

gsap.registerPlugin(ScrollTrigger);

const Events = ({ isHomePage }) => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      if (isHomePage) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container-events",
            start: window.innerWidth >= 1280 ? "top top" : "+=300 top",
            end: "bottom",
            scrub: 2, // Apply scrub only when scrolling down
            pin: true,
            onUpdate: (self) => {
              if (self.direction === -1) {
                self.animation.progress(1); // Skip scrub when scrolling up
              }
            },
          },
        });

        tl.from(cardRefs.current[0], {
          xPercent: -100,
          opacity: 0,
          ease: "power2.out",
        })
          .from(cardRefs.current[1], {
            xPercent: -100,
            opacity: 0,
            ease: "power2.out",
          })
          .from(cardRefs.current[2], {
            yPercent: 100,
            opacity: 0,
            ease: "power2.out",
          })
          .from(cardRefs.current[3], {
            yPercent: -100,
            opacity: 0,
            ease: "power2.out",
          })
      } else {
        const tl = gsap.timeline();
        tl.from(cardRefs.current, {
          rotationY: 180,
          scale: 0.5,
          opacity: 0,
          stagger: 0.2,
          duration: 1.2,
          filter: "blur(50px)",
          ease: "back.out(1.7)",
          scaleX: 0.8,
          scaleY: 1.2,
          rotateZ: 15,
        });

        tl.to(cardRefs.current, {
          y: -5,
          x: 5,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });

    return () => mm.revert();
  });

  return (
    <div className="mx-auto py-28 px-4 sm:px-6 lg:px-0 container-events bg-gradient-to-r from-purple-950 to-black">
      <h2
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-4xl lg:text-5xl font-bold text-center text-[#00ffcc] mb-48 tracking-wider leading-tight"
      >
        Our Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 gap-y-20 place-items-center">
        {EventData.map((event, index) => (
          <div key={event.id} ref={(el) => (cardRefs.current[index] = el)}>
            <EventCard
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
