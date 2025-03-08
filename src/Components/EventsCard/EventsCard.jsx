import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const EventsCard = ({id, title, description, image }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const overlayRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile (screen width less than 768px)
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useGSAP(() => {
    if (isMobile) return; // Don't apply GSAP animations on mobile devices
    
    const ctx = gsap.context(() => {
      gsap.set(containerRef.current, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });

      // Create random points for the magnetic effect
      const rand = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
      const points = Array.from({ length: 6 }, () => ({
        x: rand(-15, 15),
        y: rand(-15, 15),
        scale: rand(95, 110) / 100,
        rotation: rand(-5, 5),
      }));

      let currentPoint = 0;
      let isHovering = false;

      // Subtle ambient animation when not hovering
      const ambientTl = gsap.timeline({ repeat: -1, yoyo: true });
      ambientTl
        .to(imageRef.current, {
          scale: 1.03,
          rotate: 0.5,
          duration: 3,
          ease: "sine.inOut",
        })
        .to(imageRef.current, {
          scale: 1,
          rotate: -0.5,
          duration: 3,
          ease: "sine.inOut",
        });

      // Animate the CTA button constantly to draw attention
      gsap.to(ctaButtonRef.current, {
        scale: 1.05,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Main hover animation
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl
        .to(containerRef.current, {
          rotationY: 5,
          rotationX: -7,
          y: -10,
          boxShadow:
            "0px 20px 30px rgba(0, 0, 0, 0.2), 0px 0px 15px rgba(94, 234, 212, 0.5)",
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          imageRef.current,
          {
            scale: 1.12,
            filter: "saturate(1.3) brightness(1.1)",
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          0
        )
        .to(
          overlayRef.current,
          {
            opacity: 0.7,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        )
        .to(
          captionRef.current,
          {
            y: -15,
            opacity: 1,
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            textShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
            duration: 0.5,
            ease: "power3.out",
          },
          0.1
        )
        .to(
          ctaButtonRef.current,
          {
            scale: 1.15,
            backgroundColor: "rgba(94, 234, 212, 0.8)",
            boxShadow: "0px 0px 15px rgba(94, 234, 212, 0.6)",
            duration: 0.3,
            ease: "power3.out",
          },
          0
        );

      // Mouse tracking function
      const trackMouse = (e) => {
        if (!isHovering) return;

        const bounds = containerRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - bounds.left - bounds.width / 2) / 20;
        const mouseY = (e.clientY - bounds.top - bounds.height / 2) / 20;

        gsap.to(containerRef.current, {
          rotationY: -mouseX,
          rotationX: mouseY,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      // Magnetic effect animation
      const magneticEffect = () => {
        if (!isHovering) return;

        currentPoint = (currentPoint + 1) % points.length;
        const point = points[currentPoint];

        gsap.to(containerRef.current, {
          x: point.x,
          y: point.y,
          scale: point.scale,
          rotation: point.rotation,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
          onComplete: () => setTimeout(magneticEffect, rand(1000, 2000)),
        });
      };

      // Event listeners
      containerRef.current.addEventListener("mouseenter", () => {
        if (isMobile) return;
        isHovering = true;
        ambientTl.pause();
        hoverTl.play();
        magneticEffect();
        document.addEventListener("mousemove", trackMouse);
      });

      containerRef.current.addEventListener("mouseleave", () => {
        if (isMobile) return;
        isHovering = false;
        hoverTl.reverse();
        document.removeEventListener("mousemove", trackMouse);
        gsap.to(containerRef.current, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
          onComplete: () => ambientTl.play(),
        });
      });
    });

    return () => ctx.revert(); 
  }, [isMobile]);


  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto my-6 px-4 cursor-pointer">
      <Link to={`/events/${id}`} onClick={() => window.scrollTo(0, 0)}>
      <div
        ref={containerRef}
        className={`relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-black to-gray-900 p-1 transition-all h-full ${!isMobile ? "transform-gpu" : ""}`}
        style={!isMobile ? { perspective: "1000px", transformStyle: "preserve-3d" } : {}}
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 opacity-50 blur-xl"></div>

        <div className="relative p-4 bg-black/60 backdrop-blur-lg rounded-lg overflow-hidden h-full flex flex-col">
          {/* Decorative Blurred Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>

          {/* Image Container */}
          <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-lg w-full flex-grow bg-gray-800 h-48 sm:h-64 md:h-72 lg:h-80">
            {/* Clickable Overlay Icon - Now controlled by GSAP on desktop, static on mobile */}
            <div 
              ref={overlayRef}
              className={`absolute inset-0 bg-black/30 flex items-center justify-center z-10 ${isMobile ? "opacity-0 hover:opacity-70" : "opacity-0"} transition-opacity duration-300`}
            >
              <div className="text-white text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Image with GSAP Animation */}
            <img
              ref={imageRef}
              src={image}
              alt={title || "Event image"}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* Caption with Glassmorphism Effect */}
          <div
            ref={captionRef}
            className={`mt-4 text-white transition-all duration-500 ${isMobile ? "" : ""}`}
          >
            <h3 className="text-lg font-semibold text-teal-400 truncate">
              {title || "Premium Content"}
            </h3>
            <p className="text-sm text-gray-300 mt-1 line-clamp-3">
              {description ||
                "High-quality premium content with elegant styling."}
            </p>
            
            {/* Call to Action Button */}
            <div 
              ref={ctaButtonRef}
              className={`flex items-center justify-center mt-4 bg-teal-500/40 backdrop-blur-sm text-white py-2 px-4 rounded-lg transition-all duration-300 border border-teal-500/30 ${isMobile ? "hover:bg-teal-500/60" : ""}`}
            >
              <span className="font-medium">View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default EventsCard;