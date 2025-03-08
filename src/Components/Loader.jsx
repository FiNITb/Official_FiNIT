import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../assets/nav_logo.jpg"; 

const Loader = () => {
  const coinRef = useRef(null);

  useEffect(() => {
    gsap.to(coinRef.current, {
      rotationY: 360, 
      repeat: -1, 
      yoyo: true, 
      duration: 4.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="relative w-32 h-32">
        <div 
          ref={coinRef} 
          className="w-32 h-32 rounded-full border-8 border-yellow-500 shadow-[0_4px_20px_rgba(255,215,0,0.6)] 
          flex items-center justify-center overflow-hidden"
        >
          {/* Full Cover Image */}
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Loading Text */}
      <p className="mt-6 text-xl text-yellow-300 font-semibold tracking-wide font-[Poppins]">
        Investing Your Time... ⏳
      </p>
    </div>
  );
};

export default Loader;
