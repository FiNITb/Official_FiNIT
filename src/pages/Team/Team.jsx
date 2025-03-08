import React, { useRef, useEffect } from 'react';
import './Team.css';
import { TeamDetails } from '../../Features/TeamSlice';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';  
import gsap from 'gsap';

const Team = () => {
  const headingRef = useRef(null);
  const secondYearRef = useRef([]);
  const thirdYearRef = useRef([]);
  const thirdYearHeadingRef = useRef(null);
  const secondYearHeadingRef = useRef(null);

  useEffect(() => {
    // Animation for the main heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      }
    );
    // Animation for the third-year heading
    gsap.fromTo(
    thirdYearHeadingRef.current,
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
    }
  );

    // Animation for third-year members
    thirdYearRef.current.forEach((el) => {
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

    secondYearRef.current.forEach((el) => {
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
    <div className="team-container bg-gradient-to-r from-purple-950 to-black overflow-hidden">
      {/* Main Heading */}
      <h1 ref={headingRef} className="team-heading">Meet Our Team</h1>

      {/* Third Year Section (Placed Above Second Year) */}
      <section className="third-year-section py-20">
          <h1 ref={thirdYearHeadingRef} className="section-heading text-5xl pb-10 text-whitey font-semibold">Faculty Co-ordinators</h1>
          <div className="team-grid mt-6 px-36 justify-center md:justify-start">
            {TeamDetails.facultyCoordinator.map((member, index) => (
          <div
            key={member.id}
            className="card team-member"
            ref={(el) => (thirdYearRef.current[index] = el)}
          >
            <div className="overlay"></div> 
            <div className="circle">  	  
              <img src={member.profileImage} alt={member.name} className="team-photo" />
            </div>
            <h2 className="team-name">{member.name}</h2>
            <p className="team-position">{member.role}</p>

            {/* Social Media Icons */}
              <div className="social-icons">
                <a href={member.linkedIn} target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                {/* <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
                <a href={member.email} target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Third Year Section (Placed Above Second Year) */}
        <section className="third-year-section py-20">
          <h1 ref={thirdYearHeadingRef} className="section-heading text-5xl pb-10 text-whitey font-semibold">Core Team</h1>
          <div className="team-grid mt-6 px-36 justify-center md:justify-start">
            {TeamDetails.thirdYear.map((member, index) => (
          <div
            key={member.id}
            className="card team-member"
            ref={(el) => (thirdYearRef.current[index] = el)}
          >
            <div className="overlay"></div> 
            <div className="circle">  	  
              <img src={member.profileImage} alt={member.name} className="team-photo" />
            </div>
            <h2 className="team-name">{member.name}</h2>
            <p className="team-position">{member.role}</p>

            {/* Social Media Icons */}
              <div className="social-icons">
                <a href={member.linkedIn} target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Second Year Section */}
      <section className="second-year-section py-40 ">
      <h1 ref={secondYearHeadingRef} className="section-heading text-5xl pb-10 text-whitey font-semibold">Second Year</h1>
        <div className="team-grid mt-6 px-36 justify-center md:justify-start">
          {TeamDetails.secondYear.map((member, index) => (
            <div
              key={member.id}
              className="card team-member"
              ref={(el) => (secondYearRef.current[index] = el)}
            >
              <div className="overlay"></div>
              <div className="circle">
                <img src={member.profileImage} alt={member.name} className="team-photo" />
              </div>
              <h2 style={{ fontFamily: 'fh1' }} className="team-name">{member.name}</h2>
              <p style={{ fontFamily: 'fh2' }} className="team-position">{member.role}</p>

              {/* Social Media Icons */}
              <div className="social-icons">
                <a href={member.linkedIn} target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;