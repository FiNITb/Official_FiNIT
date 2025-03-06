import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./About.css";
import { useGSAP } from "@gsap/react";
import ab_img1 from "../../assets/manitTomb.jpg";
import ab_img2 from "../../assets/about2.jpg";

const About = () => {
  const headingRef = useRef(null);
  const sectionRefs = useRef([]);
  useGSAP(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      delay: 0.5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    sectionRefs.current.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        x: 500,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
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
          className="about-section mt-5"
        >
          <div className="about-image">
            <img src={ab_img1} alt="About Us" />
          </div>
          <div className="about-text flex flex-col justify-center">
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
          className="about-section"
        >
          <div className="about-image">
            <img src={ab_img2} alt="About Us" />
          </div>
          <div className="about-text flex flex-col justify-center">
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
