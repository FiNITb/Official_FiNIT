import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./About.css";
import { useGSAP } from "@gsap/react";
import ab_img1 from "../../assets/about_us_manit.avif";
import ab_img2 from "../../assets/about3.png"

const About = () => {
  const headingRef = useRef(null);
  const sectionRefs = useRef([]);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  useGSAP(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    // Create a timeline for each section for more control
    sectionRefs.current.forEach((section, index) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });

      // Stagger the text and image animations for smoother effect
      timeline
        .from(imageRefs.current[index], {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100, // Alternate direction
          duration: 1.2,
          ease: "power2.out"
        })
        .from(textRefs.current[index], {
          opacity: 0,
          x: index % 2 === 0 ? 100 : -100, // Opposite direction to image
          duration: 1.2,
          ease: "power2.out"
        }, "-=0.8"); // Start text animation before image animation completes
    });
  }, []);

  return (
    <div className="container-about bg-gradient-to-r from-purple-950 to-black">
      <div className="about-container overflow-x-hidden">
        <h1 ref={headingRef} className="about-heading mt-3">
          About us
        </h1>

        {/* First Section */}
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className="about-section mt-5 gap-5"
        >
          <div className="about-image" ref={(el) => (imageRefs.current[0] = el)}>
            <img src={ab_img1} alt="About Us" />
          </div>
          <div className="about-text flex flex-col justify-center" ref={(el) => (textRefs.current[0] = el)}>
            <h2 className="about-subheading">Our Vision</h2>
            <p>
              Our vision is to cultivate a financially empowered generation by
              equipping students with the knowledge and skills to navigate the
              complexities of personal and professional finance. We aspire to
              foster a culture of financial literacy, where students confidently
              make informed decisions about budgeting, saving, and investing. By
              providing insights into diverse income opportunities and
              innovative entrepreneurial ventures, we aim to inspire financial
              independence and creativity.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className="about-section gap-5"
        >
          <div className="about-image" ref={(el) => (imageRefs.current[1] = el)}>
            <img src={ab_img2} alt="About Us" />
          </div>
          <div className="about-text flex flex-col justify-center" ref={(el) => (textRefs.current[1] = el)}>
            <h2 className="about-subheading">Our Mission</h2>
            <p>
              Our mission is to empower students with practical financial
              knowledge and skills, enabling them to make informed decisions and
              achieve financial independence. We are committed to providing
              engaging educational opportunities that cover essential topics
              such as budgeting, saving, investing, and money management. By
              exploring diverse income avenues and fostering entrepreneurial
              innovation, we inspire students to pursue their financial goals
              with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;