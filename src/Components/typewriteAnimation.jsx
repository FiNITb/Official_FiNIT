import { useRef, useEffect } from "react";
import gsap from "gsap";

const TypewriterAnimation = () => {
  const titleRef = useRef(null);
  const words = ["FiNIT", "₣1₦1₮"];

  useEffect(() => {
    let index = 0;

    const animateText = () => {
      const word = words[index].split("");
      titleRef.current.innerHTML = ""; // Clear previous text
      const spans = [];

      word.forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        titleRef.current.appendChild(span);
        spans.push(span);
      });

      // Animate letters appearing one by one
      gsap.fromTo(
        spans,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          onComplete: () => {
            // Animate letters disappearing in reverse order
            gsap.to(spans.reverse(), {
              opacity: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.in",
              onComplete: () => {
                index = (index + 1) % words.length;
                animateText();
              },
            });
          },
        }
      );
    };

    animateText();
  }, []);

  return <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold leading-tight"></h1>;
};

export default TypewriterAnimation;
