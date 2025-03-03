import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arthNirmati from "../../assets/arth_nirmati.png";
import choiceFinx from "../../assets/choice_finx.png";
import zerodha from "../../assets/zerodha.png";
import unstop from "../../assets/unstop.webp";
import sbi from "../../assets/sbi.webp";
import stockgro from "../../assets/stockgro.webp";

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
  { name: "Arth Nirmati", image: arthNirmati },
  { name: "Choice Finx", image: choiceFinx },
  { name: "Zerodha", image: zerodha },
  { name: "Unstop", image: unstop },
  { name: "SBI", image: sbi },
  { name: "Stockgro", image: stockgro },
];

const Sponsors = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-purple-700 flex flex-col items-center p-10">
      <h1 className="text-6xl font-bold mb-8 text-[#00FFCC]">Our Sponsors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center opacity-0"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-full h-48 object-contain mb-4 rounded-lg mix-blend-multiply"
            />
            <h2 className="text-xl font-semibold text-black">{sponsor.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
