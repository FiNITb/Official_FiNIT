import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typewriter from "../../Components/typewriteAnimation";
import side from "../../assets/side.webp";
import heroImg from "../../assets/Asset 5.png";
import { TextPlugin } from "gsap/TextPlugin";
import Social from "../../Components/Social/Social";

gsap.registerPlugin(TextPlugin);

const Homepage = () => {
  const sideImgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sloganRef = useRef(null);
  const buttonRef = useRef(null);
  const heroImgRef = useRef(null);
  const glowRef = useRef(null);
  const socialRef = useRef(null);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [hideTitle, setHideTitle] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        setHideTitle(true); // Hide "FiNIT"
        setShowTypewriter(true); // Show Typewriter
      },
    });

    const titleElement = titleRef.current;
    const titleText = "FiNIT";
    titleElement.innerHTML = ""; // Clear existing content

    const letters = [];
    [...titleText].forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.display = "inline-block";
      span.style.position = "relative";
      span.className = `title-letter letter-${index}`;
      titleElement.appendChild(span);
      letters.push(span);
    });

    gsap.set(sideImgRef.current, { opacity: 0, x: -100 });
    gsap.set(letters, { opacity: 0, y: -50, rotationX: -90 });
    gsap.set(heroImgRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });

    tl.to(sideImgRef.current, { opacity: 1, x: 0, duration: 1.2 })
      .to(
        letters,
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      )
      .fromTo(
        [
          subtitleRef.current,
          sloganRef.current,
          buttonRef.current,
          socialRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      )
      .to(glowRef.current, { opacity: 0.5, scale: 1, duration: .7 }, "-=0.4")
      .to(heroImgRef.current, { opacity: 1, scale: 1, duration: 1 }, "-=1.2")
      .to(
        letters.reverse(),
        { opacity: 0, y: 50, duration: 0.8, stagger: 0.15 },
        "+=0.4" // Ensuring fade out happens **last**
      );

    gsap.to(heroImgRef.current, {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Add subtle pulse to the glow effect
    gsap.to(glowRef.current, {
      scale: 1.1,
      opacity: 0.7,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

 // Button hover animation with refined effects
const onButtonEnter = () => {
  gsap.to(buttonRef.current, {
    scale: 1.03,
    backgroundColor: "#2c7a7b",
    boxShadow: "0 4px 12px rgba(56, 178, 172, 0.4)",
    y: -2,
    duration: 0.25,
    ease: "power2.out"
  });
};

const onButtonLeave = () => {
  gsap.to(buttonRef.current, {
    scale: 1,
    backgroundColor: "#38b2ac",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    y: 0,
    duration: 0.25,
    ease: "power2.in"
  });
};

  return (
    <>
      <img
        ref={sideImgRef}
        src={side}
        alt="Side Design"
        className="fixed max-w-[200px] md:max-w-[300px]"
      />
      <div className="min-h-screen flex items-center justify-center px-6 py-24 sm:py-32 bg-gradient-to-r from-purple-950 to-black overflow-hidden">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 items-center text-white z-10">
          {/* Left Section */}
          <div className="text-center md:text-left space-y-2">
            {/* Prevents layout shift */}
            <div>
              {!hideTitle && (
                <h1
                  ref={titleRef}
                  className="font-bold leading-tight font-[Poppins]"
                  style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}
                ></h1>
              )}
              {showTypewriter && <Typewriter />}
            </div>

            <p
              ref={subtitleRef}
              className="font-bold mt-4 mb-3 leading-snug uppercase font-[Poppins]"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              <span className="text-teal-500">The Finance Society</span> <br />
              NIT Bhopal
            </p>

            <span
              ref={sloganRef}
              className="font-semibold py-4 block"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.75rem)" }}
            >
              where innovation meets{" "}
              <span className="text-[#9b51e0]">financial literacy</span>.
            </span>

            <div
              className="mt-4 inline-block rounded-full overflow-hidden"
              ref={buttonRef}
              onMouseEnter={onButtonEnter}
              onMouseLeave={onButtonLeave}
            >
              <a
                href="https://drive.google.com/file/d/159i3b8A5cAjXDjd-s07HZ0K4pJ3QQf1W/view?usp=sharing"
                download="FiNIT_Brochure.pdf"
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-teal-500 text-white rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:bg-teal-400 hover:shadow-md inline-flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                FiNIT Brochure
              </a>
            </div>
            <div
              ref={socialRef}
              className="flex justify-center md:justify-start mt-6 space-x-4"
            >
              <Social />
            </div>
          </div>

          {/* Right Section - Hero Image */}
          <div className="relative flex justify-center w-full md:w-auto">
            <div
              ref={glowRef}
              className="absolute inset-0 flex justify-center items-center"
            >
              <div className="w-[80%] h-[80%] bg-purple-500 blur-3xl opacity-50 rounded-full"></div>
            </div>
            <img
              ref={heroImgRef}
              src={heroImg}
              alt="Crypto Illustration"
              className="relative max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
