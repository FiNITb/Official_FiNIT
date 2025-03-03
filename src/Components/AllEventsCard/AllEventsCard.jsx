import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PremiumImageContainer = ({ title, description, imageUrl }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const captionRef = useRef(null);
    
    useGSAP(() => {
      const ctx = gsap.context(() => {
        gsap.set(containerRef.current, { 
          transformPerspective: 1000, 
          transformStyle: "preserve-3d" 
        });
    
        // Create random points for the magnetic effect
        const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const points = Array.from({ length: 6 }, () => ({
          x: rand(-15, 15),
          y: rand(-15, 15),
          scale: rand(95, 110) / 100,
          rotation: rand(-5, 5)
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
            ease: "sine.inOut"
          })
          .to(imageRef.current, {
            scale: 1,
            rotate: -0.5,
            duration: 3,
            ease: "sine.inOut"
          });
    
        // Main hover animation
        const hoverTl = gsap.timeline({ paused: true });
        
        hoverTl
          .to(containerRef.current, {
            rotationY: 5,
            rotationX: -7,
            y: -10,
            boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2), 0px 0px 15px rgba(94, 234, 212, 0.5)",
            duration: 0.4,
            ease: "power2.out"
          })
          .to(imageRef.current, {
            scale: 1.12,
            filter: "saturate(1.3) brightness(1.1)",
            duration: 0.4,
            ease: "back.out(1.5)"
          }, 0)
          .to(captionRef.current, {
            y: -15,
            opacity: 1,
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            textShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
            duration: 0.5,
            ease: "power3.out"
          }, 0.1);
    
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
            ease: "power2.out"
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
            onComplete: () => setTimeout(magneticEffect, rand(1000, 2000))
          });
        };
    
        // Event listeners
        containerRef.current.addEventListener("mouseenter", () => {
          isHovering = true;
          ambientTl.pause();
          hoverTl.play();
          magneticEffect();
          document.addEventListener("mousemove", trackMouse);
        });
        
        containerRef.current.addEventListener("mouseleave", () => {
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
            onComplete: () => ambientTl.play()
          });
        });
      });
    
      return () => ctx.revert(); // Cleanup GSAP context
    }, []);

  return (
    <div className="max-w-2xl h-4xl mx-auto my-12 px-4">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-black to-gray-900 p-1 transition-all"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 opacity-50 blur-xl"></div>

        <div className="relative p-4 bg-black/60 backdrop-blur-lg rounded-lg overflow-hidden">
          {/* Decorative Blurred Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>

          {/* Image Container */}
          <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-lg w-full h-80 bg-gray-800">
            {/* Placeholder Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 transition-opacity duration-500">

            </div>

            {/* Image with GSAP Animation */}
            <img
              ref={imageRef}
              src={imageUrl || "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"}
              alt="Premium content"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

          {/* Caption with Glassmorphism Effect */}
          <div ref={captionRef} className="mt-4 text-white transition-all duration-500">
            <h3 className="text-lg font-semibold text-teal-400">{title || "Premium Content"}</h3>
            <p className="text-sm text-gray-300 mt-1">
              {description || "High-quality premium content with elegant styling."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumImageContainer;
